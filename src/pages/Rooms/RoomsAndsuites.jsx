import NavBar from "../../components/NavBar/NavBar";

import RoomDetails from "../Home/RoomsDetails/RoomDetails";

const RoomsAndsuites = () => {
    return (
        <div className=" bg-gray-500 h-screen w-full">
            <NavBar></NavBar>

            <div className="flex items-center justify-center h-screen">
                <RoomDetails></RoomDetails>
            </div>
        </div>
    );
};

export default RoomsAndsuites;