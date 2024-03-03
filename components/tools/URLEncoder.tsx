import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {toast} from "sonner";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Card, CardContent} from "@/components/ui/card";

const URLEncoder = () => {
  const [input, setInput] = useState('');
  const [encodedResult, setEncodedResult] = useState('');

  const handleEncode = (event: any) => {
    event.preventDefault(); // Prevent form submission
    const encoded = encodeURIComponent(input);
    setEncodedResult(encoded);
  };

  const handleCopy = async () => {
    if (encodedResult) {
      try {
        await navigator.clipboard.writeText(encodedResult);
        toast.success('Copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    } else {
      toast.warning('Nothing to copy!');
    }
  };

  return (
    <>
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleEncode}
      >
        <label htmlFor="input">Text to Encode:</label>
        <Input
          id="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text here"
        />
        <Button type="submit">
          Encode
        </Button>
        <div className="mt-4">
          <label htmlFor="encodedResult" className="block mb-2">Encoded Result:</label>
          <Textarea
            id="encodedResult"
            readOnly
            value={encodedResult}
          />
          <div className="mt-2">
            <Button onClick={handleCopy}>
              Copy
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default URLEncoder
