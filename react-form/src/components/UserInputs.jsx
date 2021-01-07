import React from 'react';


const UserInputs = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.user;
    return(
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email Address: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default UserInputs;
