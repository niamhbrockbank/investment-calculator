export default function InputGroup({ label, type = "text", ...props }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input label={label} type={type} {...props}></input>
    </div>
  );
}
