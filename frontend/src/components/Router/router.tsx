import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../../Pages/Login";
import Root from "../Root";
import { FirstPage } from "../../Pages/FirstPage";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Root/>
    },
    {
        path: "/Login",
        element: <Login/>
    },
    {
        path: "/FirstPage",
        element: <FirstPage />
    }

];

export const router = createBrowserRouter(routes);