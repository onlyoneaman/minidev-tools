import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

const Base64Decoder = () => {
  const [input, setInput] = useState('');
  const [decodedResult, setDecodedResult] = useState('');

  const handleDecode = (event: any) => {
    event.preventDefault(); // Prevent form submission
    try {
      const decoded = atob(input); // Use atob for Base64 decoding
      setDecodedResult(decoded);
    } catch (e) {
      setDecodedResult('Error decoding Base64 string.');
    }
  };

  const handleCopy = () => {
    if (decodedResult) {
      navigator.clipboard.writeText(decodedResult);
      toast.success('Copied to clipboard!');
    } else {
      toast.warning('Nothing to copy!');
    }
  };

  return (
    <div>
      <form className="flex flex-col space-y-4" onSubmit={handleDecode}>
        <label htmlFor="input">Base64 Encoded Text:</label>
        <Input
          id="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Base64 encoded text here"
        />
        <Button type="submit">Decode</Button>
        <div className="mt-4 space-y-2">
          <label htmlFor="decodedResult" className="block mb-2">Decoded Result:</label>
          <Textarea
            id="decodedResult"
            readOnly
            value={decodedResult}
          />
          <Button onClick={handleCopy}>Copy Decoded Text</Button>
        </div>
      </form>
    </div>
  );
};

export default Base64Decoder;
