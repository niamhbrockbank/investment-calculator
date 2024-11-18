import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

const INITIAL_INPUT_VALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUES);
  return (
    <main>
      <Header />
      <UserInput inputState={inputValues} setInputState={setInputValues} />
      <InvestmentTable inputValues={inputValues} />
    </main>
  );
}

export default App;
