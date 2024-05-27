import {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from 'react-icons/rx'
import { FaSwimmingPool } from "react-icons/fa";
import LoginImage from '../assets/LoginImage.png'
import RegisterImage from '../assets/RegisterImage.png'
const Inclusion = () => {
    const images = [
        {url: LoginImage, text:'Olympic-sized pool', icon: <FaSwimmingPool className='text-[90px]'/>},
        {url: RegisterImage, text:'Kidde-sized pool', icon: <FaSwimmingPool className='text-[90px]'/>}
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

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
      }
  return (
    <div id='inclusion' className='bg-[#FFEEDB] h-screen pt-[10%]'>
      <div className="max-w-[1400px] h-[600px] w-full m-auto px-4 relative">
        <div style={{backgroundImage: `url(${images[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ">
          <div className="absolute top-[100%] -translate-x-0 -translate-y-[-50%] left-[20%] text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide}/>
          </div>

          <div className="absolute top-[100%] -translate-x-0 -translate-y-[-50%] right-[20%] text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide}/>
          </div>

          <div className="flex items-center gap-2 text-white text-[30px] p-5 rounded-t-2xl bg-black bg-opacity-30">
            {images[currentIndex].icon}
            {images[currentIndex].text}
          </div>

          <div className='flex justify-center py-2'>
            {images.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer mt-[36%]'>
                    <RxDotFilled className={currentIndex === slideIndex ? "text-black" : "text-white"} />
                </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Inclusion