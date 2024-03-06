import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {Textarea} from "@/components/ui/textarea";
import {usePDF} from "react-to-pdf";

const HtmlToPdf = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const {toPDF, targetRef} = usePDF();

  const handleHtmlChange = (event: any) => {
    setHtmlContent(event.target.value);
  };

  const handleConvertToPdf = () => {
    try {
      if (!htmlContent) {
        toast.warning('Please enter some HTML content.');
        return;
      }
      toPDF();
    } catch (e) {
      toast.error('An error occurred while converting to PDF.');
    }
  };

  return (
    <div className="space-y-3">
      <label htmlFor="htmlContent" className="block opacity-70 mb-2">HTML Content:</label>
      <Textarea
        id="htmlContent"
        rows={10}
        value={htmlContent}
        onChange={handleHtmlChange}
        placeholder="Paste or type the HTML content here"
      />
      <div
        ref={targetRef}
        dangerouslySetInnerHTML={{
          __html: htmlContent
        }}
      />
      <div>
        <Button onClick={handleConvertToPdf} className="mt-4">
          Convert to PDF
        </Button>
        {
          htmlContent && (
            <Button
              onClick={() => setHtmlContent('')}
              className="mt-4 ml-2"
            >
              Clear
            </Button>
          )
        }
      </div>
    </div>
  );
};

export default HtmlToPdf;
