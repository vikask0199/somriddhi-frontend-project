import member from "../assets/member.png"
import PupularMembe from "./slider/PupularMembe"

const PopularMemb = () => {
    return (
        <div className="px-5 md:px-28 py-8 flex flex-col gap-5 overflow-hidden">
            <div className="flex items-center justify-center">
                <img className="rounded-xl" src={member} alt="" />
            </div>
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-4xl font-bold text-center">Popular Membership</h1>
                <p className="border-2 border-red-600 w-36"></p>
            </div>
            <PupularMembe />
        </div>
    )
}

export default PopularMemb