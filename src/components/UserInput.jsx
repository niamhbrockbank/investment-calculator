import Input from "./Input";

export default function UserInput({ inputState, setInputState }) {
  return (
    <section id="user-input">
      <span className="input-group">
        <Input
          label="Initial Investment"
          id="initialInvestment"
          inputState={inputState}
          setInputState={setInputState}
        />
        <Input
          label="Annual Investment"
          id="annualInvestment"
          inputState={inputState}
          setInputState={setInputState}
        />
      </span>
      <span className="input-group">
        <Input
          label="Expected Return"
          id="expectedReturn"
          inputState={inputState}
          setInputState={setInputState}
        />
        <Input
          label="Duration"
          id="duration"
          inputState={inputState}
          setInputState={setInputState}
        />
      </span>
    </section>
  );
}