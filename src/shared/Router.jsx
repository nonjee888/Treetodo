
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Enter from "../pages/Enter";
import Post from "../pages/Post";
import Detail from "../pages/Detail";
import Unknown from "../pages/Unknown";


const Router = () => {
    return(
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/enter" element={<Enter/>}/>
        <Route path = "/Post" element={<Post/>}/>
        <Route path = "/detail/:id" element={<Detail/>}/>
        <Route path = "*" element={<Unknown/>}/>
    </Routes>)
}

export default Router;