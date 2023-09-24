import { Outlet } from "react-router-dom";


const FixedHome = () => {
    return (
        <div className="p-10 shadow-2xl">
            <h1 className="text-9xl font-bold">Nav</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default FixedHome;