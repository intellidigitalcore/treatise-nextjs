import Card from "../components/membership/Card"
import FAQ from "../components/membership/FAQ"
import Table from "../components/membership/Table"

function membership() {
  return (
    <div className='mt-28 sm:mt-32 mb-10'>
        <div className="membership-plan mx-6 hidden 2xl:block">
            <h2 className="sm:base sm:text-[24px] md:text-[32px] font-bold leading-[150%] text-primary text-center md:text-left">Membership</h2>
            <p className="mt-2 sm:mt-4 text-primary-60 text-base leading-[150%] text-center md:text-left">Pick a plan based on your needs</p>
            <div className="overflow-x-auto w-full mt-6 md:mt-0">
              <Table></Table>
            </div>
        </div>

        <div className="mx-4 block 2xl:hidden">
            <h2 className="sm:base sm:text-[24px] md:text-[32px] font-bold leading-[150%] text-primary text-center md:text-left">Membership</h2>
            <p className="mt-2 sm:mt-4 text-primary-60 text-base leading-[150%] text-center md:text-left">Pick a plan based on your needs</p>
            <div className="">
              <Card></Card>
            </div>
        </div>

        <div className="membership-plan mx-4 sm:mx-6 mt-14 sm:mt-20">
            <h2 className="sm:base sm:text-[24px] md:text-[32px] font-bold leading-[150%] text-primary text-center md:text-left">Frequently asked questions</h2>
            <p className="mt-2 sm:mt-4 text-primary-60 text-sm sm:text-base leading-[24px] text-center md:text-left">Some random queries about treaties</p>
            <div className="flex justify-center">
              <div className="mt-8 sm:mt-20 w-[912px]">
                <FAQ></FAQ>
              </div>
            </div>
        </div>
    </div>
  )
}

export default membership