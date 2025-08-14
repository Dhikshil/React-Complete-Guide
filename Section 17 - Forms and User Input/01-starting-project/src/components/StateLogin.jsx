import { useState } from "react";
import Input from './StateLoginInput.jsx'

export default function Login() {
  // const [emailState, setEmailState] = useState('');
  // const [passwordState, setPasswordState] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;
  
  function handleSubmit( event ) {
    event.preventDefault();
    
  };

  function handleInputChange(id, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    setDidEdit((...prevEdit) => ({
      ...prevEdit,
      [id]: false,
    }));
  };

  function handleInputBlur(id) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [id]: true,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email" 
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => {handleInputChange('email', event.target.value)} } 
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email'}
         />

         <Input 
          label="Password" 
          id="pasword" 
          type="pasword" 
          name="pasword" 
          onBlur={() => handleInputBlur("pasword")}
          onChange={(event) => {handleInputChange('password', event.target.value)} } 
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password"}
         />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
