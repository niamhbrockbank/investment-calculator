export default function InputGroup({ title, ...props }) {
  return (
    <div className="input-group">
      <h1>{title}</h1>
      <input {...props}></input>
    </div>
  );
}
