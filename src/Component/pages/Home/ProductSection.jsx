//updated codee with the image to display
import React from "react";

// Import Images
import SkillsphereAssesment from "../../../images/SkillsphereAssessment.png";
import NextGen from "../../../images/NextGen.png";
import GlobalEng from "../../../images/GlobalEng.png";
import NextGenJunior from "../../../images/NextGenJunior.png";

import productBannerSide from "../../../images/home-products-side.png"

import Heading from "../../common/heading"

const products = [
  {
    title: "Next-Gen Innovators",
    image: NextGen,
    area: "left",
    link: "#"
  },
  {
    title: "SkillSphere Assessment",
    image: SkillsphereAssesment,
    area: "top",
    link: "skillsphere-assessment"
  },
  {
    title: "Global Engineering Innovators",
    image: GlobalEng,
    area: "right",
    link: "#"
  },
  {
    title: "Next-Gen Juniors",
    image: NextGenJunior,
    area: "bottom",
    link: "#"
  },
];

const ProductsSection = () => {
  return (
    <div className="relative py-16 px-6 bg-gradient-to-b from-gray-100 to-gray-200 text-center">
      {/* Title */}
      <Heading text1="OUR" text2="PRODUCTS" />

      {/* blue background on right */}
      <img src={productBannerSide} alt="side" className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-20" />

      {/* Decorative Dots */}
      <div className={"absolute left-1/4 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-8 lg:-translate-y-0 translate-x-0"}></div>
      <div className={"absolute left-1/4 translate-x-20 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-8 lg:-translate-y-0"}></div>
      <div className={"absolute left-1/3 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-8 lg:-translate-y-0 translate-x-8"}></div>
      <div className={"absolute left-1/3 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-8 lg:-translate-y-0 translate-x-12"}></div>

      <div className={"absolute left-1/4 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-12 lg:-translate-y-4 translate-x-0"}></div>
      <div className={"absolute left-1/4 translate-x-20 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-12 lg:-translate-y-4"}></div>
      <div className={"absolute left-1/3 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-12 lg:-translate-y-4 translate-x-8"}></div>
      <div className={"absolute left-1/3 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-12 lg:-translate-y-4 translate-x-12"}></div>

      <div className={"absolute left-1/4 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-16 lg:-translate-y-8 translate-x-0"}></div>
      <div className={"absolute left-1/4 translate-x-20 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-16 lg:-translate-y-8"}></div>
      <div className={"absolute left-1/3 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-16 lg:-translate-y-8 translate-x-8"}></div>
      <div className={"absolute left-1/3 top-40 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "-translate-y-16 lg:-translate-y-8 translate-x-12"}></div>

      <div className={"absolute right-1/4 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-0 translate-x-0"}></div>
      <div className={"absolute right-1/4 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-0 translate-x-20"}></div>
      <div className={"absolute right-1/3 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-0 translate-x-8"}></div>
      <div className={"absolute right-1/3 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-0 translate-x-12"}></div>

      <div className={"absolute right-1/4 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-4 translate-x-0"}></div>
      <div className={"absolute right-1/4 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-4 translate-x-20"}></div>
      <div className={"absolute right-1/3 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-4 translate-x-8"}></div>
      <div className={"absolute right-1/3 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-4 translate-x-12"}></div>

      <div className={"absolute right-1/4 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-8 translate-x-0"}></div>
      <div className={"absolute right-1/4 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-8 translate-x-20"}></div>
      <div className={"absolute right-1/3 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-8 translate-x-8"}></div>
      <div className={"absolute right-1/3 bottom-20 flex space-x-2 w-2 h-2 bg-purple-300 rounded-full " + "translate-y-8 translate-x-12"}></div>


      {/* Grid Layout */}
      {/* grid grid-cols-1 grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 place-items-center [grid-template-areas:'top''left''right''bottom'] lg:[grid-template-areas:'._top_.''left_._right''._bottom_.'] */}
      <div className="mt-5 gap-4 grid grid-cols-1 lg:grid-cols-[repeat(3,_1fr)] place-items-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  return (
    <div className={"w-60 h-60 bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-2xl transition duration-300 " + (index === 0 || index === 2 ? "lg:translate-y-1/2" : "") + " " + (index === 3 ? "lg:col-start-2 mt-4" : "") + " " + (index === 0 && "justify-self-end") + " " + (index === 2 && "justify-self-start")}>
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-12 h-12 mx-auto flex items-center justify-center text-white text-2xl"
      // w-full h-auto rounded-lg
      />

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{product.title.split(" ").slice(0, -1).join(" ")}</h3>
      <h3 className="text-xl font-semibold text-gray-800">{product.title.split(" ").pop()}</h3>

      {/* Read More */}
      <a href={product.link} className="mt-2 text-blue-600 text-sm font-medium block underline underline-offset-2">
        Read More
      </a>
    </div>
  );
};

export default ProductsSection;