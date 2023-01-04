import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import {motion} from 'framer-motion'
import Image from 'next/image'

function Allpost() {

    const [showingFilter , setShowingFilter] = useState(false)
    const [posts, setPosts] = useState([])
    const [filterProduct , setFilterProduct] = useState([])
    const [activebtn, setActiveBtn] = useState('all');

    useEffect(()=>{
        fetch("./data/all-post/allPost.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
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


    const itemsPerPage = 8; 
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = filterProduct.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filterProduct.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterProduct.length;
    setItemOffset(newOffset);
    };

  return (
    <div className='mt-[56px] sm:mt-[87px]'>
        {/* <!-- banner part  --> */}
        <div className="all-blog-banner flex justify-center">
            <div className="w-[1180px] py-[64px] text-center mx-5">
                <p className="text-text font-bold text-base sm:text-[24px] md:text-[48px] leading-[150%] md:leading-[60px]">“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</p>
                <p className="italic text-xs md:text-base text-text-60 mt-2 md:mt-6">-George R.R. Martin</p>
            </div>
        </div>

         {/* <!-- all post  --> */}
         <div className="mx-4 md:mx-6 py-6">

{/* filtering  */}
<div className="flex items-center justify-between">
    <div className="border-2 rounded-[8px] py-1 pl-3 pr-2">
        <select className="h-[35px] text-text-60 font-bold  outline-none bg-white" name="" id="">
            <option value="sort">Sort</option>
            <option value="New">New</option>
            <option value="Popular">Popular</option>
            <option value="Featured">Featured</option>
        </select>
    </div>
    <div className="items-menu hidden lg:block">
        <ul className="flex xl:gap-x-4 2xl:gap-x-6 text-text  whitespace-nowrap overflow-x-scroll text-sm 2xl:text-base scroll-bar">
            <li onClick={()=> categoryHander('all')} className={`${activebtn === 'all' ? 'blog-active-btn':''} px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>All</li>
            <li onClick={()=> categoryHander('Career & Growth')} className={`${activebtn === 'Career & Growth' ? ' blog-active-btn ':''}"px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>Career & Growth</li>
            <li onClick={()=> categoryHander('Process')} className={`${activebtn === 'Process' ? 'blog-active-btn':''} px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>Process</li>
            <li onClick={()=> categoryHander('Product')}className={`${activebtn === 'Product' ? 'blog-active-btn':''} px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>Product</li>
            <li onClick={()=> categoryHander('Design System')} className={`${activebtn === 'Design System' ? 'blog-active-btn':''} px-6 sm:px-7 py-2 sm:py-33 cursor-pointer`}>Design System</li>
        </ul>
    </div>
    <div onClick={()=>setShowingFilter(!showingFilter)} className="px-4 md:px-7 py-3 border-2 rounded-[10px] cursor-pointer">
        <button  className="flex items-center gap-x-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                <path d="M9.5625 12.0938H2.8125" stroke="#060B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.1875 12.0938H11.8125" stroke="#060B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.0625 5.90625H2.8125" stroke="#060B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.1875 5.90625H7.3125" stroke="#060B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.3125 4.21875V7.59375" stroke="#060B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.8125 13.7812V10.4062" stroke="#060B25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
            <span className="text-text-60 font-bold text-sm">Filter</span>    
        </button>
    </div>
</div>

{/* tabs  */}
<div className="for-mobile lg:hidden mt-6 flex justify-center">
    <div className="items-menu overflow-x-scroll scroll-bar">
        <ul className="flex gap-x-4 text-text  whitespace-nowrap text-xs sm:text-sm">
            <li onClick={()=> categoryHander('all')} className={`${activebtn === 'all' ? 'blog-active-btn':''} px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>All</li>
            <li onClick={()=> categoryHander('Design System')} className={`${activebtn === 'Career & Growth' ? 'blog-active-btn':''} px-6 sm:px-7 py-2 sm:py-33 cursor-pointer`}>Career & Growth</li>
            <li onClick={()=> categoryHander('Process')} className={`${activebtn === 'Process' ? 'blog-active-btn':''} px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>Process</li>
            <li onClick={()=> categoryHander('Product')}className={`${activebtn === 'Product' ? 'blog-active-btn':''} px-6 sm:px-7 py-2 sm:py-3 cursor-pointer`}>Product</li>
            <li onClick={()=> categoryHander('Design System')} className={`${activebtn === 'Design System' ? 'blog-active-btn':''} px-6 sm:px-7 py-2 sm:py-33 cursor-pointer`}>Design System</li>
        </ul>
    </div>
</div>

{/* <!-- filter on click  --> */}
{
    
    <div className={`${showingFilter ? 'max-h-[380px] visible' :  'max-h-0 invisible'} transition-all duration-700 overflow-hidden pb-4`}
    >
    <div className="mt-7 flex flex-col md:flex-row md:flex-wrap items-end gap-x-10 2xl:gap-x-6 gap-y-4 md:justify-center">
        <div className="flex flex-col gap-y-2 w-full md:w-fit">
            <label className="text-sm md:text-base" htmlFor="author_tag">Search By Tag,Topic or Author</label>
            <input className="w-full md:w-[480px] bg-[#F8F8F8] px-[18px] py-3 outline-none rounded-[8px] border-2 placeholder:text-text-40" type="text" placeholder="search by author, tag, blog"/>
        </div>

        <div className="flex flex-col gap-y-2 w-full md:w-fit">
            <label className="text-sm md:text-base" htmlFor="author_tag">Timeframe</label>
            <input className="w-full md:w-[480px] bg-[#F8F8F8] px-[18px] py-3 outline-none rounded-[8px] border-2 placeholder:text-text-40" type="text" placeholder="Timeframe"/>
        </div>

        <div className="flex flex-col gap-y-2 w-full md:w-fit">
            <label className="text-sm md:text-base" htmlFor="author_tag">Time</label>
            <div className="relative">
                
                <input id="flatpickr" className="w-full md:w-[480px] bg-[#F8F8F8] px-[18px] py-3 outline-none rounded-[8px] border-2 placeholder:text-text-40" type="date" placeholder="All Time"/>
            </div>
        </div>

       <div className="w-full 2xl:w-fit flex justify-center mt-4 2xl:mt-0">
            <button className="w-[283px] py-[13.5px] bg-text-10 rounded-[5px] text-text-40">Clear</button>
       </div>
    </div>
</div>
}

<div className="mt-6 ">
<ResponsiveMasonry
    columnscountBreakPoints={{350: 1, 550:2, 900: 3, 1200:4}}
>
    <Masonry> 
        {
            currentItems?.map((post,i) =>
                <motion.div key={post.id} className="items Product m-[10px]"
                initial = {{opacity: 0, translateX: -50, translateY: -50}}
                animate = {{opacity: 1, translateX: 0, translateY:0}}
                transition = {{duration: 0.4, delay : i * 0.2}}
                >
                    <Link href={`/blogdetails/${post.id}`}>
                        <div className="border rounded-[10px] h-fit">
                            <Image className="w-full rounded-t-[10px]" src={require(`../public/assests/All-blog/${post?.img}.webp`)} alt=""/>
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
    <div className="paginnation mt-12">
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
            pageClassName="page"
            activeClassName="active-page"
            previousClassName="previous-btn"
            nextClassName="next-btn"
        />
    </div>
</ResponsiveMasonry>
</div>
</div>
    </div>
  )
}

export default Allpost