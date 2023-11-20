import { Button, Grid, makeStyles, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './loginStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextField.js';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/userAPI';

const useStyles = makeStyles(styles);

function Register(props) {

    const classes = useStyles();

    const dispatch = useDispatch();

    // State variables for username and passwords
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmUsername, setConfirmUsername] = useState("");
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [successfulLogin, setSuccessfulLogin] = useState(false);

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        console.log("Inside handle login submit")
        setSuccessfulLogin(true);
        const userDetails = {
            "email": username,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "userName": username,
            "phone": phoneNumber
        }
        if(!password ===confirmPassword && password===null)
            alert("password doesn't match")
        else{
            fetch("/api/users/register", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails)
            })
            .then(response=>response.json())
            .then((data)=>{
                console.log(data);

            })
            .catch((error)=>{
                alert("Email already Exists")
            })
            props.setRegister(false)
        }
        // dispatch(registerUser(userDetails))

    }
    return (
        <>
            <form
                className={classes.card}
                onSubmit={(event) => handleRegisterSubmit(event)}
            >
                <h2 className={classes.loginFormHeading}>Sign In</h2>
                <CustomTextField
                    id="email"
                    label="Email"
                    variant="filled"
                    placeholder="Enter your username"
                    type='email'
                    required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <CustomTextField
                    id="firsName"
                    label="First Name"
                    variant="filled"
                    placeholder="First Name"
                    type='text'
                    required
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <CustomTextField
                    id="lastName"
                    label="Last Name"
                    variant="filled"
                    placeholder="Last Name"
                    type='text'
                    required
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <CustomTextField
                    id="phone"
                    label="Phone Number"
                    variant="filled"
                    placeholder="Phone Number"
                    type='text'
                    required
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                />
                <CustomTextField
                    id="password"
                    label="Password"
                    variant="filled"
                    placeholder="Enter your username"
                    type='password'
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <CustomTextField
                    id="confirmPassword"
                    label="Confirm Password"
                    variant="filled"
                    placeholder="Enter your password"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <Button
                    color="primary"
                    variant="contained"
                    className={classes.buttonStyle}
                    type="submit"
                    // onClick={e=>handleRegisterSubmit(e)}
                >
                    {successfulLogin && (<i className="fa fa-refresh fa-spin" />)}
                    {successfulLogin && (<span > Registering ...</span>)}
                    {!successfulLogin && (<span>Register</span>)}

                </Button>
            </form>
        </>

    )
}

export default Register