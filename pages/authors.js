import AuthorPost from "../components/author/AuthorPost"
import useTitleHook from "../components/customHook/useTitleHook"
import Subscribe from "../components/home/Subscribe"

function Author() {

  useTitleHook('Authors')
  
  return (
    <div className='mt-20 sm:mt-32'>
        <AuthorPost></AuthorPost>
        <Subscribe></Subscribe>
    </div>
  )
}

export default Author