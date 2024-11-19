import Input from "./Input";

export default function UserInput({ userInput, setUserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          inputIdentifier="initialInvestment"
          inputState={userInput}
          setInputState={setUserInput}
        />
        <Input
          label="Annual Investment"
          inputIdentifier="annualInvestment"
          inputState={userInput}
          setInputState={setUserInput}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          inputIdentifier="expectedReturn"
          inputState={userInput}
          setInputState={setUserInput}
        />
        <Input
          label="Duration"
          inputIdentifier="duration"
          inputState={userInput}
          setInputState={setUserInput}
        />
      </div>
    </section>
  );
}
