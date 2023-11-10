import { userActions } from "./userSlice";


export const validateUserLogin = (username, password) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: username,
                    password: password,
                }),
            });
            if (!response.ok) {
                // console.log(response.ok)
                throw new Error('Unable to validate user, please try again');
                //send an error notification
            }
            const data = await response.json();
            return data;
        }
        try {
            const userDetails = await fetchData();
            dispatch(userActions.validate({
                userDetails
            }))
        } catch (error) {
            console.log(error);
            // or send the notification here
        }

    };

}

export const registerUser = (userDetails) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails)
            })
            if (!response.ok) {
                throw new Error("Error registering the user")
            }
            const data = await response.json();
            return data;
        }
        try {
            const data = await fetchData();
            
        }
        catch(error){
            console.log(error);

        }
    }
}