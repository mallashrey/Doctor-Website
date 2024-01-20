import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';
import { services } from './../../assets/data/services';

const Testimonial = () => {
  return (
    <div>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} 
        breakpoints={{
            640: {
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerViewa: 2,
                spaceBetween: 20,
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }}>
            {/** first testimonial with the picture, the name, stars and comment para */}
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3 ">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                            Shreyas Malla
                        </h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />  {/** creates the 5 stars in the testimonial page */}
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                        I have taken medical services from them. They treat me so well and they are providing the best medical services
                    </p>
                </div>    
            </SwiperSlide>   
            {/** End of first testimonial with the picture, the name, stars and comment para */} 

            {/** Second testimonial with the picture, the name, stars and comment para */}
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3 ">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                            James Bond
                        </h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />  {/** creates the 5 stars in the testimonial page */}
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                        I had an accident on set, best medical team
                    </p>
                </div>    
            </SwiperSlide> 
            {/** End of second testimonial with the picture, the name, stars and comment para */}

            {/** 3rd testimonial with the picture, the name, stars and comment para */}
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3 ">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                            Pheobe
                        </h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />  {/** creates the 5 stars in the testimonial page */}
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                        I like the Blonde Doctor
                    </p>
                </div>    
            </SwiperSlide>
             
            {/** End of 3rd testimonial with the picture, the name, stars and comment para */}

            {/** 4th testimonial with the picture, the name, stars and comment para */}
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3 ">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                            Lionel Messi
                        </h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />  {/** creates the 5 stars in the testimonial page */}
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                        Best team in Australia
                    </p>
                </div>    
            </SwiperSlide> 
            {/** End of 4th testimonial with the picture, the name, stars and comment para */}

            {/** 5th testimonial with the picture, the name, stars and comment para */}
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3 ">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
                            Neymar
                        </h4>
                        <div className="flex items-center gap-[2px] ">
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />  {/** creates the 5 stars in the testimonial page */}
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                            <HiStar className='text-yellowColor w0[18px] h-5 ' />
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                        I keep getting injured and they fix me
                    </p>
                </div>    
            </SwiperSlide> 
            {/** End of 5th testimonial with the picture, the name, stars and comment para */}

        </Swiper>
    </div>
    
  )
}

export default Testimonial