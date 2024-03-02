import React, { useState } from 'react';
import {Button} from "@/components/ui/button";

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
    // You can customize the length as needed
    const newPassword = generatePassword(12);
    setPassword(newPassword);
  };

  return (
    <div className="p-4">
      <Button
        onClick={handleGenerate}
        variant="secondary"
      >
        Generate Password
      </Button>
      {password && <p className="mt-4">Generated Password: {password}</p>}
    </div>
  );
};

export default PasswordGenerator;
