import React from "react";
import simplifyingLogo from "../../images/simplifyinglogo.png";
import image46 from "../../images/refer-icon.svg";
import { Link } from "react-router-dom";

const Desktop = () => {
  return (
    <nav className="bg-blue-600 shadow-md flex items-center pt-2 relative">
      {/* Dark Blue Ribbon */}
      <div className="h-4 bg-blue-950 absolute top-0 left-0 w-5/6 -z-0 rounded-br-3xl"></div>

      {/* Logo */}
      <Link to="/">
        <div className="flex items-center h-full z-10 bg-white rounded-tr-3xl overflow-hidden">
          <img src={simplifyingLogo} alt="Logo" className="h-full w-52" />
        </div>
      </Link>
      {/* Desktop Menu */}
      <div className="flex-1 flex mx-6">
        {/* Academy */}
        <div className="relative group mx-6">
          <button className="text-white hover:text-gray-300 text-sm">ACADEMY ▼</button>
          <div className="absolute hidden group-hover:block bg-blue-600 text-white shadow-md rounded-md w-40 z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">For Schools</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">For Colleges</li>
            </ul>
          </div>
        </div>

        {/* Assessment Center */}
        <div className="relative group mx-6">
          <button className="text-white hover:text-gray-300 text-sm">ASSESSMENT CENTER ▼</button>
          <div className="absolute hidden group-hover:block bg-blue-600 text-white shadow-md rounded-md w-48 z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black" >
                <Link to="/skillsphere-assessment">Skillsphere Assessment</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clubs */}
        <div className="relative group mx-6">
          <button className="text-white hover:text-gray-300 text-sm">CLUBS ▼</button>
          <div className="absolute hidden group-hover:block bg-blue-600 text-white shadow-md rounded-md w-56 z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Entrepreneurship League</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Artistic Visionaries</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Engineering Explorers</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Business Trailblazers</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Administrative Achievers</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Medical Mavericks</li>
            </ul>
          </div>
        </div>

        {/* Community */}
        <div className="relative group mx-6">
          <button className="text-white hover:text-gray-300 text-sm">COMMUNITY ▼</button>
          <div className="absolute hidden group-hover:block bg-blue-600 text-white shadow-md rounded-md w-40 z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Parents</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Students</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">School</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Colleges</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-black">Educators</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Search & Login Button */}
      <div className="flex items-center gap-x-3">
        <img src={image46} alt="Search Icon" className="h-10 w-auto" />
        <input
          type="text"
          placeholder="Search For Course..."
          className="px-3 py-1 text-sm h-8"
        />
        <button className="bg-blue-900 text-white px-5 py-2 rounded-md font-bold mr-2">LOGIN</button>
      </div>
    </nav>
  );
};

export default Desktop;

