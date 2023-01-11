import Lottie from "lottie-react";
import loader from './../../public/loader/loader.json'

function Loader() {
  return (
    <div className='z-[100] h-screen w-full fixed top-0 left-0 bg-white flex justify-center items-center'>
       <div className="w-2/5">
        <Lottie animationData={loader} loop={true} />
       </div>
    </div>
  )
}

export default Loader
