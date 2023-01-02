import Image from "next/image"

export const BlogContent = ({post}) => {
  return (
    <div>
         {/* <!-- heading with creator name and date  --> */}
         <div className="">
            <p className="text-[18px] font-bold text-primary text-center md:text-left">#{post?.category}</p>
            <h3 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-bold text-primary text-center md:text-left mt-3 sm:mt-4">{post.blogTitle}</h3>
            <p className="justify-between text-sm mt-4 sm:flex hidden">
                <span className="text-primary">by {post?.writterName}</span>
                <span className="text-primary-60">{post?.date}</span>
                <span className="text-primary-60">5 mins to read</span>
            </p>
            <p className="flex flex-col justify-between text-sm mt-4 sm:hidden">
                <span className="text-primary text-center">by {post?.writterName}</span>
                <span className="flex justify-between mt-2">
                    <span className="text-primary-60">{post?.date}</span>
                    <span className="text-primary-60">{post?.postTime}</span>
                </span>
            </p>
        </div>

        {/* <!-- description area  --> */}
        <div className="mt-10">
            <Image src={require(`../../public/assests/Single-blog/${post?.titleOneImg}.webp`)} alt="" srcSet=""/>
            <div className="mt-10">
                <p className="text-base leading-6 font-bold text-primary-80 ">{post?.titleOne}</p>
                <p className="text-base leading-6 font-normal text-primary-80 mt-4">{post?.descOne}</p>
            </div>
            <div className="mt-6 sm:mt-10">
                <p className="text-base leading-6 font-bold text-primary-80 ">{post?.titleTwo}</p>
                <p className="text-base leading-6 font-normal text-primary-80 mt-4">{post?.descTwo}</p>
            </div>

            {/* <!-- quote  --> */}
            <div className="mt-6 sm:mt-10 relative ">
                <p className="text-base leading-6 font-normal text-primary-80 py-4 px-3">{post?.Quote}</p>
                <span className="absolute top-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.1">
                        <path d="M21.875 11.25V25C21.875 26.9891 22.6652 28.8968 24.0717 30.3033C25.4782 31.7098 27.3859 32.5 29.375 32.5C29.7065 32.5 30.0245 32.3683 30.2589 32.1339C30.4933 31.8995 30.625 31.5815 30.625 31.25C30.625 30.9185 30.4933 30.6005 30.2589 30.3661C30.0245 30.1317 29.7065 30 29.375 30C28.0502 29.9959 26.7808 29.4678 25.844 28.531C24.9072 27.5942 24.3791 26.3248 24.375 25V23.75H33.75C34.413 23.75 35.0489 23.4866 35.5178 23.0178C35.9866 22.5489 36.25 21.913 36.25 21.25V11.25C36.25 10.587 35.9866 9.95107 35.5178 9.48223C35.0489 9.01339 34.413 8.75 33.75 8.75H24.375C23.712 8.75 23.0761 9.01339 22.6072 9.48223C22.1384 9.95107 21.875 10.587 21.875 11.25ZM6.25 8.75H15.625C16.288 8.75 16.9239 9.01339 17.3928 9.48223C17.8616 9.95107 18.125 10.587 18.125 11.25V21.25C18.125 21.913 17.8616 22.5489 17.3928 23.0178C16.9239 23.4866 16.288 23.75 15.625 23.75H6.25V25C6.25412 26.3248 6.78223 27.5942 7.71902 28.531C8.65581 29.4678 9.92519 29.9959 11.25 30C11.5815 30 11.8995 30.1317 12.1339 30.3661C12.3683 30.6005 12.5 30.9185 12.5 31.25C12.5 31.5815 12.3683 31.8995 12.1339 32.1339C11.8995 32.3683 11.5815 32.5 11.25 32.5C9.26088 32.5 7.35322 31.7098 5.9467 30.3033C4.54018 28.8968 3.75 26.9891 3.75 25V11.25C3.75 10.587 4.01339 9.95107 4.48223 9.48223C4.95107 9.01339 5.58696 8.75 6.25 8.75V8.75Z" fill="#060B25" fillOpacity="0.4"/>
                        </g>
                    </svg>  
                </span>
            </div>

            {/* <!-- 2nd image  --> */}
            <div className="mt-6 sm:mt-10">
                <Image src={require(`../../public/assests/Single-blog/blog-image-2.webp`)} alt="" srcSet=""/>
            </div>

            {/* <!-- another description area  --> */}
            <div className="mt-6 sm:mt-10 text-primary-80 ">
                <p className="text-base leading-6 font-normal">{post?.descThree}</p>
                <ul className="list-disc mt-6 pl-4">
                    {
                        post?.descInList.map((point,i) => <li key={i}>{point}</li>)
                    }
                </ul>

                <p className="list-disc mt-6 text-base leading-6">{post?.descFour}</p>

                <p className="mt-12 text-base leading-6">{post?.descFive}</p> <br />

                <p className='text-base leading-6'>{post?.descSix}</p>
            </div>
        </div>
    </div>
  )
}
