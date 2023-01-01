import React, { useState } from 'react'
import { motion } from 'framer-motion';

function TermsOfService() {
    const [activeTab, setActiveTab] = useState('terms');
    const handleTabClick = e =>{
        setActiveTab(e)
    }
    console.log(activeTab);
    return (
        <div className='mt-20'>
        <div className="h-[280px] w-full terms-of-condtion">
        </div>
        <div className="relative -top-36 flex justify-center mx-4 sm:mx-8 xl:mx-0 ">
            <div  id="options" className="w-full xl:w-[1240px] px-2 sm:px-[64px] py-6 sm:py-[64px] bg-white shadow-lg">
                <div className="pb-10 border-b">
                    <h3 className="text-[24px] sm:text-[48px] text-text font-bold leading-[150%]">Terms of services</h3>
                    <p className="mt-2 text-text-60 text-sm">Version 14.123.1</p>
                    <p className="mt-2 text-text-60">Last updated May 2022</p>
                    <p className="mt-2 text-text-60">Replaces the April 2022 version <span className="text-primary">(see previous version)</span></p>
                </div>

                <div className="mt-6">
                    
                        <div className="sm:mt-20 mb-20">
                            <div className="catagories mx-0 sm:mx-6 mt-6">
                                <div className="flex justify-center">
                                    <ul id="tabs-nav" className="flex gap-x-6 whitespace-nowrap overflow-x-scroll text-sm sm:text-base scroll-bar">
                                        <li onClick={() =>handleTabClick("terms")} className={`${activeTab === 'terms' ? 'btn-active' : ''} px-3 py-3 text-nav-text cursor-pointer`}>Terms & Conditions</li>
                                        <li onClick={() => handleTabClick("privacy")} className={`${activeTab === 'privacy' ? 'btn-active' : ''} px-3 py-3 text-nav-text cursor-pointer`}>Privacy Policy</li>
                                        <li onClick={() => handleTabClick("payment")} className={`${activeTab === 'payment' ? 'btn-active' : ''} px-3 py-3 text-nav-text cursor-pointer`}>Payment method</li>
                                    </ul>
                                </div>
                                <div className="mt-10 tabs-content">
                                    
                                   {
                                    (activeTab === "terms") &&
                                        <motion.div id="all" className=" tab-content"
                                        initial = {{opacity: 0, translateX: 0, translateY: -50}}
                                        animate = {{opacity: 1, translateX: 0, translateY:0}}
                                        transition = {{duration: 0.4, delay : 0.2}}
                                        >

                                        <h4 className="text-text text-base sm:text-[24px] font-bold">What information do we collect?</h4>
                                        <p className="mt-6 text-sm sm:text-base text-text-60 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et.
                                        </p>

                                        <h4 className="text-text text-base sm:text-[24px] font-bold mt-11">Use of Cookies</h4>
                                        <p className="mt-6 text-sm sm:text-base text-text-60 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et.
                                        </p>

                                        <h4 className="text-text text-base sm:text-[24px] font-bold mt-11">What information do we collect?</h4>
                                        <p className="mt-6 text-sm sm:text-base text-text-60 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et.
                                        </p>

                                        <div className="mt-11 flex flex-col sm:flex-row justify-center items-center gap-x-10 ">
                                            <button className="px-5 py-3 text-primary font-bold border border-primary text-sm rounded-[10px] w-fit"><a href="#options">Payment method</a></button>
                                            <button className="px-8 py-3 text-primary font-bold border border-primary text-sm rounded-[10px] w-fit mt-6 sm:mt-0"><a href="#options">Privacy Policy</a></button>
                                        </div>
                                        
                                        </motion.div>
                                   }

                                    {
                                        (activeTab === "privacy") &&
                                        <motion.div id="career_growth" className="tab-content"
                                        initial = {{opacity: 0, translateX: 0, translateY: -50}}
                                        animate = {{opacity: 1, translateX: 0, translateY:0}}
                                        transition = {{duration: 0.4, delay : 0.2}}
                                        >

                                        <h4 className="text-text text-[24px] font-bold">Use of Information</h4>
                                        <p className="mt-6 text-sm sm:text-base text-text-60 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et.
                                        </p>

                                        <h4 className="text-text text-base sm:text-[24px] font-bold mt-11">Use of Cookies</h4>
                                        <p className="mt-6 text-sm sm:text-base text-text-60 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et.
                                        </p>

                                        <div className="mt-11 flex justify-center gap-x-10 ">
                                            <button className="px-5 py-3 text-primary font-bold border border-primary text-sm rounded-[10px]"><a href="#options">Payment method</a></button>
                                            <button className="px-5 py-3 text-primary font-bold border border-primary text-sm rounded-[10px]"><a href="#options">Privacy Policy</a></button>
                                        </div>
                                    
                                        
                                        </motion.div>
                                    }

                                   {
                                        (activeTab === "payment") &&
                                        <motion.div id="process" className="tab-content"
                                        initial = {{opacity: 0, translateX: 0, translateY: -50}}
                                        animate = {{opacity: 1, translateX: 0, translateY:0}}
                                        transition = {{duration: 0.4, delay : 0.2}}
                                        >

                                        <h4 className="text-text text-[24px] font-bold">Use of Information</h4>
                                        <p className="mt-6 text-sm sm:text-base text-text-60 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et.
                                        </p>

                                        <h4 className="text-text text-base sm:text-[24px] font-bold mt-11">Use of Cookies</h4>
                                        <p className="mt-6 text-sm sm:text-base text-text-60 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et.
                                        </p>

                                        <h4 className="text-text text-base sm:text-[24px] font-bold mt-11">What information do we collect?</h4>
                                        <p className="mt-6 text-sm sm:text-base text-text-60 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et. <br/> <br/>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur orci eu congue malesuada. Aliquam erat leo, euismod non tellus ac, placerat tincidunt purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis nibh metus, elementum congue tincidunt vel, elementum quis lectus. Cras placerat, urna ac lobortis tincidunt, massa magna bibendum ipsum, a faucibus neque nibh eu neque. Nam molestie fermentum orci, eu fermentum lacus vestibulum et.
                                        </p>
                                        <div className="mt-11 flex justify-center gap-x-10 ">
                                            <button className="px-5 py-3 text-primary font-bold border border-primary text-sm rounded-[10px]">Terms & Conditions</button>
                                            <button className="px-5 py-3 text-primary font-bold border border-primary text-sm rounded-[10px]">Privacy Policy</button>
                                        </div>

                                        </motion.div>
                                   }
                                </div>
                                
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    </div>
    )
}

export default TermsOfService