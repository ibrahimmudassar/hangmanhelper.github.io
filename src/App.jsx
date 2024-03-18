import { useState, useEffect } from "react";
import "./App.css";
import { Input, ScrollShadow } from "@nextui-org/react";
import { HangmanHelper } from "./HangmanHelper.js";

export default function App() {
  const [include, setInclude] = useState("");
  const [exclude, setExclude] = useState("");
  const [words, setWords] = useState([]);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    let hh = new HangmanHelper(include, exclude);

    setWords(hh.finalLibrary.slice(0, 10));
    setLetters(hh.alphabetList);
  }, [include, exclude]);

  return (
    <div className="flex flex-col gap-5 items-center p-5 h-svh">
      <h1 className="font-bold text-5xl text-center">Hangman Helper</h1>
      <div className="flex flex-row flex-wrap items-center">
        {words.map((item, index) => (
          <h1 key={index} className="p-3 ">
            {item}{" "}
          </h1>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 w-screen justify-items-center">
        <div className="col-span-2 flex flex-col gap-5 items-center p-5 size-full">
          <Input
            label="Include"
            placeholder="Example: a..le"
            value={include}
            onValueChange={setInclude}
            size="lg"
            className="max-w-xs"
          />
          <Input
            label="Exclude"
            placeholder="Example: bcd"
            value={exclude}
            onValueChange={setExclude}
            size="lg"
            className="max-w-xs"
          />
        </div>
        <ScrollShadow
          size={100}
          className="max-h-svh h-[400px] justify-self-start"
        >
          {letters.map((item, index) => (
            <h1 key={index} className="text-2xl">
              {item[0]}: {item[1]}
            </h1>
          ))}
        </ScrollShadow>
      </div>
    </div>
  );
}
