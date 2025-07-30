import { calculateInvestmentResults } from "../util/investment"

export default function Result({ valuesOnly }) {
  const [
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  ] = valuesOnly;

  const valuesOnlyObject = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  };

  let totalInterest = 0;
  function increaseTotalInterest(interest) {
    totalInterest += totalInterest + interest
  }

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {calculateInvestmentResults(valuesOnlyObject).map(({year, 
          interest, 
          valueEndOfYear, 
          annualInvestment}) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{valueEndOfYear}</td>
              <td>{interest}</td>
              {increaseTotalInterest(interest)}
              <td>{totalInterest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
)};