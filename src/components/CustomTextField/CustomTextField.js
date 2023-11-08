import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core"

const CustomTextField = withStyles({
    root: {
        color: "white !important",
        marginBottom: "30px",
        borderColor: "white",

        '& label': {
            color: "#fff",
        },
        '& .MuiFilledInput-root': {
            background: "#333"
        },
        '& .MuiFormLabel-root': {
            color: "#fff",
        },
        '& .MuiInputBase-root': {
            color: '#fff'
        },
        '& .MuiInput-underline:before': {
            borderBottom: "2px solid #fff",
        }

    }
})(TextField);

export default CustomTextField;