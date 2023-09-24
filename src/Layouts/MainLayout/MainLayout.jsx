import { createBrowserRouter } from "react-router-dom";
import FixedHome from "./FixedHome/FixedHome";
import Home from "./Home/Home";
import Products from "./Products/Products";


const MainLayout = createBrowserRouter([
    {
        path: "/",
        element: <FixedHome></FixedHome>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>
            }
        ]
    }
])

export default MainLayout;