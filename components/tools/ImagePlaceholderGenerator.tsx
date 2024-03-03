import React, {useState} from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

const ImagePlaceholderGenerator = () => {
  const [width, setWidth] = useState(640);
  const [height, setHeight] = useState(480);
  const [format, setFormat] = useState('.png');
  const [bgColor, setBgColor] = useState('#a59990');
  const [textColor, setTextColor] = useState('#000000');
  const [placeholderUrl, setPlaceholderUrl] = useState('');

  const handleGenerate = () => {
    const url = `https://via.placeholder.com/${width}x${height}${format}/${bgColor.substring(1)}/${textColor.substring(1)}?text=${width}x${height}`;
    setPlaceholderUrl(url);
    toast.success('Image Placeholder Generated!');
  };

  const handleCopy = () => {
    if (placeholderUrl) {
      navigator.clipboard.writeText(placeholderUrl);
      toast.success('URL Copied to Clipboard!');
    } else {
      toast.warning('Nothing to Copy!');
    }
  };

  return (
    <div className="space-y-3">

      <div className="flex flex-col space-y-4 py-2 md:py-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-3">
          <label htmlFor="width" className="">
            <span>Width</span>
            <Input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </label>
          <label htmlFor="height" className="">
            <span>Height</span>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
          <label htmlFor="format" className="">
            <span>Image Format</span>
            <Input
              id="format"
              type="text"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            />
          </label>
          <label htmlFor="bgColor" className="">
            <span>Background Color</span>
            <Input
              id="bgColor"
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </label>
          <label htmlFor="textColor" className="">
            <span>Text Color</span>
            <Input
              id="textColor"
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </label>
        </div>

        <Button onClick={handleGenerate}>
          Generate
        </Button>
      </div>

      {placeholderUrl && (
        <Card>
          <CardHeader>
            <h4>
              Output
            </h4>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <label htmlFor="placeholderUrl" className="flex flex-col w-full mr-4">
                <span className="sr-only">Generated URL</span>
                <Input
                  id="placeholderUrl"
                  type="text"
                  value={placeholderUrl}
                  readOnly
                />
              </label>
              <Button onClick={handleCopy}>
                Copy
              </Button>
            </div>
            <img
              src={placeholderUrl}
              alt="Image Placeholder"
              className="mt-4"
            />
          </CardContent>
        </Card>
      )}

    </div>
  );
};

export default ImagePlaceholderGenerator;
