import AuthorPost from "../components/author/AuthorPost"
import Subscribe from "../components/home/Subscribe"

function author() {
  return (
    <div className='mt-20 sm:mt-32'>
        <AuthorPost></AuthorPost>
        <Subscribe></Subscribe>
    </div>
  )
}

export default author