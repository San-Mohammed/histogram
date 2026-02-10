import { useState } from "react";

import "./App.css";

function App() {
  const [letters, setLetters] = useState<
    { letter_name: string; count: number }[]
  >([
    { letter_name: "a", count: 0 },
    { letter_name: "b", count: 0 },
    { letter_name: "c", count: 0 },
    { letter_name: "d", count: 0 },
    { letter_name: "e", count: 0 },
    { letter_name: "f", count: 0 },
    { letter_name: "g", count: 0 },
    { letter_name: "h", count: 0 },
    { letter_name: "i", count: 0 },
    { letter_name: "j", count: 0 },
    { letter_name: "k", count: 0 },
    { letter_name: "l", count: 0 },
    { letter_name: "m", count: 0 },
    { letter_name: "n", count: 0 },
    { letter_name: "o", count: 0 },
    { letter_name: "p", count: 0 },
    { letter_name: "q", count: 0 },
    { letter_name: "r", count: 0 },
    { letter_name: "s", count: 0 },
    { letter_name: "t", count: 0 },
    { letter_name: "u", count: 0 },
    { letter_name: "v", count: 0 },
    { letter_name: "w", count: 0 },
    { letter_name: "x", count: 0 },
    { letter_name: "y", count: 0 },
    { letter_name: "z", count: 0 },
  ]);
  const [inputText, setInputText] = useState<string>("");
  const handleSubmit = () => {
    const letters = [
      { letter_name: "a", count: 0 },
      { letter_name: "b", count: 0 },
      { letter_name: "c", count: 0 },
      { letter_name: "d", count: 0 },
      { letter_name: "e", count: 0 },
      { letter_name: "f", count: 0 },
      { letter_name: "g", count: 0 },
      { letter_name: "h", count: 0 },
      { letter_name: "i", count: 0 },
      { letter_name: "j", count: 0 },
      { letter_name: "k", count: 0 },
      { letter_name: "l", count: 0 },
      { letter_name: "m", count: 0 },
      { letter_name: "n", count: 0 },
      { letter_name: "o", count: 0 },
      { letter_name: "p", count: 0 },
      { letter_name: "q", count: 0 },
      { letter_name: "r", count: 0 },
      { letter_name: "s", count: 0 },
      { letter_name: "t", count: 0 },
      { letter_name: "u", count: 0 },
      { letter_name: "v", count: 0 },
      { letter_name: "w", count: 0 },
      { letter_name: "x", count: 0 },
      { letter_name: "y", count: 0 },
      { letter_name: "z", count: 0 },
    ];
    const trimmedString: string[] = inputText.toLowerCase().split("");

    const newUpdatedLetters = letters.map((eachLetter) => {
      let hasLetter: number = 0;
      trimmedString.forEach((eachTrimmedLetter) => {
        if (eachLetter.letter_name === eachTrimmedLetter) {
          hasLetter = hasLetter + 1;
        }
      });
      if (hasLetter > 0) {
        return {
          letter_name: eachLetter.letter_name,
          count: hasLetter,
        };
      } else {
        return eachLetter;
      }
    });
    console.log(newUpdatedLetters);

    setLetters(newUpdatedLetters);
  };

  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3.5">
        <div className="flex gap-2.5">
          <input
            type="text"
            className="bg-amber-300"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="flex gap-10">
          {letters.map((letter, index) => {
            return (
              <div key={index} className="flex flex-col ">
                <div
                  className="w-3  bg-amber-500"
                  style={{ height: 10 * letter.count }}
                ></div>
                <span>{letter.letter_name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
