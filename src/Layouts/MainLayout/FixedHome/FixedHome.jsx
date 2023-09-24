import { Outlet } from "react-router-dom";


const FixedHome = () => {
    return (
        <div className=" text-2xl">
            <div className="flex justify-between items-center shadow-2xl">
                <div>
                <h1 className=" font-bold p-10 ">Amaxon</h1>
                </div>
                <div>
                    <ul className="flex gap-7">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                    </ul>
                </div>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default FixedHome;