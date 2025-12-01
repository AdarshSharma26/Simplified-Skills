import React from "react";
import experimentallearning from "../../../images/experimentallearning.png";
import fellowshipgrant from "../../../images/fellowshipgrant.png";
import globalexposure from "../../../images/globalexposure.png";
import careernavigator from "../../../images/careernavigator.png";
import Heading from "../../common/heading";
import advantagesSide from "../../../images/advantages-side.svg"

const advantages = [
  {
    title: "Experiential Learning",
    icon: experimentallearning, // Fixed filename format
    //description: "Hands-on learning for real-world skills.",
  },
  {
    title: "Fellowship Grant",
    icon: fellowshipgrant, // Fixed filename format
    //description: "Financial support for promising students.",
  },
  {
    title: "Global Exposure",
    icon: globalexposure, // Fixed filename format
    //description: "Opportunities to study and work abroad.",
  },
  {
    title: "Career Navigator",
    icon: careernavigator, //fixed fikeame format
    //description: "Guidance to help you shape your career path.",
  },
];

const AdvantagesSection = () => {
  return (
    <div className="py-16 px-6 text-center relative">
      <Heading text1="OUR" text2="ADVANTAGES" />

      <img src={advantagesSide} alt="side" className="hidden md:block absolute top-10 w-40" />

      {/* Flex container for inline layout */}
      <div className="mt-10 flex flex-col lg:flex-row items-center flex-wrap justify-center gap-0 lg:gap-6 max-w-4xl mx-auto">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-0 w-64 lg:flex-1"
          >
            {/* Icon Image */}
            <img
              src={advantage.icon}
              alt={advantage.title}
              className="flex-1 h-40 mb-4 object-contain"
            />

            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-gray-800">
              {advantage.title.split(" ")[0]}
            </h3>
            <h3 className="text-lg font-semibold text-gray-800">
              {advantage.title.split(" ")[1]}
            </h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesSection;


//  temporary code for images
// import React from "react";
// import { FaBookOpen, FaHandHoldingUsd, FaGlobe, FaCompass } from "react-icons/fa"; // Importing icons

// const advantages = [
//   {
//     title: "Experiential Learning",
//     icon: <FaBookOpen />,
//     description: "Hands-on learning for real-world skills.",
//   },
//   {
//     title: "Fellowship Grant",
//     icon: <FaHandHoldingUsd />,
//     description: "Financial support for promising students.",
//   },
//   {
//     title: "Global Exposure",
//     icon: <FaGlobe />,
//     description: "Opportunities to study and work abroad.",
//   },
//   {
//     title: "Career Navigator",
//     icon: <FaCompass />,
//     description: "Guidance to help you shape your career path.",
//   },
// ];

// const AdvantagesSection = () => {
//   return (
//     <div className="py-16 px-6 bg-gray-100 text-center">
//       <h2 className="text-4xl font-bold text-gray-900">
//         OUR <span className="text-orange-600">ADVANTAGES</span>
//       </h2>

//       {/* Flex container for inline layout */}
//       <div className="mt-10 flex flex-wrap justify-center gap-6 lg:gap-10 max-w-4xl mx-auto">
//         {advantages.map((advantage, index) => (
//           <div 
//             key={index} 
//             className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-64 lg:flex-1"
//           >
//             {/* Icon */}
//             <div className="text-blue-600 text-4xl">{advantage.icon}</div>
//             {/* Title & Description */}
//             <h3 className="mt-4 text-lg font-semibold text-gray-800">{advantage.title}</h3>
//             <p className="text-sm text-gray-600 mt-2 text-center">{advantage.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdvantagesSection;
