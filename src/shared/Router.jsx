
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Enter from "../pages/Enter";
import Post from "../pages/Post";
import Detail from "../pages/Detail";
import Unknown from "../pages/Unknown";

const Router = () => {

    return (
    <Routes>
        <Route path = "/" exact element={<Home/>}/>
        <Route path = "/enter" exact element={<Enter/>}/>
        <Route path = "/post" exact element={<Post/>}/>
        <Route path = "/detail/:id" exact element={<Detail/>}/>
        <Route path = "*" exact element={<Unknown/>}/>
    </Routes>
    )

}

export default Router;