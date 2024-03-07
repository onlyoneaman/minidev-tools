import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { event } from "nextjs-google-analytics";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const outputOptions = [
  { value: 'Markdown', label: 'Markdown' },
];

const PrivacyPolicyGenerator = () => {
  const [url, setUrl] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [productName, setProductName] = useState('');
  const [email, setEmail] = useState('');
  const [outputType, setOutputType] = useState('HTML');
  const [privacyPolicy, setPrivacyPolicy] = useState('');

  const generatePrivacyPolicy = () => {
    const currentDate = new Date().toLocaleDateString('en-US');

    event("privacy_policy_generate", {
      category: "privacy_policy",
      label: "privacy_policy_generate"
    });

    const privacyPolicyTemplate = `
# Privacy Policy

This Privacy Policy applies to the [${url}](${url}) website ("Website") operated by **${companyName}** ("Company") for the **${productName}** product ("Product"). This Privacy Policy was last updated on **${currentDate}**.

## Information We Collect

We may collect certain personal information from users of our Website and Product, including but not limited to:

- Full Name
- Email Address
- Phone Number
- Address
- Payment Information

## Use of Information

The personal information we collect is used for the following purposes:

- Providing and maintaining the Website and Product
- Improving and personalizing user experience
- Sending promotional materials or newsletters, if opted-in
- Contacting users regarding their inquiries or requests

## Sharing of Information

We may share personal information with trusted third parties for the purposes of:

- Facilitating payment processing
- Providing customer support services
- Conducting data analysis and research

## Security

We prioritize the security of your personal information and take appropriate measures to protect it. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.

## Changes to This Privacy Policy

We reserve the right to update or modify this Privacy Policy at any time. Any changes made will be effective immediately upon posting the updated Privacy Policy on the Website.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at **${email}**.
`;

    switch (outputType) {
      case 'Markdown':
        setPrivacyPolicy(privacyPolicyTemplate);
        break;
      case 'Plain Text':
        // setPrivacyPolicy(convertToPlainText(privacyPolicyTemplate));
        // break;
      default:
        // Convert Markdown to HTML for HTML output
        // You can use your existing markdown-to-html function here
        break;
    }
  };

  const handleCopy = () => {
    if (privacyPolicy) {
      navigator.clipboard.writeText(privacyPolicy);
      toast.success('Privacy Policy copied to clipboard!');
    } else {
      toast.warning('No Privacy Policy generated!');
    }
  };

  return (
    <div className="mx-auto text-left space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Label>URL:</Label>
          <Input
            type="text"
            required
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL here"
          />
        </div>
        <div>
          <Label>Name of Company:</Label>
          <Input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name here"
          />
        </div>
        <div>
          <Label>Name of Product:</Label>
          <Input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name here"
          />
        </div>
        <div>
          <Label>Email:</Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email here"
          />
        </div>
        <div>
          <Label>Output Type:</Label>
          <Select
            value={outputType}
            onValueChange={(value) => setOutputType(value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {outputOptions.map((value) => (
                <SelectItem
                  key={value.value}
                  value={value.value}
                >
                  {value.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={generatePrivacyPolicy} className="mt-4">Generate Privacy Policy</Button>
      {privacyPolicy && (
        <div className="">
          <Label>Privacy Policy:</Label>
          <Textarea
            id="privacyPolicy"
            rows={5}
            readOnly
            value={privacyPolicy}
          />
          <Button onClick={handleCopy} className="mt-4">Copy Privacy Policy</Button>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyGenerator;
