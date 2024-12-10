import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    }
]);

export default  routers;