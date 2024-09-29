import Marquee from "react-fast-marquee";
import picOne from '../../../assets/brand/1.png';
import picTwo from '../../../assets/brand/2.png';
import picThree from '../../../assets/brand/3.png';
import picFour from '../../../assets/brand/4.png';
import picFive from '../../../assets/brand/5.png';
const FooterBrand = () => {
  return (
    <div className="mt-20">
      <Marquee pauseOnHover={true}>
        <div className="flex -z-10  ">
          {/* image */}
          <div>
            <img className="w-60 " src={picOne} alt="" />
          </div>
          {/* image */}
          <div>
            <img className="w-60 " src={picTwo} alt="" />
          </div>
          {/* image */}
          <div>
            <img className="w-60" src={picThree} alt="" />
          </div>
          {/* image */}
          <div>
            <img className="w-60 " src={picFour} alt="" />
          </div>
          {/* image */}
          <div>
            <img className="w-60 " src={picFive} alt="" />
          </div>
         
        </div>
      </Marquee>
    </div>
  );
};

export default FooterBrand;
