import {Button} from "@/components/ui/button";
import {loremIpsum} from 'lorem-ipsum';
import {useState} from "react";
import {toast} from "sonner";
import {Input} from "@/components/ui/input";
import {LoremUnit} from "lorem-ipsum/types/src/constants/units";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {event} from "nextjs-google-analytics";

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
    event("lorem_ipsum_generate", {
      category: "lorem_ipsum",
      label: ["generate", count, unit].join("_"),
    })
  };

  const changeUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value as LoremUnit);
  }

  const copyToClipboard = () => {
    if (loremText) {
      navigator.clipboard.writeText(loremText).then(() => {
        toast.success("Copied to clipboard");
      }, () => {
        toast.warning("Failed to copy");
      });
      event("lorem_ipsum_copy_text", {
        category: "lorem_ipsum",
        label: "copy",
      })
    } else {
      toast.warning("Nothing to copy");
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center space-x-0 space-y-2 sm:space-x-3 sm:space-y-0 mb-5">
        <Input
          type="number"
          min="1"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)}
          className="border border-gray-300 bg-transparent shadow-sm rounded-md p-2"
          placeholder="Number (e.g., 5)"
        />

        <Select
          value={unit}
          onValueChange={(value) => changeUnit({target: {value}} as any)}
        >
          <SelectTrigger>
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            {
              unitValues.map((value) => (
                <SelectItem
                  key={value}
                  value={value}
                >
                  {value}
                </SelectItem>
              ))
            }
          </SelectContent>
        </Select>
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

      <Textarea
        readOnly
        value={loremText}
        className="h-40"
      />
    </>
  );
};

export default LoremIpsumGenerator;
