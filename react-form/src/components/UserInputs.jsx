import React from 'react';


const UserInputs = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.user;
    return(
        <div>
            <h3>Test Display:</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email Address: {email}</p>
            <p>Password: {password}</p>
        </div>
    );
};

export default UserInputs;
