import React from "react"
import Banner from './Banner';// Banner path to dispaly on screen
import ProductSection from "./ProductSection"; //Ensure Correct Path fot Product.
import AdvantagesSection from './AdvantageSection';// path for advantages
import SkillsSection from './SkillsSection';// import skillsection to fetch details and render on screen
import StoriesSection from './StoriesSection';
import TestimonialsSection from './TestimonialsSection';

const Home = function () {
    return (
        <>
            <Banner />
            <ProductSection />
            <AdvantagesSection />
            <SkillsSection />
            <StoriesSection />
            <TestimonialsSection />
        </>
    )
}
export default Home;