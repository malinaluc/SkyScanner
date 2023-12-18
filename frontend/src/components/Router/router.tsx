import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../../Pages/Login";
import Root from "../Root";
import { FirstPage } from "../../Pages/FirstPage";
import { ResultsPage } from "../../Pages/ResultsPage";

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
    },
    {
        path : "/ResultsPage",
        element : <ResultsPage/>
    }

];

export const router = createBrowserRouter(routes);