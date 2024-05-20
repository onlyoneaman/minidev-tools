import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const ImageToBase64 = () => {
  const [base64String, setBase64String] = useState('');
  const [previewSrc, setPreviewSrc] = useState('');
  const [dragging, setDragging] = useState(false);

  const handleDropzoneDragOver = (event: any) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDropzoneDragLeave = () => {
    setDragging(false);
  };

  const handleDropzoneDrop = (event: any) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    convertToBase64(file);
  };

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    convertToBase64(file);
  };

  const convertToBase64 = (file: any) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewSrc(reader.result as string);
        setBase64String(reader.result as string);
      };
      reader.onerror = () => {
        toast.error('Error converting image to Base64');
      };
    }
  };

  const handleCopy = (event: any) => {
    event.preventDefault();
    if (base64String) {
      navigator.clipboard.writeText(base64String);
      toast.success('Base64 string copied to clipboard!');
    } else {
      toast.warning('Nothing to copy!');
    }
  };

  return (
    <div className="relative border-2 border-gray-300 border-dashed rounded-lg p-6">
      <div
        className="dropzone"
        onDragOver={handleDropzoneDragOver}
        onDragLeave={handleDropzoneDragLeave}
        onDrop={handleDropzoneDrop}
      >
        <input
          type="file"
          className="hidden"
          id="file-input"
          onChange={handleFileInputChange}
        />
        <label htmlFor="file-input" className="flex flex-col items-center justify-center h-full">
          <img className="mx-auto h-12 w-12 dark:bg-white" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt=""/>
          <h3 className="mt-2 text-sm font-medium text-center">
            Drag and drop or <span className="text-indigo-600 cursor-pointer">browse</span> to upload
          </h3>
          <p className="mt-1 text-xs opacity-50">
            PNG, JPG, GIF up to 10MB
          </p>
        </label>
      </div>
      {previewSrc && (
        <img src={previewSrc} className="mt-4 mx-auto max-h-40" alt="Preview"/>
      )}
      <div className="mt-4 space-y-2">
        <label htmlFor="base64String" className="block opacity-70 mb-2">Base64 String:</label>
        <Textarea
          id="base64String"
          readOnly
          value={base64String}
          className="w-full md:h-32 bg-gray-200 dark:bg-gray-600 rounded-lg p-2"
        />
        <Button onClick={handleCopy} className="w-full">Copy Base64 String</Button>
      </div>
    </div>
  );
};

export default ImageToBase64;
