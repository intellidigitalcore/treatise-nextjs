import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AuthorTagsearch } from "../../components/blogDetails/AuthorTagsearch";
import { BlogContent } from "../../components/blogDetails/BlogContent";
import { MorePosts } from "../../components/blogDetails/MorePosts";

function blogdetails() {

    const router = useRouter();

    const id = router.query.blogId
    const [allStories, setAllStories] = useState([]);

    useEffect(()=>{
        fetch("../data/home/bestStories.json")
        .then(res => res.json())
        .then(data => setAllStories(data))
    },[])
    const post = allStories.find(story => story.id === id)

  return (
    <div className='mt-[120px]'>

        <div className="blog mx-[5%] md:mx-[9.47%] xl:mx-[8%] 2xl:[9.47%] mt-6 sm:mt-10 flex flex-col md:flex-row justify-between">

            {/* <!-- blog-details left-side  --> */}
            <div className="w-full md:w-[67%] max-h-[840px] overflow-y-auto scroll-bar">
                {post && <BlogContent post={post}></BlogContent>}
            </div>

             {/* <!-- blog-details right-side  --> */}
            <div className="w-full md:w-[30%] mt-8 md:mt-0">
                {post &&  <AuthorTagsearch author={post.writterName}></AuthorTagsearch>}
               
            </div>
        </div>

        {/* <!-- more blogs  --> */}
        <div className="more-blogs mx-6 mt-12 mb-7">
            <h2 className="text-[24px] leading-[150%] text-primary">Never miss any articels</h2>
            {post && <MorePosts allStories={allStories}></MorePosts>}
        </div>
    </div>
  )
}

export default blogdetails