import React, {useState} from 'react';
import {passwordStrength} from 'check-password-strength';
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const strengthInfo = passwordStrength(password);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Define the colors and messages for each strength level
  const strengthLevels = {
    "Too weak": {color: "red", message: "Too Weak"},
    "Weak": {color: "orange", message: "Weak"},
    "Medium": {color: "yellow", message: "Medium"},
    "Strong": {color: "green", message: "Strong"}
  };

  const conditions = [
    {
      label: "Lower case",
      match: password.match(/[a-z]/)
    },
    {
      label: "Upper case",
      match: password.match(/[A-Z]/)
    },
    {
      label: "Numbers",
      match: password.match(/[0-9]/)
    },
    {
      label: "Symbols",
      match: password.match(/[^a-zA-Z0-9]/)
    }
  ]

  const currentStrengthLevel = strengthLevels[strengthInfo.value as keyof typeof strengthLevels];

  return (
    <div className="space-y-2 text-center">
      <div className="flex items-center justify-end gap-1">
        <div className="space-x-1">
          <Label>
            Show password
          </Label>
          <Checkbox
            checked={passwordVisible}
            onCheckedChange={togglePasswordVisibility}
          />
        </div>
      </div>

      <div
        className="p-2 rounded-md"
        style={{
          backgroundColor: password.length === 0 ? "#aaa" : currentStrengthLevel.color
        }}
      >

        <Input
          className=" bg-white text-eerie"
          type={passwordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type a password"
        />

        <p
          className="text-center tracking-wider text-white font-bold py-2"
        >
          {strengthInfo.value}
        </p>

      </div>

      <div className={"sm:flex items-center justify-around"}>
        <div className="">
          {password.length} characters containing:
        </div>
        <div
          className="sm:flex sm:justify-around sm:grow grid grid-cols-2 gap-1 text-sm text-center"
        >
          {conditions.map((condition, index) => (
            <div
              key={index}
              className={` ${condition.match ? "text-green-500" : "text-gray-500"}`}
            >
              {condition.label}
            </div>
          ))}
        </div>
      </div>


      <p>Review: {strengthInfo.value === "Strong" ? "Fantastic, using that password makes you as secure as Fort Knox." : "Your password could be stronger."}</p>

      <p className="font-bold">
        Your passwords are never stored.
      </p>
    </div>
  );
};

export default PasswordStrengthChecker;
