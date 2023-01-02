function subscribemember() {
  return (
    <div className="h-screen sign-in-up">
       <div className="flex justify-center py-[80px] sm:py-[160px] h-full w-full ">
            <div className="max-w-[450px] mx-4 sm:mx-0 py-6 sm:py-8 px-4 sm:px-6 bg-white rounded-[10px] h-fit form-container">
                <h2 className="text-lg leading-[23px] sm:text-[32px] font-bold sm:leading-[40px]">Membership Subscribe </h2>

                <form className="mt-10" action="">
                    <div className="flex flex-col gap-y-2">
                        <label className="text-sm sm:text-base text-text leading-[17px] sm:leading-[21px]" htmlFor="name">Name</label>
                        <input id="name" className="text-sm outline-none border-2 border-text-10 px-5 sm:px-7 py-2 sm:py-3 rounded-[10px] placeholder:text-sm placeholder:leading-[17px]" type="text" placeholder="Email"/>
                    </div>

                    <div className="flex flex-col gap-y-2 mt-6">
                        <label className="text-sm sm:text-base text-text leading-[17px] sm:leading-[21px]" htmlFor="">Email</label>
                        <input className="text-sm outline-none border-2 border-text-10 px-5 sm:px-7 py-2 sm:py-3 rounded-[10px] placeholder:text-sm placeholder:leading-[17px]" type="text" placeholder="Email"/>
                    </div>
                    <div className="mt-7 flex justify-center">
                        <button className="px-6 py-3 text-sm bg-primary text-white rounded-[8px] font-bold">Continue</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default subscribemember