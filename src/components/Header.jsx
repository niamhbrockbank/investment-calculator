import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="Green money bag with gold coins stacked next to it."
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
