import { Route, Routes } from "react-router-dom";
import Enter from "../components/Enter"

const Router = () => {
    return(
        <Routes>
            <Route path="/enter" exact element={<Enter/>}/>
        </Routes>
    );
}

export default Router;