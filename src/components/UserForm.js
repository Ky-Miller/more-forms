import React, {useState} from 'react';

const UserForm = (props) => {
    const[firstName, setFirstname] = useState("");
    const[firstError, setFirstError] = useState("");
    const[lastName, setLastname] = useState("");
    const[lastError, setLastError] = useState("");
    const[email, setEmail] = useState("");
    const[emailError, setEmailError] = useState("");
    const[password, setPassword] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[confirmError, setConfirmError] = useState("");
    const [hasBeensubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {

        e.preventDefault();
    
        const newUser = {firstName, lastName, email, password, confirmPassword, firstError, lastError, emailError, passwordError, confirmError};
        console.log(newUser);
        setFirstname("");
        setFirstError("");
        setLastname("");
        setLastError("");
        setEmail("");
        setEmailError("");
        setPassword("");
        setPasswordError("");
        setConfirmPassword("");
        setConfirmError("");
        setHasBeenSubmitted(true);
    };

    const firstValidation = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2){
            setFirstError("First Name must be at least 2 characters!")
        }
        else{
            setFirstError("");
        }
    };

    const lastValidation = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2){
            setLastError("Last Name must be at least 2 characters!");
        }
        else{
            setLastError("");
        }
    };

    const emailValidation = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2){
            setEmailError("Email must be at least 2 characters!");
        }
        else{
            setEmailError("");
        }
    };
    
    const passwordValidation = (e) => {
        setPassword(e.target.value)
        if(e.target.value < 8){
            setPasswordError("password must be at least 8 characters long");
        }
        else{
            setPasswordError("");
        }
    };

    const confirmValidation = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value != password){
            setConfirmError("Password must match");
        }
        else{
            setConfirmError("");
        }
    };

    return(
        <form onSumbit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={ firstValidation }></input>
                {
                    firstError ?
                    <p>{ firstError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={ lastValidation }></input>
                {
                    lastError ?
                    <p>{ lastError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Adress:</label>
                <input type="text" onChange={ emailValidation }></input>
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="text" onChange={ passwordValidation }></input>
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="text" onChange={ confirmValidation }></input>
                {
                    confirmError ?
                    <p>{ confirmError }</p> :
                    ''
                }
            </div>
                        {
                firstError || lastError || emailError || passwordError || confirmError ?
                <input type="submit" value="Create User" disabled /> : 
                <input type="submit" value="Create User"/>
            }
                        {
                hasBeensubmitted ? 
                <h3>Form has been submitted</h3> :
                '' 
            }
            <p>First Name {firstName}</p>
            <p>Last Name {lastName}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {confirmPassword}</p>
        </form>
    );
};

export default UserForm;
