import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className=" font-barlow">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;