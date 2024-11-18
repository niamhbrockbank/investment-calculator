import InputGroup from "./InputGroup";

export default function UserInput() {
  const name = "Niamh";
  return (
    <section id="user-input">
      <InputGroup label="Initial Investment" />
      <InputGroup label="Annual Investment" />
      <InputGroup label="Expected Return" />
      <InputGroup label="Duration" />
    </section>
  );
}
