import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ input, inputIsValid }) {
  const investmentResults = calculateInvestmentResults(input);
  const initialInvestment =
    investmentResults[0].valueEndOfYear -
    investmentResults[0].interest -
    investmentResults[0].annualInvestment;

  const tableHeaders = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
  ];

  const tableRows = investmentResults.map(
    ({ year, interest, valueEndOfYear, annualInvestment }) => {
      const totalInterest =
        valueEndOfYear - annualInvestment * year - initialInvestment;
      const totalAmountInvested = valueEndOfYear - totalInterest;
      return (
        <tr key={year}>
          <td>{year}</td>
          <td>{formatter.format(valueEndOfYear)}</td>
          <td>{formatter.format(interest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(totalAmountInvested)}</td>
        </tr>
      );
    }
  );

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            {tableHeaders.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
}
