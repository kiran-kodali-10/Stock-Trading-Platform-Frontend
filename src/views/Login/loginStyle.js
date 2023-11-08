// Styles for login page
import bgImage from 'assets/img/stock-trading-login-image.jpeg';

const loginStyles = (theme) => (
    {
        headerStyle:{
            background: "transparent",
        },
        container: {
            height: "100vh",
            overflow: "auto",
            background: "white",
            backgroundImage: `url(${bgImage})`
        },
        gridItem:{
            display: "flex",
            justifyContent: "center",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            color: "#ffffff",
            width: "50%",
            background: "rgba(0,0,0,.75)",
            padding: "60px 68px 40px",

        },
        loginFormHeading:{
            color: "#fff",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "40px",
        },
        buttonStyle:{
            height: "50px",
            "&:hover":{
                opacity: "0.85"
            }
        }

    }
)

export default loginStyles;