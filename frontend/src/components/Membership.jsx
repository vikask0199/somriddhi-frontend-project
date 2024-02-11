import { useState } from "react";
import MemberSlider from "./slider/MemberSlider";

const Membership = () => {
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="px-5 md:px-28 py-8 gap-y-5  flex flex-col bg-[#f8f8f8]">
            <ul className="flex items-center justify-center bg-[#F8F8F8] py-1 px-2">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`tab-item w-28 text-center cursor-pointer  ${activeTab === index ? 'bg-white rounded-lg py-1' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            {activeTab === 0 ? <MemberSlider /> : (activeTab === 1 ? <MemberSlider /> : <MemberSlider />)}
        </div>
    )
}

export default Membership