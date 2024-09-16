import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import RoomsAndsuites from "../pages/Rooms/RoomsAndsuites";
import Restaurant from "../pages/Restaurant/Restaurant";
import Spa from "../pages/Spa/Spa";
import News from "../pages/News/News";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/rooms',
                element: <RoomsAndsuites></RoomsAndsuites>
            },
            {
                path: '/restaurant',
                element: <Restaurant></Restaurant>
            },
            {
                path: '/spa',
                element: <Spa></Spa>
            },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router