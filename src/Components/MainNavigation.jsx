import React from "react";
import {Routes, Route} from 'react-router-dom';
import RegistrationPage from "./RegistrationPage";
import { Routepaths } from "../utils/enum";
import LoginPage from "./LoginForm";

const MainNavigation = () => {
    return(
        <Routes>
            <Route exact path={Routepaths.LoginPage} element={<LoginPage />} />
            <Route exact path={Routepaths.RegistrationPage} element={<RegistrationPage />} />
        </Routes>
    );
};

export default MainNavigation;