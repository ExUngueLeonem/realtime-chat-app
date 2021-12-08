import { LOGIN_ROUTE } from "./utils/consts";
import Login from './components/Login';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]