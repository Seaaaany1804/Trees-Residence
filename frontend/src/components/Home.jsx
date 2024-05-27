import {useState} from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiUserCheck,PiCalendarDots } from "react-icons/pi";
import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"

import LoginImage from '../assets/LoginImage.png'
import RegisterImage from '../assets/RegisterImage.png'
const Home = () => {
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
    <div>
      <h1 id='home'className="text-[1px]">hidden</h1>
    <div className="grid grid-cols-2 mt-24">
      <div className="font-poppins mt-[10%]">
        <h1 className="text-[68px] text-center">Staycation made easy!</h1>

        <div className="mx-[10%] text-[20px] mt-3">
          <h1>To Reserve your desired schedule,</h1>
          <h1>create your account now!</h1>
        </div>

        <div className="mx-[10%] mt-10">
          <button className="border-2 text-[20px] rounded-full border-none bg-[#FFAA94] p-2 px-24 drop-shadow-lg">Register Account</button>
        </div>

        <div className="mx-[10%] mt-[10%] text-[20px]">
          <h1 className="flex items-center gap-2">
            <IoChatbubblesOutline className="text-[30px] "/>
            Built-in chat system</h1>

          <h1 className="flex items-center mt-5 gap-2">
            <PiUserCheck className="text-[30px]"/>
            User-friendly interface</h1>

          <h1 className="flex items-center mt-5 gap-2">
            <PiCalendarDots className="text-[30px]"/>
            Real-time scheduling</h1>
        </div>
      </div>

      <div className="max-w-[900px] h-[680px] w-full m-auto px-4 relative mt-[7%]">
        <div style={{backgroundImage: `url(${images[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
          <div className="absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide}/>
          </div>

          <div className="absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide}/>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Home;
