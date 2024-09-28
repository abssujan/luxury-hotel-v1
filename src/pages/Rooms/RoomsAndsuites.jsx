import NavBar from "../../components/NavBar/NavBar";
import NavBarWhite from "../../components/NavBar/NavBarWhite";
import ExServiceSlider from "../Home/ExtraServices/ExServiceSlider/ExServiceSlider";
import SliderAsset from "../Home/ExtraServices/ExServiceSlider/SliderAsset/SliderAsset";
import SliderAssetTwo from "../Home/ExtraServices/ExServiceSlider/SliderAsset/SliderAssetTwo";

import RoomDetails from "../Home/RoomsDetails/RoomDetails";

const RoomsAndsuites = () => {
    return (
        <div className=" bg-gray-500 h-screen w-full">
            <NavBar></NavBar>
            <div >
                <NavBarWhite></NavBarWhite>
            </div>
            <div className="flex items-center justify-center h-screen">
                <RoomDetails></RoomDetails>
            </div>
            <div>
                <SliderAsset></SliderAsset>
            </div>
            <div>
                <SliderAssetTwo></SliderAssetTwo>
            </div>
            <div className="bg-black w-full h-screen" >
                <ExServiceSlider></ExServiceSlider>
            </div>
        </div>
    );
};

export default RoomsAndsuites;