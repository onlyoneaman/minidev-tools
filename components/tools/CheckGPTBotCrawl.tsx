import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {Input} from "@/components/ui/input";

export const CheckGPTBotCrawl = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<boolean | null>(null);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const checkRobotsTxt = async (event: React.FormEvent) => {
    event.preventDefault();
    if (loading || !url) {
      toast.info("Please enter a URL and wait for the process to complete."); // Inform user if the input is empty or process is ongoing
      return;
    }

    setLoading(true);
    setResult(null);
    setResultMessage(null);

    try {
      const res = await fetch(`/api/check-gptbot?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      setResult(!data.isDisallowed);
      toast.success("Check completed successfully!"); // Provide a success message
    } catch (error) {
      setResultMessage("Error checking robots.txt.");
      toast.error("Failed to perform the check."); // Provide an error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 shadow-lg rounded-lg">
      <form className="flex flex-col space-y-4" onSubmit={checkRobotsTxt}>
        <label htmlFor="url" className="font-semibold">Website URL:</label>
        <Input
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
        />
        <Button
          type="submit"
        >
          {loading ? 'Checking...' : 'Check'}
        </Button>
        {result !== null && (
          <div className={`text-lg font-medium p-2 rounded ${result ? 'text-green-600' : 'text-red-600'}`}>
            {result ? 'GPTBot is allowed to crawl this website.' : 'GPTBot is disallowed from crawling this website.'}
          </div>
        )}
        {resultMessage && (
          <div className="text-red-600 text-lg font-medium p-2">
            {resultMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckGPTBotCrawl;
