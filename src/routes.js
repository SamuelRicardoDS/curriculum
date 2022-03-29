import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Soft from "./pages/Softskills";
import Hard from "./pages/Hardskills";
import CV from "./pages/Curriculum";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/softskills" element={<Soft/>} />
            <Route path="/hardskills" element={<Hard/>} />
            <Route path="/cv" element={<CV/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router
