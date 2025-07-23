/* eslint-disable quotes */
import { useState } from "react";
import data from "./data";
import Questions from "./components/Questions";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} seQuestions={setQuestions} />
    </main>
  );
}

export default App;
