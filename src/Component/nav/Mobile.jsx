//new code with added dropdown
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import simplifyingLogo from "../../images/simplifyinglogo.png";

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [clubsOpen, setClubsOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const closeAllNav = () => {
    setMenuOpen(false)
    setAcademyOpen(false)
    setAssessmentOpen(false)
    setClubsOpen(false)
    setCommunityOpen(false)
    setSearchOpen(false)
    setSearchOpen("")
  }

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center">
          <Link to="/"><img src={simplifyingLogo} alt="simplifying skills" className="h-10 w-auto mr-3" /></Link>
        </div>

        {/* Search, Menu & Login Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-white text-lg" onClick={() => setSearchOpen(!searchOpen)}>
            <FaSearch />
          </button>
          <a href="/login" className="text-white bg-blue-900 px-3 py-1 rounded-md hover:bg-red-600 flex items-center">
            <FaUser className="mr-2" /> Login
          </a>
          <button className="text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="mt-2 flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-l-md text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-white text-blue-600 px-4 py-2 rounded-r-md">
            <FaSearch />
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-blue-700 py-2 mt-2 rounded-lg">
          <div className="px-4">
            <button className="text-white block w-full text-left py-2" onClick={() => setAcademyOpen(x => !x)}>
              Academy ▼
            </button>
            {academyOpen && (
              <ul className="bg-blue-800">
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">For Schools</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">For Colleges</li>
              </ul>
            )}
          </div>

          <div className="px-4">
            <button className="text-white block w-full text-left py-2" onClick={() => setAssessmentOpen(x => !x)}>
              Assessment Center ▼
            </button>
            {assessmentOpen && (
              <ul className="bg-blue-800">
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">
                  <Link to="/skillsphere-assessment" onClick={closeAllNav}>Skillsphere Assessment</Link>
                </li>
              </ul>
            )}
          </div>

          <div className="px-4">
            <button className="text-white block w-full text-left py-2" onClick={() => setClubsOpen(x => !x)}>
              Clubs ▼
            </button>
            {clubsOpen && (
              <ul className="bg-blue-800">
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Entrepreneurship League</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Artistic Visionaries</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Engineering Explorers</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Business Trailblazers</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Administrative Achievers</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Medical Mavericks</li>
              </ul>
            )}
          </div>

          <div className="px-4">
            <button className="text-white block w-full text-left py-2" onClick={() => setCommunityOpen(x => !x)}>
              Community ▼
            </button>
            {communityOpen && (
              <ul className="bg-blue-800">
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Parents</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Students</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">School</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Colleges</li>
                <li className="px-4 py-2 text-white hover:bg-gray-200 cursor-pointer">Educators</li>
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Mobile;
