import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function AllPost() {

    const [posts, setPosts] = useState([])
    const [filterProduct , setFilterProduct] = useState([])
    const [activebtn, setActiveBtn] = useState('all');

    useEffect(()=>{
        fetch("./data/home/posts.json")
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            setFilterProduct(data)
        })
    },[])

    const categoryHander = (e)=> {
        if(e === 'all'){
            setFilterProduct(posts)
            setActiveBtn(e)
            return
        }
        setActiveBtn(e)
        const filteredproducts = posts?.filter(product => product.category === e)
        setFilterProduct(filteredproducts)
    }
  return (
    <div id="all-post" className="mt-20 mb-20">
    <h2 className="text-primary font-bold text-base sm:text-[24px] text-center sm:text-left mx-6 leading-[150%]">All Posts</h2>
    <div className="catagories mx-6 mt-6 items-menu">
        <ul className="flex gap-x-6 text-text  whitespace-nowrap overflow-x-scroll text-sm sm:text-base scroll-bar">
            <li onClick={()=> categoryHander('all')} className={`${activebtn === 'all' ? ' btn-active ':''} px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>All</li>
            <li onClick={()=> categoryHander('Career & Growth')} className={`${activebtn === 'Career & Growth' ? ' btn-active ':''}"px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>Career & Growth</li>
            <li onClick={()=> categoryHander('Process')} className={`${activebtn === 'Process' ? ' btn-active ':''} px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>Process</li>
            <li onClick={()=> categoryHander('Product')}className={`${activebtn === 'Product' ? ' btn-active ':''} px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>Product</li>
            <li onClick={()=> categoryHander('Design System')} className={`${activebtn === 'Design System' ? ' btn-active ':''} px-6 sm:px-7 py-2 sm:py-33 cursor-pointer`}>Design System</li>
        </ul>
    </div>
    <div className="mt-10  mx-6">
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 550:2, 900: 3, 1200:4}}
        >
            <Masonry> 
                {
                    filterProduct?.map((post,i) =>
                        <motion.div key={post.id} className="items Product m-[10px]"
                        initial = {{opacity: 0, translateX: -50, translateY: -50}}
                        animate = {{opacity: 1, translateX: 0, translateY:0}}
                        transition = {{duration: 0.4, delay : i * 0.2}}
                        >
                            <Link href={`/blogdetails/${post.id}`}>
                                <div className="border rounded-[10px] h-fit">
                                    {/* <Image className="w-full" src={require(`../../assests/images/home/all-posts/${post.img}.webp`)} alt="" srcSet=""/> */}
                                    <Image className="w-full rounded-t-[10px]" src={require(`../../public/assests/home/all-posts/${post.img}.webp`)} alt="" srcSet=""/>
                                    <div className="p-4">
                                        <p className="flex gap-x-2 text-xs md:text-sm">
                                            <span className="text-primary">#Career & Growth</span>
                                            <span className="text-text">|</span>
                                            <span className="text-text-60">22 June, 2022</span>
                                        </p>
                                        <p className="text-base md:text-[18px] text-text font-bold mt-4">10 things nobody told your about Being a web designer!</p>
                                        <p className="flex justify-between text-xs sm:text-sm mt-4">
                                            <span className="text-text">by James Frankline</span>
                                            <span className="text-text-60">5 mins to read</span>
                                        </p>
                                    </div>
                                </div>
                            </Link> 
                        </motion.div>   
                    )
                }
            </Masonry>
        </ResponsiveMasonry>
        <div className="flex items-center justify-center mt-10">
            <Link href='/allpost' className='text-sm font-bold text-primary bg-primary-10 px-[51px] py-3 rounded-[8px]'>See All</Link>
        </div>
    </div>
</div>
  )
}

export default AllPost