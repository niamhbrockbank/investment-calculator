import InputGroup from "./InputGroup";

export default function UserInput() {
  const name = "Niamh";
  return (
    <section id="user-input">
      <InputGroup title={name} />
    </section>
  );
}
