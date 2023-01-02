import Image from "next/image"

export const MorePosts = ({allStories}) => {
    const limitBlog = allStories.splice(0,4)
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-5">
    {
        limitBlog?.map(blog =>
            <div key={blog.id} className="border rounded-[10px] "> 
                <Image className="w-full rounded-t-[10px]" src={require(`../../public/assests/home/best-stories/${blog.img}.webp`)} alt="" srcSet=""/>
                <div className="p-4">
                    <p className="flex gap-x-2 text-xs sm:text-sm">
                        <span className="text-primary">#Career & Growth</span>
                        <span className="text-text">|</span>
                        <span className="text-text-60">22 June, 2022</span>
                    </p>
                    <p className="text-base sm:text-[18px] text-text font-bold mt-4">10 things nobody told your about Being a web designer!</p>
                    <p className="flex justify-between text-xs sm:text-sm mt-4">
                        <span className="text-text">by James Frankline</span>
                        <span className="text-text-60">5 mins to read</span>
                    </p>
                </div>
            </div>    
        )
    }
  
</div>
  )
}
