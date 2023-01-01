import banner from '../../public/assests/home/banner.png'
import bannerMobile from '../../public/assests/home/banner-m.png'
import Image from 'next/image'

function HeroSection() {
  return (
    <>
        <div className="banner mx-4 sm:mx-6 lg:mx-20 2xl:mx-[182px] flex flex-col lg:flex-row lg:items-start xl:items-center justify-between ">
            <div className="w-[100%] lg:w-[59%] ">
                <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[30px] 2xl:text-[64px] text-primary font-bold text-center sm:text-left lg:px-0">I explore how people and technology are making the world a better place.</h2>
                <div className="flex flex-col sm:flex-row-reverse md:flex-row gap-x-6 justify-center items-center xl:items-start mt-0 xl:mt-10 2xl:mt-0">
                    <div className="w-full md:w-2/5 lg:1/3 hidden sm:flex justify-center">
                        <div className="relative lg:w-[400px] sm:mt-6  2xl:mt-[137px] ">
                            <div id="circle" className="spinning-text animate flex justify-center">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                                    <defs>
                                        <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                                    </defs>
                                    <circle cx="150" cy="100" r="75" fill="none"/>
                                    <g>
                                        <use xlinkHref="#circlePath" fill="none"/>
                                        <text fill="#283683">
                                            <textPath xlinkHref="#circlePath">view all article . view all article . view all article</textPath>
                                        </text>
                                    </g>
                                </svg>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0425 40.1781C23.651 31.4316 32.289 21.8679 34.9227 19.0714V16.0771L34.1492 16.8594C33.5927 17.4211 23.4567 27.7409 18.716 37.9557C18.3275 38.7939 17.9757 39.6304 17.6677 40.4617C16.8207 42.7472 16.3027 44.9872 16.3027 47.0662C16.3027 61.3917 32.5532 64.0622 32.7177 64.0867L33.9567 64.2774L31.7797 61.8046C28.1975 60.9226 18.436 57.5574 18.436 47.0644C18.436 45.5874 18.73 44.0071 19.2427 42.3709C19.353 42.0121 19.9532 40.4669 20.0425 40.1781Z" fill="url(#paint0_linear_326_313)"/>
                                    <path d="M9.05995 42.1366C9.05995 37.7843 9.84745 32.9403 13.2704 27.4821C13.5294 25.3996 14.0317 23.3591 14.8769 21.4341C8.3617 28.8383 6.8252 36.8183 6.8252 42.1348C6.8252 61.0943 23.2804 69.6221 34.9652 69.6221V67.4853C24.2079 67.4871 9.05995 59.6226 9.05995 42.1366Z" fill="url(#paint1_linear_326_313)"/>
                                    <path d="M34.9229 3.20789V0.525146L34.2387 1.0729C34.0462 1.2269 29.4507 4.92114 24.7817 10.2674C18.4309 17.5404 15.2109 24.0591 15.2109 29.6434C15.2109 30.8089 15.2547 31.9762 15.3719 33.1364C15.4734 34.1391 15.6292 35.1366 15.8689 36.1184C16.0807 36.9881 16.3589 37.8422 16.7194 38.6664C16.9644 39.2247 17.2287 39.7654 17.5647 40.2764C17.8779 40.7541 18.2262 41.2109 18.6042 41.6414C19.4092 42.5602 20.3542 43.3004 21.3447 44.0267C21.8522 44.3994 22.3772 44.7844 22.8584 45.1886C28.3342 49.7946 31.3984 55.5084 31.7782 61.7821L33.9552 64.2549L33.9517 63.0544C33.9342 55.6782 30.5847 48.9721 24.2672 43.6574C23.7317 43.2076 23.1787 42.7999 22.6414 42.4079C22.1637 42.0562 21.6824 41.7061 21.2274 41.3281C21.0052 41.1426 20.7899 40.9519 20.5834 40.7506C20.4819 40.6509 20.3822 40.5494 20.2877 40.4444C19.9517 40.0769 19.6542 39.6779 19.3882 39.2614C19.1169 38.8361 18.9157 38.3917 18.7109 37.9332C17.7712 35.8227 17.3407 33.1714 17.3407 29.6434C17.3442 18.7706 31.5997 6.02889 34.9229 3.20789Z" fill="url(#paint2_linear_326_313)"/>
                                    <path d="M49.726 40.1781C46.1175 31.4316 37.4795 21.8679 34.8457 19.0714V16.0771L35.6192 16.8594C36.1757 17.4211 46.3117 27.7409 51.0525 37.9557C51.441 38.7939 51.7927 39.6304 52.1007 40.4617C52.9477 42.7472 53.4657 44.9872 53.4657 47.0662C53.4657 61.3917 37.2152 64.0622 37.0507 64.0867L35.8117 64.2774L37.9887 61.8046C41.571 60.9226 51.3325 57.5574 51.3325 47.0644C51.3325 45.5874 51.0385 44.0071 50.5257 42.3709C50.4155 42.0121 49.8152 40.4669 49.726 40.1781Z" fill="url(#paint3_linear_326_313)"/>
                                    <path d="M60.79 42.1366C60.79 37.7843 60.0025 32.9403 56.5795 27.4821C56.3205 25.3996 55.8183 23.3591 54.973 21.4341C61.4883 28.8383 63.0248 36.8183 63.0248 42.1348C63.0248 61.0943 46.5695 69.6221 34.8848 69.6221V67.4853C45.642 67.4871 60.79 59.6226 60.79 42.1366Z" fill="url(#paint4_linear_326_313)"/>
                                    <path d="M34.8457 3.20789V0.525146L35.53 1.0729C35.7225 1.2269 40.3179 4.92114 44.9869 10.2674C51.3377 17.5404 54.5577 24.0591 54.5577 29.6434C54.5577 30.8089 54.514 31.9762 54.3967 33.1364C54.2952 34.1391 54.1394 35.1366 53.8997 36.1184C53.6879 36.9881 53.4097 37.8422 53.0492 38.6664C52.8042 39.2247 52.5399 39.7654 52.2039 40.2764C51.8907 40.7541 51.5424 41.2109 51.1644 41.6414C50.3594 42.5602 49.4145 43.3004 48.424 44.0267C47.9165 44.3994 47.3914 44.7844 46.9102 45.1886C41.4344 49.7946 38.3702 55.5084 37.9905 61.7821L35.8135 64.2549L35.817 63.0544C35.8345 55.6782 39.184 48.9721 45.5015 43.6574C46.037 43.2076 46.5899 42.7999 47.1272 42.4079C47.6049 42.0562 48.0862 41.7061 48.5412 41.3281C48.7634 41.1426 48.9787 40.9519 49.1852 40.7506C49.2867 40.6509 49.3864 40.5494 49.4809 40.4444C49.8169 40.0769 50.1145 39.6779 50.3805 39.2614C50.6517 38.8361 50.8529 38.3917 51.0577 37.9332C51.9974 35.8227 52.4297 33.1714 52.4297 29.6434C52.4245 18.7706 38.169 6.02889 34.8457 3.20789Z" fill="url(#paint5_linear_326_313)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_326_313" x1="25.6127" y1="16.0771" x2="25.6127" y2="64.2774" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#283683"/>
                                    <stop offset="1" stopColor="#3F1CA3"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_326_313" x1="20.8952" y1="21.4341" x2="20.8952" y2="69.6221" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#283683"/>
                                    <stop offset="1" stopColor="#3F1CA3"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_326_313" x1="25.0669" y1="0.525146" x2="25.0669" y2="64.2549" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#283683"/>
                                    <stop offset="1" stopColor="#3F1CA3"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_326_313" x1="44.1557" y1="16.0771" x2="44.1557" y2="64.2774" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#283683"/>
                                    <stop offset="1" stopColor="#3F1CA3"/>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_326_313" x1="48.9548" y1="21.4341" x2="48.9548" y2="69.6221" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#283683"/>
                                    <stop offset="1" stopColor="#3F1CA3"/>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_326_313" x1="44.7017" y1="0.525146" x2="44.7017" y2="64.2549" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#283683"/>
                                    <stop offset="1" stopColor="#3F1CA3"/>
                                    </linearGradient>
                                    </defs>
                                </svg>    
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 lg:w-2/3  md:pl-0 xl:px-[5%] lg:px-0 mt-6 md:mt-0 xl:mt-20">
                        <p className="text-base lg:text-base xl:text-[19px] 2xl:text-xl  text-primary-60 text-center sm:text-left ">My work and writing focuses on the people and technology companies that make a positive impact on the world. I see the world through the lens of strategy and history.</p>
                        <p className="text-base lg:text-base xl:text-[19px] 2xl:text-xl text-primary-60 text-center sm:text-left mt-4">I share lessons from world-class entrepreneurs and how they built enduring companies.</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] lg:w-[39%] mt-6 lg:mt-0">
                <Image className="rounded-[16px] w-full hidden lg:block" src={banner} alt="" srcSet=""/>
                <Image className="rounded-[16px] w-full block sm:hidden" src={bannerMobile} alt="" srcSet="" />
            </div>

            
            <div className="relative w-[200px] h-[200px] sm:mt-6 left-1/2 -translate-x-1/2 sm:hidden">
                <div id="circle" className="spinning-text animate flex justify-center">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                        <defs>
                            <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                        </defs>
                        <circle cx="150" cy="100" r="75" fill="none"/>
                        <g>
                            <use xlinkHref="#circlePath" fill="none"/>
                            <text fill="#283683">
                                <textPath xlinkHref="#circlePath">view all article . view all article . view all article</textPath>
                            </text>
                        </g>
                    </svg>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1963 21.7016C13.079 17.1382 17.5858 12.1485 18.9599 10.6894V9.1272L18.5563 9.53533C18.266 9.82841 12.9776 15.2126 10.5042 20.5421C10.3015 20.9794 10.118 21.4159 9.95729 21.8495C9.51538 23.042 9.24512 24.2107 9.24512 25.2954C9.24512 32.7695 17.7236 34.1629 17.8095 34.1756L18.4559 34.2752L17.3201 32.985C15.4511 32.5248 10.3581 30.7691 10.3581 25.2945C10.3581 24.5239 10.5115 23.6994 10.779 22.8457C10.8366 22.6585 11.1497 21.8523 11.1963 21.7016Z" fill="url(#paint0_linear_559_1508)"/>
                        <path d="M5.46576 22.7234C5.46576 20.4527 5.87663 17.9254 7.66255 15.0776C7.79768 13.9911 8.05972 12.9265 8.50072 11.9221C5.10146 15.7852 4.2998 19.9487 4.2998 22.7225C4.2998 32.6144 12.8852 37.0637 18.9815 37.0637V35.9489C13.3691 35.9498 5.46576 31.8466 5.46576 22.7234Z" fill="url(#paint1_linear_559_1508)"/>
                        <path d="M18.9598 2.41288V1.01318L18.6028 1.29897C18.5024 1.37931 16.1047 3.30675 13.6687 6.0961C10.3553 9.8907 8.67529 13.2918 8.67529 16.2053C8.67529 16.8134 8.69812 17.4224 8.75929 18.0278C8.81225 18.5509 8.89351 19.0714 9.0186 19.5836C9.12908 20.0374 9.27425 20.4829 9.46234 20.913C9.59016 21.2042 9.72803 21.4864 9.90334 21.753C10.0668 22.0022 10.2485 22.2405 10.4457 22.4651C10.8657 22.9445 11.3587 23.3307 11.8755 23.7096C12.1403 23.9041 12.4142 24.105 12.6653 24.3159C15.5222 26.719 17.1209 29.7001 17.3191 32.9734L18.4549 34.2635L18.4531 33.6371C18.4439 29.7887 16.6964 26.2899 13.4003 23.517C13.1209 23.2823 12.8324 23.0696 12.5521 22.8651C12.3028 22.6815 12.0517 22.4989 11.8143 22.3017C11.6984 22.2049 11.5861 22.1054 11.4783 22.0004C11.4254 21.9484 11.3733 21.8954 11.324 21.8406C11.1487 21.6489 10.9935 21.4407 10.8547 21.2234C10.7132 21.0015 10.6082 20.7696 10.5014 20.5304C10.0111 19.4293 9.78647 18.046 9.78647 16.2053C9.78829 10.5326 17.2259 3.8847 18.9598 2.41288Z" fill="url(#paint2_linear_559_1508)"/>
                        <path d="M26.6835 21.7016C24.8008 17.1382 20.2941 12.1485 18.9199 10.6894V9.1272L19.3235 9.53533C19.6138 9.82841 24.9022 15.2126 27.3756 20.5421C27.5783 20.9794 27.7618 21.4159 27.9225 21.8495C28.3644 23.042 28.6347 24.2107 28.6347 25.2954C28.6347 32.7695 20.1562 34.1629 20.0704 34.1756L19.4239 34.2752L20.5597 32.985C22.4287 32.5248 27.5217 30.7691 27.5217 25.2945C27.5217 24.5239 27.3683 23.6994 27.1008 22.8457C27.0433 22.6585 26.7301 21.8523 26.6835 21.7016Z" fill="url(#paint3_linear_559_1508)"/>
                        <path d="M32.4557 22.7234C32.4557 20.4527 32.0449 17.9254 30.2589 15.0776C30.1238 13.9911 29.8618 12.9265 29.4208 11.9221C32.82 15.7852 33.6217 19.9487 33.6217 22.7225C33.6217 32.6144 25.0363 37.0637 18.9399 37.0637V35.9489C24.5524 35.9498 32.4557 31.8466 32.4557 22.7234Z" fill="url(#paint4_linear_559_1508)"/>
                        <path d="M18.9199 2.41288V1.01318L19.2769 1.29897C19.3774 1.37931 21.775 3.30675 24.211 6.0961C27.5244 9.8907 29.2044 13.2918 29.2044 16.2053C29.2044 16.8134 29.1816 17.4224 29.1204 18.0278C29.0675 18.5509 28.9862 19.0714 28.8611 19.5836C28.7507 20.0374 28.6055 20.4829 28.4174 20.913C28.2896 21.2042 28.1517 21.4864 27.9764 21.753C27.813 22.0022 27.6313 22.2405 27.434 22.4651C27.014 22.9445 26.521 23.3307 26.0042 23.7096C25.7394 23.9041 25.4655 24.105 25.2144 24.3159C22.3575 26.719 20.7588 29.7001 20.5607 32.9734L19.4248 34.2635L19.4267 33.6371C19.4358 29.7887 21.1834 26.2899 24.4794 23.517C24.7588 23.2823 25.0474 23.0696 25.3277 22.8651C25.5769 22.6815 25.828 22.4989 26.0654 22.3017C26.1814 22.2049 26.2937 22.1054 26.4014 22.0004C26.4544 21.9484 26.5064 21.8954 26.5557 21.8406C26.731 21.6489 26.8862 21.4407 27.025 21.2234C27.1665 21.0015 27.2715 20.7696 27.3784 20.5304C27.8687 19.4293 28.0942 18.046 28.0942 16.2053C28.0914 10.5326 20.6538 3.8847 18.9199 2.41288Z" fill="url(#paint5_linear_559_1508)"/>
                        <defs>
                        <linearGradient id="paint0_linear_559_1508" x1="14.1025" y1="9.1272" x2="14.1025" y2="34.2752" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#283683"/>
                        <stop offset="1" stopColor="#3F1CA3"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_559_1508" x1="11.6407" y1="11.9221" x2="11.6407" y2="37.0637" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#283683"/>
                        <stop offset="1" stopColor="#3F1CA3"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_559_1508" x1="13.8176" y1="1.01318" x2="13.8176" y2="34.2635" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#283683"/>
                        <stop offset="1" stopColor="#3F1CA3"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_559_1508" x1="23.7773" y1="9.1272" x2="23.7773" y2="34.2752" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#283683"/>
                        <stop offset="1" stopColor="#3F1CA3"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_559_1508" x1="26.2808" y1="11.9221" x2="26.2808" y2="37.0637" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#283683"/>
                        <stop offset="1" stopColor="#3F1CA3"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_559_1508" x1="24.0622" y1="1.01318" x2="24.0622" y2="34.2635" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#283683"/>
                        <stop offset="1" stopColor="#3F1CA3"/>
                        </linearGradient>
                        </defs>
                    </svg>    
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection