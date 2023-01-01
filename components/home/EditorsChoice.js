import Image from "next/image"
import Link from "next/link"
import img from "../../public/assests/home/editors-choice.webp"

function EditorsChoice() {
  return (
    <div>
        <div className="mt-20 bg-secondary md:bg-transparent pt-10 md:pt-0">
            <h2 className="ml-6 text-primary font-bold text-base sm:text-[24px] text-center sm:text-left">Editor&apos;s Choice</h2>
            <Link href="">
                <div className="mt-10 flex flex-col-reverse md:flex-row items-center sm:items-start md:items-center gap-x-6">
                    <div className="w-full md:w-2/3 lg:w-[3/4] xl:w-[1102px] md:bg-transparent lg:bg-secondary rounded-r-[10px] flex justify-end py-7 pr-3 ">
                        <div className="w-full md:w-[742px] mx-4 lg:mx-6 xl:mx-0">
                            <p className="flex gap-x-2 text-sm">
                                <span className="text-primary">#Career & Growth</span>
                                <span className="text-text">|</span>
                                <span className="text-text-60">22 June, 2022</span>
                            </p>
                            <p className="text-base sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[27px] 2xl:text-[32px] font-bold text-text mt-5 lg:mt-10 leading-[150%]">Nulla facilisi. Pellentes dui ligula, varius non dignissim id, elementum in sem. Suspendisse quis risus tincidunt.</p>
                            <p className="flex justify-between text-sm mt-5 xl:mt-[18px] 2xl:mt-5 lg:mt-10">
                                <span className="text-text">by James Frankline</span>
                                <span className="text-text-60">5 mins to read</span>
                            </p>
                        </div>
                    </div>
                    <div className="mx-4 md:w-1/3 lg:w-[1/4]  sm:mx-6 md:mx-0 ">
                        <Image className="md:w-[90%] max-w-[420px]" src={img} alt="" srcSet=""/>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default EditorsChoice