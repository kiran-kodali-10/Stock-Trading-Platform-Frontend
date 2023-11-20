import { Button, Grid, makeStyles, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './loginStyle';
import CustomTextField from '../../components/CustomTextField/CustomTextField.js';
import { Navigate } from 'react-router-dom';
import Register from './Register';
import TradingViewWidget from 'views/TradingViewCharts/AdvancedChart';
import { useDispatch, useSelector } from 'react-redux';
import { validateUserLogin } from 'redux/userAPI';
import { polygonClient, restClient, websocketClient } from "polygon.io";


const useStyles = makeStyles(styles);

function Login(props) {


    const classes = useStyles();

    const dispatch = useDispatch();

    // State variables for username and passwords
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const userDetails = useSelector(state => state.user.userDetails);

    const [successfulLogin, setSuccessfulLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const rest = restClient("upf68cKLn9XKnn3Opk6h_h5yVxwxmeij", "https://api.polygon.io");

    React.useEffect(() => {

        //    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'",{
        //     method:"GET"
        //    })
        //    .then(response => response.json())
        //    .then(data=>console.log(data))
        //    .catch(error=>console.log(error));
        // rest.reference.tickers("AAPL", 1, "day", "2019-04-14", "2019-04-14").then((data) => {
        //     console.log(data);
        // }).catch(e => {
        //     console.error('An error happened:', e);
        // });


    }, [])

    const handleLoginSubmit = (event, username, password) => {
        event.preventDefault();
        console.log("Inside handle login submit")
        // setSuccessfulLogin(true);
        dispatch(validateUserLogin(username, password))
        // fetch('/api/login', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: username,
        //         password: password,
        //     }),
        // })
        // .then((response)=>response.json())
        // .then((data)=>{
        //     console.log(data);
        // })
        // .catch(error=>{console.log(error)})

    }

    return (
        <div
            className={classes.container}
        >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.container}
            >
                <Grid
                    item
                    className={classes.gridItem}
                    md={8}
                    sm={10}
                    xs={12}
                >
                    {
                        register ?
                            <Register setRegister={setRegister} />
                            :
                            <form
                                className={classes.card}
                                onSubmit={(event) => handleLoginSubmit(event, username, password)}
                            >
                                {
                                    register ?
                                        <h2 className={classes.loginFormHeading}>Register</h2>
                                        :
                                        <h2 className={classes.loginFormHeading}>Sign In</h2>
                                }
                                <CustomTextField
                                    id="username"
                                    label="Username"
                                    variant="filled"
                                    placeholder="Enter your username"
                                    required
                                    onChange={(event) => setUsername(event.target.value)}
                                />
                                <CustomTextField
                                    id="password"
                                    label="password"
                                    variant="filled"
                                    placeholder="Enter your password"
                                    type="password"
                                    required
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <Button
                                    color="primary"
                                    variant="contained"
                                    className={classes.buttonStyle}
                                    type="submit"
                                >
                                    {successfulLogin && (<i className="fa fa-refresh fa-spin" />)}
                                    {successfulLogin && (<span>Signing in ...</span>)}
                                    {!successfulLogin && (<span>Sign in</span>)}

                                </Button>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    className={classes.buttonStyle}
                                    type="submit"
                                    style={{ marginTop: "2em" }}
                                    onClick={() => { setRegister(true) }}
                                >
                                    Register
                                </Button>
                            </form>
                    }

                </Grid>
            </Grid>
            {
                userDetails.length ? <Navigate to="/stock/dashboard" /> : null
            }
        </div>
    )
}

export default Login