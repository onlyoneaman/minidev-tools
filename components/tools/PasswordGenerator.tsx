import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const generatePassword = (length: number) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState('');

  const handleGenerate = () => {
    const newPassword = generatePassword(12);
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    toast.success('Password copied to clipboard');
    navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="p-4 space-y-5 text-center max-w-sm mx-auto">
      <span className="text-lg font-semibold">
        Your Password is shown here:
      </span>
      <div
        className="p-5 border border-gray-300 rounded-md bg-gray-100 shadow-sm text-black font-mono text-lg select-all cursor-pointer"
        onClick={copyToClipboard}
        title="Click to copy"
      >
        {password}
      </div>

      <Button
        onClick={handleGenerate}
      >
        Generate Password
      </Button>
    </div>
  );
};

export default PasswordGenerator;
