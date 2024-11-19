import Input from "./Input";

export default function UserInput({ userInput, setUserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          id="initialInvestment"
          inputState={userInput}
          setInputState={setUserInput}
        />
        <Input
          label="Annual Investment"
          id="annualInvestment"
          inputState={userInput}
          setInputState={setUserInput}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          id="expectedReturn"
          inputState={userInput}
          setInputState={setUserInput}
        />
        <Input
          label="Duration"
          id="duration"
          inputState={userInput}
          setInputState={setUserInput}
        />
      </div>
    </section>
  );
}
