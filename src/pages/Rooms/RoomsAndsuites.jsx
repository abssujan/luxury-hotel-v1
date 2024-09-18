import NavBar from "../../components/NavBar/NavBar";
import HotelBooking from "../Home/HotelBooking/HotelBooking";

const RoomsAndsuites = () => {
    return (
        <div className=" bg-gray-500 h-screen w-full">
            <NavBar></NavBar>

            <div className="flex items-center justify-center h-screen">
                <HotelBooking></HotelBooking>
            </div>
        </div>
    );
};

export default RoomsAndsuites;