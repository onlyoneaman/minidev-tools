import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { createPDF, mergePDF, pdfArrayToBlob } from 'pdf-actions';
import Dropzone from 'react-dropzone';
import { PlusIcon, ArrowLeftIcon, DownloadIcon } from '@radix-ui/react-icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(pdfFiles);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPdfFiles(items);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {!showMergedScreen ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Merge PDF</h1>
          <Dropzone onDrop={handleFileChange}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center"
              >
                <input {...getInputProps()} />
                <div className="flex items-center gap-2 mb-4">
                  <PlusIcon className="text-gray-500" />
                  <span className="text-gray-500">
                    To change the order of your PDFs, drag and drop the files as you want.
                  </span>
                </div>
              </div>
            )}
          </Dropzone>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="pdfFiles">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-wrap gap-2"
                >
                  {pdfFiles.map((file, index) => (
                    <Draggable key={index} draggableId={`${index}`} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Badge variant="secondary" className="flex items-center gap-1">
                            {file.name}
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removePdfFile(index)}
                            >
                              &times;
                            </Button>
                          </Badge>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <Button variant="default" onClick={mergePdfs} disabled={pdfFiles.length === 0}>
            {loading ? 'Merging...' : 'Merge PDF'}
          </Button>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4">PDFs have been merged!</h2>
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" onClick={() => setShowMergedScreen(false)}>
              <ArrowLeftIcon className="text-gray-500" />
            </Button>
            <Button onClick={downloadPdf}>
              <DownloadIcon className="mr-2" /> Download merged PDF
            </Button>
          </div>
          <PDFViewer>
            <object data={URL.createObjectURL(mergedPdf)} type="application/pdf" />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

export default PdfMerge;
