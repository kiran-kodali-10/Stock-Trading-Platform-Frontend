import NotificationAlert from "react-notification-alert";
import React from "react";

export default function CustomNotification(props) {

    const notificationAlertRef = React.useRef(null);
    const notify = () => {

        var type;
        switch (props.color) {
            case 1:
                type = "primary";
                break;
            case 2:
                type = "success";
                break;
            case 3:
                type = "danger";
                break;
            case 4:
                type = "warning";
                break;
            case 5:
                type = "info";
                break;
            default:
                break;
        }
        var options = {};
        options = {
            place: "tr",
            message: (
                <div>
                    <div>
                        {props.message}
                    </div>
                </div>
            ),
            type: type,
            icon: "tim-icons icon-bell-55",
            autoDismiss: 5,
        };
        notificationAlertRef.current.notificationAlert(options);
    };

    return (
        <div className="content">
            <div className="react-notification-alert-container">
                <NotificationAlert ref={notificationAlertRef} />
            </div>
        </div>
    )
}