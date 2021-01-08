import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [temp, setTemp] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    console.log("Fn: " + firstName);
    console.log("ln: " + lastName);
    console.log("Em: " + email);
    console.log("Pw: " + password);

    const { inputs, setInputs } = props;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    const valFN = (e) => {
        if (e.target.value.length < 2) {
            console.log("fn error!");
        } else {
            setFirstName(e.target.value);
            onChange(e);
        }
    }
    const clearFN = (e) => {
        setFirstName("");
        e.target.value = "";
        onChange(e);
    }


    const valLN = (e) => {
        if (e.target.value.length < 2) {
            console.log("ln error!");
        } else {
            setLastName(e.target.value);
            onChange(e);
        }
    }
    const clearLN = (e) => {
        setLastName("");
        e.target.value = "";
        onChange(e);
    }


    const valEM = (e) => {
        if (e.target.value.length < 5) {
            console.log("Em error!");
        } else {
            setEmail(e.target.value);
            onChange(e);
        }
    }
    const clearEM = (e) => {
        setEmail("");
        e.target.value = "";
        onChange(e);
    }


    const valPW = (e) => {
        if (e.target.value.length < 8) {
            console.log("Pw error!");
        } else {
            setTemp(e.target.value);
        }
    }
    const clearPW = (e) => {
        setPassword("");
        setTemp("");
        e.target.value = "";
        onChange(e);
    }


    const valCW = (e) => {
        console.log(e.target.value);
        if (temp !== e.target.value) {
            console.log("Match error!");
        } else {
            setPassword(temp);
            e.target.name = "password";
            onChange(e);
        }
    }



    return(
        <form>
            <div className="form-group">
                <label>First Name: </label> 
                <input name="firstName" type="text" onClick={clearFN} onChange={valFN}/>
            </div>
            <div className="form-group">
                <label>Last Name: </label> 
                <input name="lastName" type="text" onClick={clearLN} onChange={valLN}/>
            </div>
            <div className="form-group">
                <label>Email Address: </label> 
                <input name="email" type="text" onClick={clearEM} onChange={valEM}/>
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input name="password" type="text" onClick={clearPW} onChange={valPW}/>
            </div>
            <div className="form-group">
                <label>Confirm Password: </label>
                <input name="confirmPassword" type="text" onChange={valCW}/>
            </div>
        </form>
        
    );
};
    
export default UserForm;