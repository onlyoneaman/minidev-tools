import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

const UTFDecoder = () => {
  const [input, setInput] = useState('');
  const [decoded, setDecoded] = useState('');

  const decodeInput = () => {
    try {
      setDecoded(decodeURIComponent(input));
    } catch (e) {
      alert('The input is not a valid UTF-8 Encoded string.');
      setDecoded('');
    }
  };

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <div className="p-4 space-y-4">
      <Textarea
        className="w-full p-2 border rounded"
        placeholder="Enter encoded text to decode"
        value={input}
        onChange={handleInputChange}
      />
      <Button
        onClick={decodeInput}
      >
        Decode
      </Button>
      <Textarea
        className="w-full p-2 border rounded"
        placeholder="Decoded result"
        value={decoded}
        readOnly
      />
    </div>
  );
};

export default UTFDecoder;
