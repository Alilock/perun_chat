import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../firebase";

const VAPID_KEY = 'BOP8INlzCp6KKc194vQpLTRu6hfQk2Tm2UQk6W91m2PCzVPB21HvTlyhBvWnwdzkN9tyuvUevJk_4T7tt5sICB0'

export const requestForToken = () => {
    return getToken(messaging, { vapidKey: VAPID_KEY })
        .then((currentToken) => {
            if (currentToken) {
                return currentToken;
            } else {
                alert(
                    "No registration token available. Request permission to generate one."
                );
                return null;
            }
        })
        .catch((err) => {
            alert("An error occurred while retrieving token - " + err);
            return null;
        });
};

onMessage(messaging, ({ notification }) => {
    new Notification(notification.title, {
        body: notification.body,
        icon: notification.icon,
    });
});