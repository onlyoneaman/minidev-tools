import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {Textarea} from "@/components/ui/textarea";
import {event} from "nextjs-google-analytics";

const JSONMinifier = () => {
  const [input, setInput] = useState('');
  const [compactedJson, setCompactedJson] = useState('');

  const handleCompact = (clickEvent: any) => {
    event("json_minifier_compact", {
      category: "json_minifier",
      label: "json_minifier_compact"
    })
    clickEvent.preventDefault();
    try {
      const parsedJson = JSON.parse(input);
      const compacted = JSON.stringify(parsedJson);
      setCompactedJson(compacted);
    } catch (e: any) {
      setCompactedJson('Error compacting JSON. ' + e.message);
    }
  };

  const handleCopy = () => {
    event("json_minifier_copy", {
      category: "json_minifier",
      label: "json_minifier_copy"
    })
    if (compactedJson) {
      navigator.clipboard.writeText(compactedJson);
      toast.success('Copied to clipboard!');
    } else {
      toast.warning('Nothing to copy!');
    }
  };

  return (
    <div>
      <form className="flex flex-col space-y-4" onSubmit={handleCompact}>
        <label htmlFor="input">JSON:</label>
        <Textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter JSON here"
        />
        <Button type="submit">Compact</Button>
        <div className="mt-4 space-y-2">
          <label htmlFor="minifiedJson" className="block mb-2">Minified JSON:</label>
          <Textarea
            className="h-32"
            id="minifiedJson"
            readOnly
            value={compactedJson}
          />
          <Button onClick={handleCopy}>Copy Minified JSON</Button>
        </div>
      </form>
    </div>
  );
};

export default JSONMinifier;
