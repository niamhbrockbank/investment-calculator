import { useState } from "react";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";

const INITIAL_INPUT_VALUES = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT_VALUES);

  const inputIsValid = userInput.duration > 0;

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      {inputIsValid ? (
        <ResultTable input={userInput} />
      ) : (
        <p className="center">Duration must be greater than zero!</p>
      )}
    </main>
  );
}

export default App;
