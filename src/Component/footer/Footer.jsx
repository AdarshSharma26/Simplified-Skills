// import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-gray-800 text-sm">
//       {/* Upper Section */}
//       <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 border-b pb-6">

//         {/* About Us */}
//         <div>
//           <h4 className="font-bold text-blue-700 mb-3">About Us</h4>
//           <ul className="space-y-2">
//             <li>Why us</li>
//             <li>Mission</li>
//             <li>Vision</li>
//             <li>Values</li>
//             <li>What we do</li>
//             <li>Team</li>
//             <li>Careers</li>
//           </ul>
//         </div>

//         {/* Research */}
//         <div>
//           <h4 className="font-bold text-blue-700 mb-3">Research</h4>
//           <ul className="space-y-2">
//             <li>NEP</li>
//             <li>Global Exposure</li>
//             <li>Fellowship</li>
//             <li>STEM</li>
//             <li>DAT</li>
//             <li>OCEAN</li>
//             <li>RIABEC</li>
//             <li>CORE</li>
//           </ul>
//         </div>

//         {/* Other Links */}
//         <div>
//           <h4 className="font-bold text-blue-700 mb-3">Other’s</h4>
//           <ul className="space-y-2">
//             <li>Blogs</li>
//             <li>FAQs</li>
//             <li>Terms & Conditions</li>
//             <li>Privacy Policy</li>
//             <li>Refund Policy</li>
//             <li>Gallery</li>
//           </ul>
//         </div>

//         {/* Clubs */}
//         <div>
//           <h4 className="font-bold text-blue-700 mb-3">Clubs</h4>
//           <ul className="space-y-2">
//             <li>Entrepreneurship League</li>
//             <li>Engineering Explorers</li>
//             <li>Medical Mavericks</li>
//             <li>Artistic Visionaries</li>
//             <li>Business Trailblazers</li>
//             <li>Administrative Achievers</li>
//           </ul>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">

//         {/* Logo & Newsletter */}
//         <div>
//           <h3 className="font-bold text-lg text-blue-700">SIMPLIFYING SKILLS</h3>
//           <p className="text-gray-500">TRANSFORMING EDUCATION</p>
//           <p className="mt-2 text-gray-700 font-semibold">Subscribe Our Newsletter for Latest Updates</p>
//         </div>

//         {/* Social Media */}
//         <div className="flex items-center space-x-4 mt-4 md:mt-0">
//           <span className="font-bold">FOLLOW US ON:</span>
//           <a href="#" className="text-red-600 text-xl"><FaYoutube /></a>
//           <a href="#" className="text-blue-600 text-xl"><FaFacebookF /></a>
//           <a href="#" className="text-pink-500 text-xl"><FaInstagram /></a>
//           <a href="#" className="text-blue-500 text-xl"><FaLinkedinIn /></a>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-gray-900 text-white text-center py-3 text-xs">
//         <p>Privacy Policy | Terms of Use</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 text-sm">
      {/* Upper Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6 border-b pb-6 text-center lg:text-left">

        {/* About Us */}
        <div>
          <h4 className="font-bold text-blue-700 mb-3">About Us</h4>
          <ul className="space-y-2 text-xs">
            <li>Why us</li>
            <li>Mission</li>
            <li>Vision</li>
            <li>Values</li>
            <li>What we do</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Research */}
        <div>
          <h4 className="font-bold text-blue-700 mb-3">Research</h4>
          <ul className="space-y-2 text-xs">
            <li>NEP</li>
            <li>Global Exposure</li>
            <li>Fellowship</li>
            <li>STEM</li>
            <li>DAT</li>
            <li>OCEAN</li>
            <li>RIABEC</li>
            <li>CORE</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="font-bold text-blue-700 mb-3">Other’s</h4>
          <ul className="space-y-2 text-xs">
            <li>Blogs</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Clubs */}
        <div>
          <h4 className="font-bold text-blue-700 mb-3">Clubs</h4>
          <ul className="space-y-2 text-xs">
            <li>Entrepreneurship League</li>
            <li>Engineering Explorers</li>
            <li>Medical Mavericks</li>
            <li>Artistic Visionaries</li>
            <li>Business Trailblazers</li>
            <li>Administrative Achievers</li>
          </ul>
        </div>
      </div>

      {/* Lower Section */}
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">

        {/* Logo & Newsletter */}
        <div>
          <h3 className="font-bold text-lg text-blue-700">SIMPLIFYING SKILLS</h3>
          <p className="text-gray-500">TRANSFORMING EDUCATION</p>
          <p className="mt-2 text-gray-700 font-semibold">Subscribe Our Newsletter for Latest Updates</p>
        </div>

        {/* Social Media */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="font-bold">FOLLOW US ON:</span>
          <a href="#" className="text-red-600 text-xl"><FaYoutube /></a>
          <a href="#" className="text-blue-600 text-xl"><FaFacebookF /></a>
          <a href="#" className="text-pink-500 text-xl"><FaInstagram /></a>
          <a href="#" className="text-blue-500 text-xl"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 text-white py-3 text-xs flex gap-x-8 justify-center">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;

