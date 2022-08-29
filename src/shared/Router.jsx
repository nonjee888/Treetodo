import { Route, Routes } from "react-router-dom";

const Router = () => {
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/enter" element={<Enter/>}/>
        <Route path = "/Post" element={<Post/>}/>
        <Route path = "/detail/:id" element={<Detail/>}/>
        <Route path = "*" element={<Home/>}/>
    </Routes>
}

export default Router;