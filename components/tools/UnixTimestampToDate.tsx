import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";

const UnixTimestampToDate = () => {
  const [timestamp, setTimestamp] = useState('');
  const [date, setDate] = useState('');
  const [currentEpochTime, setCurrentEpochTime] = useState(Math.floor(Date.now() / 1000));

  useEffect(() => {
    setInterval(() => {
      setCurrentEpochTime(Math.floor(Date.now() / 1000));
    }, 1000);
  }, []);

  const handleInputChange = (event: any) => {
    setTimestamp(event.target.value);
  };

  const convertToHumanReadableDate = () => {
    if (!timestamp) {
      setDate('');
      return;
    }
    const unixTimestamp = parseInt(timestamp, 10);
    const formattedDate = new Date(unixTimestamp * 1000).toLocaleString();
    setDate(formattedDate);
  };

  const handleClear = () => {
    setTimestamp('');
    setDate('');
  };

  return (
    <div>

      <div>
        <span className="select-none">
          The current Unix epoch time is
        </span>
        <span
          className="font-bold ml-1"
        >
          {currentEpochTime}
        </span>
      </div>

      <label htmlFor="timestamp" className="block opacity-70 mb-2">Unix Timestamp:</label>
      <Input
        id="timestamp"
        value={timestamp}
        onChange={handleInputChange}
        placeholder="Enter Unix timestamp"
      />
      <div className="flex justify-center mt-4">
        <Button onClick={convertToHumanReadableDate} className="mr-2">Convert</Button>
        <Button onClick={handleClear}>Clear</Button>
      </div>
      {date && (
        <div className="mt-4">
          <label htmlFor="convertedDate" className="block opacity-70 mb-2">Converted Date:</label>
          <Input
            id="convertedDate"
            value={date}
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default UnixTimestampToDate;
