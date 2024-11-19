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
  return (
    <main>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      <ResultTable input={userInput} />
    </main>
  );
}

export default App;
