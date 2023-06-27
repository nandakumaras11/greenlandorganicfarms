import sliderelement from "../datas/sliderData.js"
// import Rating  from 'react-rating-scale';
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';
import "../asset/css/slider.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerDetails } from "../Store1/Slices/bannerSlice"
import { useEffect } from "react";
import { httpRequest } from "../API/api.js";
export default function Imageslider() {
  const dispatch = useDispatch()

  useEffect(() => {
    httpRequest({}, "getGalleryList.php").then((data) => { dispatch(fetchBannerDetails(data)) }).catch(error => console.log(error));
  }, []);
  const banner = useSelector((state) => state.banner.bannerList);
  const imagePath = useSelector((state) => state.banner.imagePath);
  return (
    <div className="slider-containerDiv">
      {banner.length > 0 ?
        <Slider autoplay>
          {
            banner.map((singleImg, index) => {
              return (
                <div className="slider-img slide" key={index} style={{ zIndex: "0", backgroundImage: `url(${imagePath + singleImg.image})` }}>
                  {/* <h1>{index}</h1> */}
                </div>

              )
            })
          }

        </Slider>
        : <></>
      }
    </div>
  )
}

