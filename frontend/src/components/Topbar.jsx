import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";

const Topbar = () => {
  return (
    <div className="px-5 md:px-28 py-2 md:flex justify-between hidden">
      <div className="gap-1 text-black flex items-center">
        <img className="h-14" src={logo} alt="" />
        <div>
          <p className="font-bold">SOMRIDDHI</p>
          <p className="font-semibold text-xs">DIGITAL Pvt. Ltd.</p>
        </div>
      </div>
      <div className="border flex justify-center items-center w-1/3 bg-[#eeeeee] px-5">
        <CiSearch className="text-lg text-gray-500"/>
        <input type="text" placeholder="Search For brand, category, coupon" className="bg-transparent w-full h-full outline-none border-none indent-1"/>
      </div>
      <button className="px-8 py-1 bg-red-600 text-white rounded-lg cursor-pointer">Login / Sign Up</button>
    </div>
  )
}

export default Topbar