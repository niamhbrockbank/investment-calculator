import Input from "./Input";

export default function UserInput() {
  const name = "Niamh";
  return (
    <section id="user-input">
      <span className="input-group">
        <Input label="Initial Investment" />
        <Input label="Annual Investment" />
      </span>
      <span className="input-group">
        <Input label="Expected Return" />
        <Input label="Duration" />
      </span>
    </section>
  );
}
