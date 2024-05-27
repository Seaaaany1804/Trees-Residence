import {useState} from "react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import LoginImage from '../assets/LoginImage.png'
import RegisterImage from '../assets/RegisterImage.png'
const RoomTour = () => {
    const images = [
        {url: LoginImage},
        {url: RegisterImage}
      ]
    
      const [currentIndex, setCurrentIndex] = useState(0)
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex -1
        setCurrentIndex(newIndex);
      }
    
      const nextSlide = () => {
        const isLastSlide = currentIndex ===  images.length - 1 ;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
      }
  return (
    <div id='roomtour' className='bg-[#FFEEDB] h-screen font-poppins'>
      <div className="text-end mt-5 pr-10">
        <h1 className="mr-4 text-[25px]">Contact us:</h1>
        <h1 className="flex justify-end gap-5 text-[40px]">
          <CiFacebook className="cursor-pointer"/>
          <FaXTwitter className="cursor-pointer"/>
          <CiInstagram className="cursor-pointer"/>
        </h1>
      </div>

      <div className="ml-[4%] mt-[3%] text-[68px]">
        <h1>Staycation near malls!</h1>
      </div>

      <div className="ml-[4%] text-[20px]">
        <h1>Located near SM Fairview, Ayala Fairview Terraces,</h1>
        <h1>and Robinson’s Novaliches.</h1>
      </div>

      <div className="max-w-[1400px] h-[600px] w-full m-auto mt-[1%] px-4 relative">
        <div style={{backgroundImage: `url(${images[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
          <div className="absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-[-60px] text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide}/>
          </div>

          <div className="absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-[-60px] text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide}/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RoomTour;
