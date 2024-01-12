import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../../Pages/Login";
import Root from "../Root";
import { FirstPage } from "../../Pages/FirstPage";
import { ResultsPage } from "../../Pages/ResultsPage";
import { AllInfoAdmin } from "../../Pages/AllInfoAdmin";
import { SignUp } from "../../Pages/SignUp";
import { CreateForAdminPage } from "../../Pages/CreateForAdminPage";
import { DeleteForAdminPage } from "../../Pages/DeleteForAdminPage";
import { UpdateForAdminPage } from "../../Pages/UpdateForAdminPage";

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
    },
    {
        path : "/CreateForAdminPage",
        element : <CreateForAdminPage/>
    },
    {
        path : "/DeleteForAdminPage",
        element : <DeleteForAdminPage/>
    },
    {
        path : "/UpdateForAdminPage",
        element : <UpdateForAdminPage/>
    }

];

export const router = createBrowserRouter(routes);