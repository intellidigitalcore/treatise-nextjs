import Link from 'next/link'

function Subscribe() {
  return (
    <div className="subscribe mt-10">
            <div className="px-4 lg:px-[150px] 2xl:px-[15%] py-[80px]">
                <div className="flex flex-col lg:flex-row items-center gap-[80px] gap-x-[100px] xl:gap-x-[198px]">
                    <div className="w-full lg:w-[718px] text-white">
                        <h2 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[32px] xl:text-[48px] leading-[150%] font-bold text-center lg:text-left">Subscribe to see what we&apos;re thinking</h2>
                        <p className="mt-6 sm:mt-4 text-base sm:text-xl leading-[30px] text-center lg:text-left">Start your day with treatise</p>
                    </div>
                    <div className="">
                        <Link href="/subscribe-membership"><button className="px-[80px] sm:px-[100px] py-[13px] bg-white text-text rounded-[10px] whitespace-nowrap text-sm ">Become a Member</button></Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Subscribe