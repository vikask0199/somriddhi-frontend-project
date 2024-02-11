import logo from "../assets/logo.png";
import { IoMdArrowDropright } from "react-icons/io";


const Footer = () => {
  return (
    <div className="bg-[#091431] px-5 md:px-28 py-8">
      <div className="flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-3">
          <div className="gap-1 text-white flex items-center">
            <img className="h-14" src={logo} alt="" />
            <div>
              <p className="font-bold">SOMRIDDHI</p>
              <p className="font-semibold text-xs">DIGITAL Pvt. Ltd.</p>
            </div>
          </div>
          <p className="text-white w-60">
            Lorem Ipsum is simply dummy of the printing and type setting.
          </p>
          <div className="bg-white rounded-lg flex items-center justify-center gap-1 border w-36 h-16">
            <img className="h-10" src="https://s3-alpha-sig.figma.com/img/bb3d/b068/96379acc362b9f57c3759a92a40bc545?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8jOWAI6j12~Beii14Tc2x3z6BXbPeuT4qp8SlDFdhZH3i9toCZQ0HHT9lYZb7sjWMbAuYkS~RXy9QaQ7bFymW5nqGdPT8fHwRRXlDclb75hpJcn9T0t1uL7mAoOGbSoKaOh36ypomnZfM49zcMbr9QLL81PLkxwL~U4aXFPsAwShYgviTPgS6uIl8E~RF8XsHsaEUTWS03g2J8U-sCWsX4EJDai136DLaLR3JLIbiiYyQIlznK9kIS5xp55fbv3Fg53ATr0kk0aGpRQb12ZrKWjUbIOaaMI1K1trzpZV27kSt6DSbRH5YfJdqqB3~DBEZB--V5YQBmrq4A0C6Oa1Q__" alt="" />
            <div>
              <p className="text-xs text-[#747577]">Download From</p>
              <p className="font-bold text-">App Store</p>
            </div>
          </div>
          <div className="bg-white rounded-lg flex items-center justify-center gap-1 border w-36 h-16">
            <img className="h-10" src="https://s3-alpha-sig.figma.com/img/abcf/3f86/390660e5e1346a50c7b797d3d57f072f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JvbUo1l~Zk2Wvjo-Q3ex7Nn5Tzl7CSAr~NTA7X~WW3neoWeQS7H9MqtGc3RxvbGRWlPlSTFy3k39Kyy4pt1pMmIaY6ZbZX5L-2Qmu-QJ6fPkQHaREZVIspUKi5MKllKv8u4BKMq7HVI8bSrMkOBwZU9fsaysjqnZO4d09spqb7DkUKZUTxQFxLDOlDA8i6Is-SnCwSxj2-deFbRaWrcPJ6AvMDop0pBC4U0ODdnqfqgSpAZxn0IOaCMrg9IBUuhvJpten6V~dDNC9useMAfau16lSODlfrEd-J-VkCCIYcxawybtGlZo-LQcCr9F82zSlD4ojrfZ7Z5bjeS41LzORw__" alt="" />
            <div>
              <p className="text-xs text-[#747577]">Download From</p>
              <p className="font-bold text-">App Store</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-[#F01C21]">COMPANY</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              About Us
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Privacy Policy
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Terms
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Blogs
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Branding
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Career
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-[#F01C21]">GENERAL</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Partner With us
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Write to us
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Mobile App
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Site map
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-[#F01C21]">PAGES</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Amazon Offer
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Google Pay Offers
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              PayPal Offers
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              PhonePe Offers
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Festival Offers
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Bank Offers
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-[#F01C21]">MORE</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              City Offers
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Brand Offers
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Product Deals
            </li>
            <li className="flex items-center gap-1">
              <IoMdArrowDropright />
              Gift Cards
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer