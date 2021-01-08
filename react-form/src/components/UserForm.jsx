import React, { useState } from  'react';
    

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [temp, setTemp] = useState("");
    const [errors, setErrors] = useState({
        FError: "",
        LError: "",
        EError: "",
        PError: "",
        CError: "",
    });
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
            setErrors({
                FError: "First Name must Be At Least 2 characters!"
            });
        } else {
            setErrors({
                FError: ""
            });
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
            setErrors({
                LError: "Last Name must Be At Least 2 characters!"
            });
        } else {
            setErrors({
                LError: ""
            });
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
            setErrors({
                EError: "Email must Be At Least 5 characters!"
            });
        } else {
            setErrors({
                EError: ""
            });
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
            setErrors({
                PError: "Password must Be At Least 8 characters!"
            });
        } else {
            setErrors({
                PError: ""
            });
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
        if (temp !== e.target.value) {
            console.log("Match error!");
            setErrors({
                CError: "Passwords must Match!"
            });
        } else {
            setErrors({
                CError: ""
            });
            setPassword(temp);
            e.target.name = "password";
            onChange(e);
        }
    }



    return(
        <form>
            <p style={{color: "red"}}>{errors.FError}</p>
            <div className="form-group">
                <label>First Name: </label> 
                <input name="firstName" type="text" onClick={clearFN} onChange={valFN}/>
            </div>
            <p style={{color: "red"}}>{errors.LError}</p>
            <div className="form-group">
                <label>Last Name: </label> 
                <input name="lastName" type="text" onClick={clearLN} onChange={valLN}/>
            </div>
            <p style={{color: "red"}}>{errors.EError}</p>
            <div className="form-group">
                <label>Email Address: </label> 
                <input name="email" type="text" onClick={clearEM} onChange={valEM}/>
            </div>
            <p style={{color: "red"}}>{errors.PError}</p>
            <div className="form-group">
                <label>Password: </label>
                <input name="password" type="text" onClick={clearPW} onChange={valPW}/>
            </div>
            <p style={{color: "red"}}>{errors.CError}</p>
            <div className="form-group">
                <label>Confirm Password: </label>
                <input name="confirmPassword" type="text" onChange={valCW}/>
            </div>
        </form>
        
    );
};
    
export default UserForm;