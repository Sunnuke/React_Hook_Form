import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import UserForm from './components/UserForm';
import User from './components/UserInputs';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <UserForm  inputs={state} setInputs={setState} />
      <User user={state}/>
    </div>
  );
}

export default App;
