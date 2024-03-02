import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {toast} from "sonner";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";

const Base64Encoder = () => {
  const [input, setInput] = useState('');
  const [encodedResult, setEncodedResult] = useState('');

  const handleEncode = (event: any) => {
    event.preventDefault(); // Prevent form submission
    const encoded = btoa(input); // Use btoa for Base64 encoding
    setEncodedResult(encoded);
  };

  const handleCopy = () => {
    if(encodedResult) {
      navigator.clipboard.writeText(encodedResult);
      toast.success('Copied to clipboard!');
    } else {
      toast.warning('Nothing to copy!');
    }
  };

  return (
    <div>
      <form className="flex flex-col space-y-4" onSubmit={handleEncode}>
        <label htmlFor="input">Text to Encode:</label>
        <Input
          id="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text here"
        />
        <Button type="submit">Encode</Button>
        <div className="mt-4 space-y-2">
          <label htmlFor="encodedResult" className="block mb-2">Encoded Result:</label>
          <Textarea
            id="encodedResult"
            readOnly
            value={encodedResult}
          />
          <Button onClick={handleCopy}>Copy Encoded Text</Button>
        </div>
      </form>
    </div>
  );
};

export default Base64Encoder;
