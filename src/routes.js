import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Soft from "./pages/Softskills";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/softskills" element={<Soft/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router
