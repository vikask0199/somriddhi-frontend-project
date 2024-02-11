import { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <div className='flex items-center justify-center md:px-14 sm:px-3  bg-black text-white'>
      <div className='flex items-center justify-between w-full md:w-auto z-50 px-6 py-4'>
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
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 0 ? 'border-b-2 border-red-700 text-red-700' : ''}`}>
          <div className='' onClick={() => setActiveLink(0)} to="/">
            Home
          </div>
        </li>
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 1 ? 'border-b-2 border-red-700 text-red-700' : ''}`}>
          <div className='' onClick={() => setActiveLink(1)} to="/about-us">
            About
          </div>
        </li>
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 3 ? 'border-b-2 border-red-700 text-red-700' : ''}`}>
          <div className='' onClick={() => setActiveLink(3)} to="/our-blogs">
            Blogs
          </div>
        </li>
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 2 ? 'border-b-2 border-red-700 text-red-700' : ''}`}>
          <div className='' onClick={() => setActiveLink(2)} to="/our-services">
            Services
          </div>
        </li>
        <li className={`h-16 flex items-center cursor-pointer ${activeLink === 4 ? 'border-b-2 border-red-700 text-red-700' : ''}`}>
          <div className='' onClick={() => setActiveLink(4)} to="/contact-us">
            Contact Us
          </div>
        </li>
      </ul>


      {/* mobile view */}
      <ul className={`md:hidden z-40 absolute bg-black h-full w-full bottom-0 pt-16 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
        <li onClick={() => setOpen(!open)}>
          <div className='px-3 py-5 inline-block' to="/" onClick={() => setActiveLink(0)}>
            Home
          </div>
        </li>
        <li onClick={() => setOpen(!open)}>
          <div className='px-3 py-5 inline-block' to="/about-us" onClick={() => setActiveLink(1)}>
            About
          </div>
        </li>
        <li onClick={() => setOpen(!open)}>
          <div className='px-3 py-5 inline-block' onClick={() => setActiveLink(3)} to="/our-blogs">
            Blogs
          </div>
        </li>
        <li onClick={() => setOpen(!open)}>
          <div className='px-3 py-5 inline-block' onClick={() => setActiveLink(2)} to="/our-services">
            Services
          </div>
        </li>
        <li onClick={() => setOpen(!open)}>
          <div className='px-3 py-5 inline-block' onClick={() => setActiveLink(4)} to="/contact-us">
            Contact Us
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar