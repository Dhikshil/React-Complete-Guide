import mainLogo from "../assets/investment-calculator-logo.png"

export default function Header({children}) {
  return(
    <header id="header">
      <img src={mainLogo} alt="website main logo enlarged" />
      <h1>{children}</h1>
    </header>
)};