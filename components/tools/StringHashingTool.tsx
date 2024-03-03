import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "sonner";
import CryptoJS from 'crypto-js';
import {event} from "nextjs-google-analytics";

const StringHashingTool = () => {
  const [inputString, setInputString] = useState('');
  const [hashedString, setHashedString] = useState('');
  const [algorithm, setAlgorithm] = useState('MD5');
  const algorithmValues = ["MD5", "SHA1", "SHA256", "SHA512"];

  const hashString = () => {
    let hashedValue;
    switch (algorithm) {
      case 'MD5':
        hashedValue = CryptoJS.MD5(inputString).toString();
        break;
      case 'SHA1':
        hashedValue = CryptoJS.SHA1(inputString).toString();
        break;
      case 'SHA256':
        hashedValue = CryptoJS.SHA256(inputString).toString();
        break;
      case 'SHA512':
        hashedValue = CryptoJS.SHA512(inputString).toString();
        break;
      default:
        hashedValue = '';
    }
    event("string_hash_generate", {
      category: "string_hash",
      label: "generate_" + algorithm,
    })
    setHashedString(hashedValue);
  };

  const copyToClipboard = () => {
    if (hashedString) {
      navigator.clipboard.writeText(hashedString).then(() => {
        toast.success("Copied to clipboard");
      }, () => {
        toast.warning("Failed to copy");
      });
      event("string_hash_copy_text", {
        category: "string_hash",
        label: "copy_" + algorithm,
      })
    } else {
      toast.warning("Nothing to copy");
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center space-x-0 space-y-2 sm:space-x-3 sm:space-y-0 mb-5">
        <Input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          className="border border-gray-300 bg-transparent shadow-sm rounded-md p-2"
          placeholder="Enter string to hash"
        />

        <Select
          value={algorithm}
          onValueChange={setAlgorithm}
        >
          <SelectTrigger>
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            {algorithmValues.map((value) => (
              <SelectItem
                key={value}
                value={value}
              >
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-center space-x-2">
        <Button
          onClick={hashString}
        >
          Hash
        </Button>

        <Button
          onClick={copyToClipboard}
        >
          Copy
        </Button>
      </div>

      <Textarea
        readOnly
        value={hashedString}
        className="h-40"
      />
    </>
  );
};

export default StringHashingTool;
