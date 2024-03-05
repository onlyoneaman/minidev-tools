import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {Textarea} from "@/components/ui/textarea";

const Base64ToImage = () => {
  const [base64String, setBase64String] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const handleBase64Change = (event: any) => {
    const base64 = event.target.value;
    setBase64String(base64);
  };

  const handleConvert = () => {
    if (base64String) {
      setImageSrc(base64String);
    } else {
      toast.warning('Please enter a Base64 string.');
    }
  };

  const handleOpenImage = () => {
    // Convert the base64 string to a Blob
    const byteString = atob(imageSrc.split(',')[1]);
    const mimeString = imageSrc.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], {type: mimeString});
    const blobUrl = URL.createObjectURL(blob);

    window.open(blobUrl, '_blank');
  };

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'minidev_tools_base64_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <label htmlFor="base64String" className="block opacity-70 mb-2">Base64 String:</label>
      <Textarea
        id="base64String"
        rows={5}
        value={base64String}
        onChange={handleBase64Change}
        placeholder="Paste or type the Base64 string here"
      />
      <Button onClick={handleConvert} className="mt-4">Convert to Image</Button>
      {imageSrc && (
        <div className="mt-4">
          <img src={imageSrc} alt="Converted" className="mx-auto max-h-40"/>
          <div className="mt-2 flex justify-center">
            <Button
              onClick={handleOpenImage}
              className="mr-2"
            >
              Open
            </Button>
            <Button onClick={handleDownloadImage}>Download</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Base64ToImage;
