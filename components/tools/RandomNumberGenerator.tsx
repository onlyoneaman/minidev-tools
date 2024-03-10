import React, {useState, useCallback, useEffect} from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { event } from "nextjs-google-analytics";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

const generateRandomNumber = (min: number, max: number, includeNegative: boolean, ensureUnique: boolean, previousNumbers: number[]) => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (includeNegative && Math.random() > 0.5) {
      randomNumber *= -1;
    }
  } while (ensureUnique && previousNumbers.includes(randomNumber));
  return randomNumber;
};

const RandomNumberGenerator = () => {
  const [range, setRange] = useState({ min: 1, max: 100 });
  const [includeNegative, setIncludeNegative] = useState(false);
  const [ensureUnique, setEnsureUnique] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [previousNumbers, setPreviousNumbers] = useState<number[]>([]);

  const handleGenerate = useCallback(() => {
    event("random_number_generator_generate_number", {
      action: "generate_number",
      label: "Random Number Generator"
    });
    const newNumber = generateRandomNumber(range.min, range.max, includeNegative, ensureUnique, previousNumbers);
    setRandomNumber(newNumber);
    if (ensureUnique) {
      setPreviousNumbers((prev) => [...prev, newNumber]);
    }
  }, [range, includeNegative, ensureUnique, previousNumbers]);

  useEffect(() => {
    handleGenerate();
  }, [ ]);

  return (
    <Card>
      <CardHeader>
        <div className="p-3 bg-gray-100 rounded-md text-black font-mono text-lg select-all cursor-pointer">
          {randomNumber !== null ? randomNumber : "Your number will appear here"}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="minRange">Minimum</Label>
            <Input
              type="number"
              id="minRange"
              className="w-16 border"
              value={range.min}
              onChange={(e) => setRange({ ...range, min: parseInt(e.target.value, 10) })}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="maxRange">Maximum</Label>
            <Input
              type="number"
              id="maxRange"
              className="w-16 border"
              value={range.max}
              onChange={(e) => setRange({ ...range, max: parseInt(e.target.value, 10) })}
            />
          </div>

          <div className="flex gap-4 justify-center">
            <Switch
              id="includeNegative"
              checked={includeNegative}
              onCheckedChange={setIncludeNegative}
            />
            <Label htmlFor="includeNegative">Include Negative Numbers</Label>
          </div>

          <div className="flex gap-4 justify-center">
            <Switch
              id="ensureUnique"
              checked={ensureUnique}
              onCheckedChange={(value) => {
                setEnsureUnique(value);
                if (!value) setPreviousNumbers([]);
              }}
            />
            <Label htmlFor="ensureUnique">Ensure Unique Numbers</Label>
          </div>

          <Button onClick={handleGenerate}>
            Generate Number
          </Button>
        </div>
      </CardContent>
    </Card>
  )
};

export default RandomNumberGenerator;
