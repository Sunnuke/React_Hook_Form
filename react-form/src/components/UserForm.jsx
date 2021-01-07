import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const { inputs, setInputs } = props;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };
    
    return(
        <form>
            <div className="form-group">
                <label>First Name: </label> 
                <input name="firstName" type="text" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label>Last Name: </label> 
                <input name="lastName" type="text" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label>Email Address: </label> 
                <input name="email" type="text" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input name="password" type="text" onChange={onChange}/>
            </div>
            <div className="form-group">
                <label>Confirm Password: </label>
                <input name="confirmPassword" type="text" onChange={onChange}/>
            </div>
        </form>
        
    );
};
    
export default UserForm;