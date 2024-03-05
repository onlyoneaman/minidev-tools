import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "sonner";

const UnescapeSpecialCharacters = () => {
  const [escapedText, setEscapedText] = useState('');
  const [unescapedText, setUnescapedText] = useState('');

  const handleEscapedInputChange = (event: any) => {
    setEscapedText(event.target.value);
  };

  const unescapeSpecialCharacters = () => {
    const unescapedString = escapedText.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&#x60;/g,
      function (match: string): string {
        let unescapedString = {
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&#39;': "'",
          '&#x60;': '`',
        }[match];
        return unescapedString || match;
      });
    setUnescapedText(unescapedString);
  };

  const handleClear = () => {
    setEscapedText('');
    setUnescapedText('');
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(unescapedText)
      .then(() => {
        toast.success('Text copied to clipboard');
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        toast.error('Failed to copy text to clipboard');
        console.error('Failed to copy text to clipboard:', error);
      });
  };

  return (
    <div className="space-y-3">
      <label htmlFor="escapedText" className="block opacity-70 mb-2">Escaped Text:</label>
      <Textarea
        id="escapedText"
        rows={5}
        value={escapedText}
        onChange={handleEscapedInputChange}
        placeholder="Enter escaped text here"
      />
      <div className="flex justify-center mt-4">
        <Button onClick={unescapeSpecialCharacters} className="mr-2">Unescape Characters</Button>
        <Button onClick={handleClear} className="mr-2">Clear</Button>
      </div>
      {unescapedText && (
        <div className="mt-4">
          <label htmlFor="unescapedText" className="block opacity-70 mb-2">Unescaped Text:</label>
          <Textarea
            id="unescapedText"
            rows={5}
            value={unescapedText}
            readOnly
          />
        </div>
      )}
      {unescapedText && (
        <Button onClick={handleCopyToClipboard}>Copy</Button>
      )}
    </div>
  );
};

export default UnescapeSpecialCharacters;
