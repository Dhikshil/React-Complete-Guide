import Header from "./components/Header"
import Input from "./components/UserInput";
import Result from "./components/Result";

import { useState } from "react";

const INITIAL_FIELD_VALUES = {
  "Initial Investment" : 5000,
  "Annual Investment" : 500,
  "Expected Return" : 5,
  "Duration" : 48,
};

function App() {
  const [fieldValues, setFieldValues]  = useState(INITIAL_FIELD_VALUES);

  function handleFieldChange(e, label) {
    let targetValue = Number(e.target.value);
    setFieldValues((prev) => ({
      ...prev,
      [label] : targetValue,
    }))

  }

  return (
    <>
      <Header>Investment Calculator</Header>
      <Input fieldValues={fieldValues} handleChange={handleFieldChange} />
      <Result fieldValues={fieldValues} />
    </>
)};

export default App;
