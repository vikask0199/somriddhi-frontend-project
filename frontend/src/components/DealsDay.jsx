import DealsDaySlider from "./slider/DealsDaySlider"

const DealsDay = () => {
    return (
        <div className="px-5 md:px-28 py-8 gap-5 flex flex-col bg-[#f8f8f8] overflow-hidden">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-4xl font-bold">Deals Of The Day</h1>
                <p className="border-2 border-red-600 w-36"></p>
            </div>
            <DealsDaySlider />
        </div>
    )
}

export default DealsDay