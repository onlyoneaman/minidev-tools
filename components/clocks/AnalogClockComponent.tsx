import {useEffect, useState} from "react";
import AnalogClock from 'analog-clock-react';

const AnalogClockComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const secondsAngle = (date.getSeconds() / 60) * 360;
  const minutesAngle = (date.getMinutes() / 60) * 360 + (date.getSeconds() / 3600) * 30;
  const hoursAngle = (date.getHours() / 12) * 360 + (date.getMinutes() / 720) * 30;

  let options = {
    width: "300px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#000",
    centerColor: "#cfcfcf",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#aaa",
      minute: "#ccc",
      hour: "#ffffff"
    }
  };

  return (
    <div
      className="flex items-center justify-center p-6 md:p-12"
    >
      <AnalogClock {...options} />
    </div>
  )
};

export default AnalogClockComponent;
