import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "sonner";

const EscapeSpecialCharacters = () => {
  const [inputText, setInputText] = useState('');
  const [escapedText, setEscapedText] = useState('');

  const handleInputChange = (event: any) => {
    setInputText(event.target.value);
  };

  const escapeSpecialCharacters = () => {
    const escapedString = inputText.replace(/[&<>"'`]/g,
      function (match: string): string {
        let final = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
          '`': '&#x60;',
        }[match];
        return final || match;
      });
    setEscapedText(escapedString);
  };

  const handleClear = () => {
    setInputText('');
    setEscapedText('');
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(escapedText)
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
    <div>
      <label htmlFor="inputText" className="block opacity-70 mb-2">Input Text:</label>
      <Textarea
        id="inputText"
        rows={5}
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text with special characters to escape"
      />
      <div className="flex justify-center mt-4">
        <Button onClick={escapeSpecialCharacters} className="mr-2">Escape Characters</Button>
        <Button onClick={handleClear} className="mr-2">Clear</Button>
      </div>
      <div className={"space-y-3"}>
        {escapedText && (
          <div className="mt-4">
            <label htmlFor="escapedText" className="block opacity-70 mb-2">Escaped Text:</label>
            <Textarea
              id="escapedText"
              rows={5}
              value={escapedText}
              readOnly
            />
          </div>
        )}
        <div>
          {escapedText && (
            <Button onClick={handleCopyToClipboard}>Copy</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EscapeSpecialCharacters;
