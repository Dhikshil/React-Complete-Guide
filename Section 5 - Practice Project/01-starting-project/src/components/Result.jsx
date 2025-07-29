import { calculateInvestmentResults } from "../util/investment"

export default function Result({ feildValues }) {
  return (
    <>
      {console.log(calculateInvestmentResults(...feildValues.values()))}
    </>
)};