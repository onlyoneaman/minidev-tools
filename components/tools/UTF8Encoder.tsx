import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

const UTF8Encoder = () => {
  const [input, setInput] = useState('');
  const [encoded, setEncoded] = useState('');

  const encodeInput = () => {
    setEncoded(encodeURIComponent(input));
  };

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <div className="p-4 space-y-4">
      <Textarea
        className="w-full p-2 border rounded"
        placeholder="Enter text to encode"
        value={input}
        onChange={handleInputChange}
      />
      <Button onClick={encodeInput}>Encode</Button>
      <Textarea
        className="w-full p-2 border rounded"
        placeholder="Encoded result"
        value={encoded}
        readOnly
      />
    </div>
  );
};

export default UTF8Encoder;
