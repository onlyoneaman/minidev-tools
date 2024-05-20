import React, {useState, useCallback, useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {Switch} from "@/components/ui/switch";
import {Slider} from "@/components/ui/slider";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {event} from "nextjs-google-analytics";

const charset = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+[]'
};

const generatePassword = (length: number, options: any) => {
  const activeCharSet = Object.entries(options)
    .filter(([option, isActive]) => isActive)
    .map(([option]) => charset[option as keyof typeof charset])
    .join('');

  let password = '';
  for (let i = 0; i < length; i++) {
    password += activeCharSet.charAt(Math.floor(Math.random() * activeCharSet.length));
  }
  return password;
};

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState('');

  const handleGenerate = useCallback(() => {
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
  }, [length, options]);

  const handleLengthChange = (value: number) => {
    const newLength = Math.max(4, Math.min(24, Number(value))); // Ensure the length is within the allowed range
    setLength(newLength);
  };

  const toggleOption = (key: string, option: boolean) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: option
    }));
  };

  const copyToClipboard = () => {
    event("password_generator_copy_password", {
      action: "copy_password",
      label: "Password Generator"
    })
    if (password) {
      navigator.clipboard.writeText(password);
      toast.success('Password copied to clipboard');
    }
  };

  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  return (
    <div className="p-4 space-y-5 text-center max-w-md mx-auto rounded-lg">
      <div
        className="p-5 bg-gray-100 rounded-md text-black font-mono text-lg select-all cursor-pointer relative"
        onClick={copyToClipboard}
        title="Click to copy"
      >
        {password}
        <div className="absolute top-2 right-2">
          {/* Your icon for copy here */}
        </div>
      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <Label htmlFor="passwordLength">Password Length</Label>
          <Input
            type="number"
            id="passwordLength"
            className="w-16 border"
            value={length}
            onChange={(e) => handleLengthChange(parseInt(e.target.value, 10))}
            min="4"
            max="24"
          />
        </div>

        <Slider
          id="passwordLength"
          min={4}
          step={1}
          max={24}
          value={[length]}
          onValueChange={(value) => handleLengthChange(value[0])}
        />

        <div
          className="grid grid-cols-2 gap-2 justify-items-start text-left"
        >
          {Object.keys(options).map((option) => (
            <div
              className={"flex items-center gap-1"}
              key={option}
            >
              <Switch
                key={option}
                id={option}
                checked={options[option as keyof typeof options]}
                onCheckedChange={(val) => toggleOption(option, val)}
              />
              <Label>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Label>
            </div>
          ))}
        </div>

      </div>

      <div className="flex justify-between items-center mt-4">
        <Button onClick={handleGenerate}>
          Generate Password
        </Button>
        <Button
          onClick={copyToClipboard}
        >
          Copy Password
        </Button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
