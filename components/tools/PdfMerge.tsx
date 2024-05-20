import React, {useState} from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import {Button} from '@/components/ui/button';
import {Badge} from "@/components/ui/badge";
import {createPDF, mergePDF, pdfArrayToBlob} from 'pdf-actions';
import Dropzone from 'react-dropzone';
import {PlusIcon, ArrowLeftIcon, DownloadIcon} from '@radix-ui/react-icons';
import {toast} from "sonner";

const PdfMerge: React.FC = () => {
  const [pdfFiles, setPdfFiles] = useState<File[]>([]);
  const [mergedPdf, setMergedPdf] = useState<Blob | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showMergedScreen, setShowMergedScreen] = useState<boolean>(false);

  const handleFileChange = (acceptedFiles: File[]) => {
    setPdfFiles([...pdfFiles, ...acceptedFiles]);
  };

  const removePdfFile = (index: number) => {
    const updatedFiles = [...pdfFiles];
    updatedFiles.splice(index, 1);
    setPdfFiles(updatedFiles);
  };

  const downloadPdf = () => {
    if(!mergedPdf) {
      toast.error('No merged PDF found');
      return;
    }
    const url = URL.createObjectURL(mergedPdf);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged.pdf';
    a.click();
  };

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
      setShowMergedScreen(true);
    } catch (error) {
      console.error('Error merging PDFs:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {!showMergedScreen ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Merge PDF</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {pdfFiles.map((file, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex flex-col items-center gap-1 p-2"
              >
                <object
                  data={URL.createObjectURL(file)}
                  type="application/pdf"
                  width="80%"
                  height="150px"
                />
                <div
                  className="flex items-center justify-center gap-2"
                >
                  <span
                    className="truncate text-gray-500"
                  >
                    {file.name}
                  </span>
                  <Button size="sm" variant="ghost" onClick={() => removePdfFile(index)}>
                    &times;
                  </Button>
                </div>
              </Badge>
            ))}
          </div>
          <Dropzone onDrop={handleFileChange}>
            {({getRootProps, getInputProps}) => (
              <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center"
              >
                <input {...getInputProps()} />
                <div className="flex items-center gap-2">
                  <PlusIcon className="text-gray-500"/>
                  <span
                    className="text-gray-500">To change the order of your PDFs, drag and drop the files as you want.</span>
                </div>
              </div>
            )}
          </Dropzone>
          <Button variant="default" onClick={mergePdfs} disabled={pdfFiles.length === 0}>
            {loading ? 'Merging...' : 'Merge PDF'}
          </Button>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">PDFs have been merged!</h2>
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" onClick={() => setShowMergedScreen(false)}>
              <ArrowLeftIcon className="text-gray-500"/>
            </Button>
            <Button onClick={downloadPdf}>
              <DownloadIcon className="mr-2"/> Download merged PDF
            </Button>
          </div>
          {
            mergedPdf && (
              <PDFViewer>
                <object data={URL.createObjectURL(mergedPdf)} type="application/pdf"/>
              </PDFViewer>
            )
          }
        </div>
      )}
    </div>
  );
};

export default PdfMerge;
