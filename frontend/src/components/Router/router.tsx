import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../../Pages/Login";
import Root from "../Root";
import { FirstPage } from "../../Pages/FirstPage";
import { ResultsPage } from "../../Pages/ResultsPage";
import { AllInfoAdmin } from "../../Pages/AllInfoAdmin";
import { SignUp } from "../../Pages/SignUp";

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
    },
    {
        path : "/AllInfoAdmin",
        element : <AllInfoAdmin/>
    },
    {
        path : "/SignUp",
        element : <SignUp/>
    }

];

export const router = createBrowserRouter(routes);