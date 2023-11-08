import { Button, Grid, makeStyles, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './loginStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextField.js';
import { Navigate } from 'react-router-dom';

const useStyles = makeStyles(styles);

function Register(props) {

    const classes = useStyles();

    // State variables for username and passwords
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmUsername, setConfirmUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [successfulLogin, setSuccessfulLogin] = useState(false);

    const handleLoginSubmit = (event, username, password) => {
        event.preventDefault();
        console.log("Inside handle login submit")
        setSuccessfulLogin(true);

    }
    // useEffect(()=>{

    // })

    return (
        <>
            <form
                className={classes.card}
                onSubmit={(event) => handleLoginSubmit(event, username, password)}
            >
                <h2 className={classes.loginFormHeading}>Sign In</h2>
                <CustomTextField
                    id="email"
                    label="Email"
                    variant="filled"
                    placeholder="Enter your username"
                    type='email'
                    onChange={(event) => setUsername(event.target.value)}
                />
                <CustomTextField
                    id="confirmEmail"
                    label="Confirm Email"
                    variant="filled"
                    placeholder="Enter your username"
                    type='email'
                    onChange={(event) => setConfirmUsername(event.target.value)}
                />
                <CustomTextField
                    id="password"
                    label="Password"
                    variant="filled"
                    placeholder="Enter your username"
                    type='password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <CustomTextField
                    id="confirmPassword"
                    label="Confirm Password"
                    variant="filled"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <Button
                    color="primary"
                    variant="contained"
                    className={classes.buttonStyle}
                    type="submit"
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