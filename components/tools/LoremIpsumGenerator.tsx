import {Button} from "@/components/ui/button";
import {loremIpsum} from 'lorem-ipsum';
import {useState} from "react";
import {toast} from "sonner";

const LoremIpsumGenerator = () => {
  const [loremText, setLoremText] = useState('');
  const [count, setCount] = useState(5);
  const [unit, setUnit] = useState('sentences');

  const unitValues = ["words", "sentences", "paragraphs"];

  const generateLoremIpsum = () => {
    const text = loremIpsum({
      count: count || 5,
      format: "plain",
      units: unit as any
    });
    setLoremText(text);
  };

  const copyToClipboard = () => {
    toast.success("Copied to clipboard");
    navigator.clipboard.writeText(loremText);
  }

  return (
    <div className={"space-y-3"}>
      <div className="flex justify-center space-x-3 mb-5">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value, 10))}
          className="border border-gray-200 bg-transparent rounded-md p-2"
          placeholder="Number (e.g., 5)"
        />
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="border border-gray-200 bg-transparent rounded-md p-2"
        >
          {
            unitValues.map((value, index) => {
              return (
                <option
                  className={"capitalize"}
                  key={index}
                  value={value}
                >
                  {value}
                </option>
              )
            })
          }
        </select>
      </div>

      <div className={"flex items-center justify-center"}>
        <Button
          onClick={generateLoremIpsum}
        >
          Generate
        </Button>

        <Button
          onClick={() => copyToClipboard()}
          className="ml-3"
        >
          Copy
        </Button>
      </div>

      <textarea
        disabled
        value={loremText}
        className={"w-full h-40 p-4 rounded-lg border border-gray-300"}
      />
    </div>
  )
};

export default LoremIpsumGenerator;
