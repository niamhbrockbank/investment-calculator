import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ inputValues, ...props }) {
  let showWarning = false;

  for (const key in inputValues) {
    if (inputValues[key] < 1) {
      showWarning = true;
    }
  }

  let investmentResults = [];
  if (!showWarning) {
    investmentResults = calculateInvestmentResults(inputValues);
  }

  const tableHeaders = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
  ];

  const tableRows = investmentResults.map(
    ({ year, interest, valueEndOfYear, annualInvestment }) => (
      <tr key={year}>
        <td>{year}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(annualInvestment)}</td>
        <td>{formatter.format(valueEndOfYear - annualInvestment)}</td>
      </tr>
    )
  );

  return (
    <>
      {showWarning && (
        <div className="center">All inputs must be greater than zero!</div>
      )}
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
