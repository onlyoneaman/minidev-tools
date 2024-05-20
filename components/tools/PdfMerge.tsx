import React, {useState} from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import {Button} from '@/components/ui/button';
import {Input} from "@/components/ui/input";
import {createPDF, mergePDF, pdfArrayToBlob} from 'pdf-actions';

const PdfMerge: React.FC = () => {
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const [mergedPdf, setMergedPdf] = useState<Blob | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setPdfFiles(files);
  };

  const downloadPdf = () => {
    const url = URL.createObjectURL(mergedPdf);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged.pdf';
    a.click();
  }

  const mergePdfs = async () => {
    setLoading(true);
    try {
      const pdfDocuments = await Promise.all(
        pdfFiles.map(async (file) => await createPDF.PDFDocumentFromFile(file))
      );
      const mergedPDFDocument = await mergePDF(pdfDocuments);
      const mergedPdfFile = await mergedPDFDocument.save();
      const pdfBlob = pdfArrayToBlob(mergedPdfFile);
      setMergedPdf(pdfBlob);
    } catch (error) {
      console.error('Error merging PDFs:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Input
        type="file"
        multiple
        accept=".pdf"
        onChange={handleFileChange}
      />
      <Button
        variant="default"
        onClick={mergePdfs}
        disabled={pdfFiles.length === 0}
      >
        { loading ? 'Merging...' : 'Merge PDFs' }
      </Button>
      {mergedPdf && (
        <PDFViewer>
          <object
            data={URL.createObjectURL(mergedPdf)}
            type="application/pdf"
          />
        </PDFViewer>
      )}
      {mergedPdf && (
        <Button
          variant={'secondary'}
          onClick={() => downloadPdf()}
        >
          Download PDF
        </Button>
      )}
    </div>
  );
};

export default PdfMerge;
