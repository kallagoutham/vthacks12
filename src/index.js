import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";
import {BrowserRouter} from 'react-router-dom'
import Loading from "./Components/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RequiredAuthProvider
        authUrl={'https://9515339823.propelauthtest.com'}
        displayWhileLoading={<Loading />}
        displayIfLoggedOut={<RedirectToLogin />}
    >
        <BrowserRouter basename="/">
        <App />
        </BrowserRouter>
    </RequiredAuthProvider>,
    document.getElementById("root")
);
reportWebVitals();
