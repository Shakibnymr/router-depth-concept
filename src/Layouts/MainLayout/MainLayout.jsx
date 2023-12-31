import { createBrowserRouter } from "react-router-dom";
import FixedHome from "./FixedHome/FixedHome";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Dashboard from "./Dashboard/Dashboard";
import Product from "./Products/Product/Product";


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
                element: <Products></Products>,
                loader:() => fetch(`https://dummyjson.com/products`)
            },

{
path: "/products/:id",
element: <Product></Product>,
loader:({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
},

            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default MainLayout;

// MainLayout === route