import React, {useState} from 'react';
import {Button} from "@/components/ui/button";

export const CheckGPTBotCrawl = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<boolean | null>(null);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const checkRobotsTxt = async (event: any) => {
    if (loading) return;
    setLoading(true);
    setResult(null);
    setResultMessage(null);
    event.preventDefault();
    try {
      const res = await fetch(`/api/check-gptbot?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      setResult(!data.isDisallowed);
    } catch (error) {
      setResultMessage("Error checking robots.txt.")
    }
    setLoading(false);
  };

  return (
    <div>
      <form
        className={"flex flex-col space-y-4"}
        onSubmit={checkRobotsTxt}
      >
        <label htmlFor="url">Website URL:</label>
        <input
          className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300 ease-in-out"
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />
        <Button
          type="submit"
        >
          {
            loading ? 'Checking...' : 'Check'
          }
        </Button>
        <div>
          {
            result !== null && (
              <div>
                {
                  result ? (
                    <div>
                      <p className="text-green-600">GPTBot is allowed to crawl this website.</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-red-600">GPTBot is disallowed from crawling this website.</p>
                    </div>
                  )
                }
              </div>
            )
          }
          {
            resultMessage && (
              <div>
                <p className="text-red-600">{resultMessage}</p>
              </div>
            )
          }
        </div>
      </form>
    </div>
  );
};

export default CheckGPTBotCrawl;
