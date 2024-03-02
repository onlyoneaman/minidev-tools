import { Button } from "@/components/ui/button";
import { loremIpsum } from 'lorem-ipsum';
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {LoremUnit} from "lorem-ipsum/types/src/constants/units";

const LoremIpsumGenerator = () => {
  const [loremText, setLoremText] = useState('');
  const [count, setCount] = useState(5);
  const [unit, setUnit] = useState<LoremUnit>('sentences');
  const unitValues: LoremUnit[] = ["words", "sentences", "paragraphs"];

  const generateLoremIpsum = () => {
    const text = loremIpsum({
      count: count || 5, // Fallback to 5 if count is falsy
      format: "plain",
      units: unit
    });
    setLoremText(text);
  };

  const changeUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value as LoremUnit);
  }

  const copyToClipboard = () => {
    if (loremText) {
      navigator.clipboard.writeText(loremText).then(() => {
        toast.success("Copied to clipboard");
      }, () => {
        toast.error("Failed to copy");
      });
    }
  };

  return (
    <div className="space-y-4 p-4 max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row justify-center space-x-0 space-y-2 sm:space-x-3 sm:space-y-0 mb-5">
        <Input
          type="number"
          min="1"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)}
          className="border border-gray-300 bg-transparent shadow-sm rounded-md p-2"
          placeholder="Number (e.g., 5)"
        />

        <select
          value={unit}
          onChange={(e) => changeUnit(e)}
          className="border border-gray-300 bg-transparent shadow-sm rounded-md p-2 cursor-pointer"
        >
          {unitValues.map((value) => (
            <option key={value} value={value} className="capitalize">
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center space-x-2">
        <Button
          onClick={generateLoremIpsum}
        >
          Generate
        </Button>

        <Button
          onClick={copyToClipboard}
        >
          Copy
        </Button>
      </div>

      <textarea
        readOnly
        value={loremText}
        className="w-full h-40 p-4 bg-transparent rounded-lg border border-gray-300 shadow-sm"
      />
    </div>
  );
};

export default LoremIpsumGenerator;
