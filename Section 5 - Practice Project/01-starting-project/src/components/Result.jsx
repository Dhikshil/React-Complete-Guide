import { calculateInvestmentResults, formatter } from "../util/investment"

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
  let totalInvestment = 0;
  function increaseTotal(interest, annualInvestment) {
    totalInterest += interest;
    totalInvestment = totalInvestment + annualInvestment;
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
          annualInvestment,
          initialInvestment}) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              {increaseTotal(interest, annualInvestment)}
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment+initialInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
)};