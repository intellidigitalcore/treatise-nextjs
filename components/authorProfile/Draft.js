import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'


function Draft() {
    const [posts, setPosts] = useState([]) 
    useEffect(()=>{
        fetch("./data/posts/draft.json")
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
    {
        posts.map((post,i) =>
            <motion.div
            initial = {{opacity: 0, translateX: -50, translateY: -50}}
            animate = {{opacity: 1, translateX: 0, translateY:0}}
            transition = {{duration: 0.4, delay : i * 0.2}}
            key={post.id} className="border rounded-[10px]"> 
                <Image className="w-full rounded-t-[10px]" src={require(`./../../assests/images/Author-Profile/draft/${post.img}.webp`)} alt="" srcSet=""/>
                <div className="p-4">
                    <p className="text-xs sm:text-sm text-text-60">{post.date}</p>
                    <p className="text-base sm:text-[18px] text-text font-bold mt-4">{post.blogTitle}</p>
                    <div className="flex justify-end">
                        <div className="flex gap-x-4 mt-4 buttons">
                            <div className="btn-container relative">
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V5.625L4.375 3.125H15.625L16.875 5.625V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875Z" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.35156 11.7266L10 14.375L12.6484 11.7266" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 8.125V14.375" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3.125 5.625H16.875" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>    
                                </button>
                                <span className="tooltip opacity-0 text-sm text-text bg-white shadow-md py-2 px-4 absolute bottom-8 left-1/2 -translate-x-1/2">Archive</span>
                            </div>

                            <div className="btn-container relative">
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.24219 16.8749H3.75C3.58424 16.8749 3.42527 16.8091 3.30806 16.6919C3.19085 16.5747 3.125 16.4157 3.125 16.2499V12.7577C3.12472 12.6766 3.14044 12.5962 3.17128 12.5211C3.20211 12.446 3.24745 12.3778 3.30469 12.3202L12.6797 2.94524C12.7378 2.88619 12.8072 2.83929 12.8836 2.80728C12.9601 2.77527 13.0421 2.75879 13.125 2.75879C13.2079 2.75879 13.2899 2.77527 13.3664 2.80728C13.4428 2.83929 13.5122 2.88619 13.5703 2.94524L17.0547 6.42962C17.1137 6.48777 17.1606 6.5571 17.1927 6.63355C17.2247 6.71 17.2411 6.79205 17.2411 6.87493C17.2411 6.95781 17.2247 7.03987 17.1927 7.11632C17.1606 7.19277 17.1137 7.26209 17.0547 7.32024L7.67969 16.6952C7.62216 16.7525 7.55391 16.7978 7.47884 16.8287C7.40376 16.8595 7.32335 16.8752 7.24219 16.8749V16.8749Z" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10.625 5L15 9.375" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>   
                                </button>
                                <span className="tooltip opacity-0 text-sm text-text bg-white shadow-md py-2 px-4 absolute bottom-8 left-1/2 -translate-x-1/2">Edit</span>
                            </div>

                            <div className="btn-container relative">
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.71875 6.40625L10 3.125L13.2812 6.40625" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 11.875V3.125" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M16.875 11.875V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V11.875" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>   
                                </button>
                                <span className="tooltip opacity-0 text-sm text-text bg-white shadow-md py-2 px-4 absolute bottom-8 left-1/2 -translate-x-1/2">Publish</span>
                            </div>

                            <div className="btn-container relative">
                                <button>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.875 4.375H3.125" stroke="#D00E31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8.125 8.125V13.125" stroke="#D00E31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M11.875 8.125V13.125" stroke="#D00E31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375" stroke="#D00E31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13.125 4.375V3.125C13.125 2.79348 12.9933 2.47554 12.7589 2.24112C12.5245 2.0067 12.2065 1.875 11.875 1.875H8.125C7.79348 1.875 7.47554 2.0067 7.24112 2.24112C7.0067 2.47554 6.875 2.79348 6.875 3.125V4.375" stroke="#D00E31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>    
                                </button>
                                <span className="tooltip opacity-0 text-sm text-text bg-white shadow-md py-2 px-4 absolute bottom-8 left-1/2 -translate-x-1/2">Delete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }
</div>
  )
}

export default Draft