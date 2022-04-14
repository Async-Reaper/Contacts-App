import { IRoute } from "../models/IRoute";
import Contacts from "../pages/privatePages/Contacts";
import Login from "../pages/publicPages/Login";
import Signup from "../pages/publicPages/Signup";


export const privateRoute: IRoute = {
    path: '/contacts', 
    element: <Contacts />
}


export const publicRoutes: IRoute[] = [
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> }
]
