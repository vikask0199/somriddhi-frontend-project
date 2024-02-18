import { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <div className='flex items-center justify-center z-50 md:px-14 sm:px-3  bg-black text-white md:sticky top-0 left-0'>
      <div className='flex items-center justify-between w-full md:w-auto  px-6 py-4'>
        <div className="gap-1 text-white flex items-center md:hidden">
          <img className="h-10" src={logo} alt="" />
          <div>
            <p className="font-bold">SOMRIDDHI</p>
            <p className="font-semibold text-xs">DIGITAL Pvt. Ltd.</p>
          </div>
        </div>
        <div className='text-4xl flex items-center justify-center md:hidden' onClick={() => setOpen(!open)}>
          <button onClick={() => setOpen(!open)}>{open ? (<MdClose />) : (<MdMenu />)}</button>
        </div>
      </div>
      <ul className='md:flex hidden items-center lg:gap-8 h-16 gap-5'>
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 0 ? 'border-b-4 border-red-600 text-red-600' : ''}`}>
          <div className='' onClick={() => setActiveLink(0)} to="/">
            Home
          </div>
        </li>
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 1 ? 'border-b-4 border-red-600 text-red-600' : ''}`}>
          <div className='' onClick={() => setActiveLink(1)} to="/about-us">
            About
          </div>
        </li>
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 2 ? 'border-b-4 border-red-600 text-red-600' : ''}`}>
          <div className='' onClick={() => setActiveLink(2)} to="/our-blogs">
            Blogs
          </div>
        </li>
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 3 ? 'border-b-4 border-red-600 text-red-600' : ''}`}>
          <div className='' onClick={() => setActiveLink(3)} to="/our-services">
            Services
          </div>
        </li>
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 4 ? 'border-b-4 border-red-600 text-red-600' : ''}`}>
          <div className='' onClick={() => setActiveLink(4)} to="/contact-us">
            Contact Us
          </div>
        </li>
      </ul>


      {/* mobile view */}
      <ul className={`md:hidden z-40 absolute bg-black h-full w-screen bottom-0 top-16 pt-5 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
        <li onClick={() => {setOpen(!open), setActiveLink(0)}}>
          <div className={`px-0 my-5 py-3 inline-block w-full ${activeLink === 0 ? 'border-b-2 border-red-700 text-red-700' : ''}`} to="/" onClick={() => setActiveLink(1)}>
            Home
          </div>
        </li>
        <li onClick={() => {setOpen(!open), setActiveLink(1)}}>
          <div className={`px-0 my-5 py-3 inline-block w-full ${activeLink === 1 ? 'border-b-2 border-red-700 text-red-700' : ''}`} to="/about-us" onClick={() => setActiveLink(1)}>
            About
          </div>
        </li>
        <li onClick={() => {setOpen(!open), setActiveLink(2)}}>
          <div className={`px-0 my-5 py-3 inline-block w-full ${activeLink === 2 ? 'border-b-2 border-red-700 text-red-700' : ''}`} to="/our-blogs" onClick={() => setActiveLink(1)}>
            Blogs
          </div>
        </li>
        <li onClick={() => {setOpen(!open), setActiveLink(3)}}>
          <div className={`px-0 my-5 py-3 inline-block w-full ${activeLink === 3 ? 'border-b-2 border-red-700 text-red-700' : ''}`} to="/our-services" onClick={() => setActiveLink(1)}>
            Services
          </div>
        </li>
        <li onClick={() => {setOpen(!open), setActiveLink(4)}}>
          <div className={`px-0 my-5 py-3 inline-block w-full ${activeLink === 4 ? 'border-b-2 border-red-700 text-red-700' : ''}`} to="/contact-us" onClick={() => setActiveLink(1)}>
            Contact Us
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar