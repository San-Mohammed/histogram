import { useState } from "react";

import "./App.css";

function App() {
  const [letters, setLetters] = useState<
    { letter_name: string; count: number }[]
  >([
    { letter_name: "A", count: 0 },
    { letter_name: "B", count: 0 },
    { letter_name: "C", count: 0 },
    { letter_name: "D", count: 0 },
    { letter_name: "E", count: 0 },
    { letter_name: "F", count: 0 },
    { letter_name: "G", count: 0 },
    { letter_name: "H", count: 0 },
    { letter_name: "I", count: 0 },
    { letter_name: "J", count: 0 },
    { letter_name: "K", count: 0 },
    { letter_name: "L", count: 0 },
    { letter_name: "M", count: 0 },
    { letter_name: "N", count: 0 },
    { letter_name: "O", count: 0 },
    { letter_name: "P", count: 0 },
    { letter_name: "Q", count: 0 },
    { letter_name: "R", count: 0 },
    { letter_name: "S", count: 0 },
    { letter_name: "T", count: 0 },
    { letter_name: "U", count: 0 },
    { letter_name: "V", count: 0 },
    { letter_name: "W", count: 0 },
    { letter_name: "X", count: 0 },
    { letter_name: "Y", count: 0 },
    { letter_name: "Z", count: 0 },
  ]);
  return <div></div>;
}

export default App;
