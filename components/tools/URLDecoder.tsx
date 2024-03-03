import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {toast} from "sonner";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Card, CardContent} from "@/components/ui/card";

const URLDecoder = () => {
  const [input, setInput] = useState('');
  const [decodedResult, setDecodedResult] = useState('');

  const handleDecode = (event: any) => {
    event.preventDefault(); // Prevent form submission
    const decoded = decodeURIComponent(input);
    setDecodedResult(decoded);
  };

  const handleCopy = () => {
    if (decodedResult) {
      navigator.clipboard.writeText(decodedResult);
      toast.success('Copied to clipboard!');
    } else {
      toast.warning('Nothing to copy!')
    }
  };

  return (
    <>
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleDecode}
      >
        <label htmlFor="input">Encoded Text:</label>
        <Input
          id="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter encoded text here"
        />
        <Button type="submit">
          Decode
        </Button>
        <div className="mt-4 space-y-2">
          <label htmlFor="decodedResult" className="block mb-2">Decoded Result:</label>
          <Textarea
            id="decodedResult"
            readOnly
            value={decodedResult}
          />
          <Button onClick={handleCopy}>
            Copy Decoded Text
          </Button>
        </div>
      </form>
    </>
  );
};

export default URLDecoder;
