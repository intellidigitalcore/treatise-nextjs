import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

function BestStories() {
    const [stories, setStories] = useState([]);
   

    useEffect(()=>{
        fetch("./data/home/bestStories.json")
        .then(res => res.json())
        .then(data => setStories(data))
    },[])

  return (
    <div className='mx-4 sm:mx-6 mt-[10px] sm:mt-[20px] relative mb-10 sm:mb-20 overflow-hidden pb-14 sm:pb-0 '>
        <h2 className="text-base sm:text-[24px] text-primary font-bold">Get started with our best stories</h2>
        
        {/* caurosel part  */}
        <div className="mt-6 sm:mt-10">
            <Swiper 
            slidesPerView={1} 
            spaceBetween={30} 
            className="mySwiper relative"  
            breakpoints= {{
                320:{
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                852:{
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1388: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1572: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }}
            navigation={true} 
            modules={[Navigation]}>
                
                {
                    stories.map(story => 
                        <SwiperSlide key={story.id}>
                            <Link href={`/blog/${story.id}`} className=""> 
                                <div className="border rounded-[10px] relative">
                                    <Image className="w-full rounded-t-[10px]" src={require(`../../public/assests/home/best-stories/${story.img}.webp`)} alt="" srcSet=""/>
                                    <div className="p-4">
                                        <p className="flex gap-x-2 text-xs lg:text-sm">
                                            <span className="text-primary">#{story.category}</span>
                                            <span className="text-text">|</span>
                                            <span className="text-text-60">22 June, 2022</span>
                                        </p>
                                        <p className="text-base lg:text-[18px] text-text font-bold mt-4">{(story.blogTitle).length > 40 ? (story.blogTitle).slice(0,40)+'...' : (story.blogTitle) }</p>
                                        <p className="flex justify-between text-xs lg:text-sm mt-4">
                                            <span className="text-text">by {story.writterName}</span>
                                            <span className="text-text-60">5 mins to read</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    </div>
  )
}

export default BestStories