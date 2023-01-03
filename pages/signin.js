import Link from "next/link"

function signin() {
  return (
    <div className=''>
    <div className="h-screen sign-in-up">
     <div className="flex justify-center py-[80px] sm:py-[160px] h-full w-full ">
        <div className="w-[450px] mx-4 sm:mx-0 py-6 sm:py-8 px-4 sm:px-6 bg-white rounded-[10px] form-container h-fit">
            <h2 className="text-lg leading-[23px] sm:text-[32px] font-bold sm:leading-[40px]">Sign in with you email</h2>
            <p className="mt-4 text-text-60 text-sm sm:text-base leading-[17px] sm:leading-[20px]">Already have and account? <span className="text-primary/90"><Link href="/signup">Sign up</Link></span></p>

            <form className="mt-10" action="">
                <div className="flex flex-col gap-y-2">
                    <label className="text-sm sm:text-base text-text leading-[17px] sm:leading-[21px]" htmlFor="email">Email</label>
                    <input id="email" className="text-sm outline-none border-2 border-text-10 px-5 sm:px-7 py-2 sm:py-3 rounded-[10px] placeholder:text-sm placeholder:leading-[17px]" type="text" placeholder="Email"/>
                </div>
                <div className="flex flex-col gap-y-2 mt-6">
                    <label className="text-sm sm:text-base text-text leading:[18px] sm:leading-[21px]" htmlFor="passwprd">Password</label>
                    <div className="w-full relative">
                        <input id="passwprd" className="text-sm w-full outline-none border-2 border-text-10 px-5 sm:px-7 py-2 sm:py-3 rounded-[10px] placeholder:text-sm placeholder:leading-[17px]" type="text" placeholder="Password"/>

                        <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                <path d="M4.5 4.25L19.5 20.75" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.5215 15.2751C13.8333 15.9055 12.9329 16.2536 11.9996 16.2501C11.2427 16.25 10.5036 16.0209 9.87935 15.5929C9.25512 15.1649 8.77502 14.558 8.50216 13.852C8.2293 13.146 8.17646 12.374 8.35058 11.6374C8.5247 10.9008 8.91764 10.2342 9.47773 9.7251" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.9375 6.93115C3.1125 8.8624 1.5 12.4999 1.5 12.4999C1.5 12.4999 4.5 19.2499 12 19.2499C13.7574 19.2642 15.4929 18.8593 17.0625 18.0687" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M19.5555 16.3531C21.5992 14.525 22.4992 12.5 22.4992 12.5C22.4992 12.5 19.4992 5.75002 11.9992 5.75002C11.349 5.74874 10.6999 5.80205 10.0586 5.9094" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.7031 8.81543C13.5006 8.96653 14.2273 9.37293 14.7735 9.97329C15.3198 10.5736 15.6559 11.3354 15.7313 12.1436" stroke="#060B25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="mt-7 flex justify-center">
                    <Link  href='/auhtorprofile' className="px-6 py-3 text-sm bg-primary text-white rounded-[8px] font-bold">Sign In</Link>
                </div>

            </form>
        </div>
    </div>
</div>
</div>
  )
}

export default signin