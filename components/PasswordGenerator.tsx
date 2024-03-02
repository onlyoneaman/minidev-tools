import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {toast} from "sonner";

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
  }

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="p-4 space-y-5 text-center">
      <span>
        Your Password is shown here:
      </span>
      <div
        className="p-5 border border-gray-200 rounded-md bg-gray-50 text-black font-bold text-center"
      >
        {
          password && (
            <div>
              <span>{password}</span>
              <span
                className="ml-3 text-sm text-blue-500 cursor-pointer"
                onClick={copyToClipboard}
              >
                Copy
              </span>
            </div>
          )
        }
      </div>

      <Button
        onClick={handleGenerate}
        variant="secondary"
      >
        Generate Password
      </Button>
    </div>
  );
};

export default PasswordGenerator;
