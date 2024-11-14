importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
const VAPID_KEY = 'BOP8INlzCp6KKc194vQpLTRu6hfQk2Tm2UQk6W91m2PCzVPB21HvTlyhBvWnwdzkN9tyuvUevJk_4T7tt5sICB0'

const firebaseConfig = {
    apiKey: "AIzaSyDVvmvb4AWYBYc0saIVWrBShNPwi7LJokc",
    authDomain: "fir-app-545ef.firebaseapp.com",
    databaseURL: "https://fir-app-545ef-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-app-545ef",
    storageBucket: "fir-app-545ef.firebasestorage.app",
    messagingSenderId: "455495746649",
    appId: "1:455495746649:web:4b18d1b2a5ec5105565d48",
    measurementId: "G-15XZ9EPRNL",
    vapidKey: VAPID_KEY
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();