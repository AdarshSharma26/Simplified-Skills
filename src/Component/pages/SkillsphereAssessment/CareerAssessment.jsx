import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import carergirl from "../../../images/carergirl.png";
import bggirl from "../../../images/bggirl.png";
import bottombg from "../../../images/bottombg.png"; // Import background image
import bgcap from "../../../images/bgcap.png";
import AssementCoverImage from "../../../images/AssessmentCoverImg.png";
import AssessmentVector from "../../../images/AssessmentVector.png";
import AssessmentVector2 from "../../../images/AssessmentVector2.png";
import AssessmentBG from "../../../images/CareerAssessmentBG.png";
import ExposureVector from "../../../images/globalExposureImg.png";
import SkillVector from "../../../images/skillVector.png";
import "./CareerAssessment.scss";
import ModelDescription from "../../ModelDescription/ModelDescription";
import SocioImage from "../../../images/SocioEmotionalImage.png";
import PsychoImg from "../../../images/psychometricImg.png";
import AptitudeImg from "../../../images/aptitude.png";
import InterestImg from "../../../images/interestImg.png";
import AdversityImg from "../../../images/adversityImg.png";
import DetailsCard from "../../DetailsCard/DetailsCard";
import Enterprenaurshipimg from "../../../images/EnterprenaurShipImg.png";
import EngineerImg from "../../../images/EngineeringImg.png";
import MedicalImg from "../../../images/MedicalImg.png";
import AdminImg from "../../../images/AdminImg.png";
import BusinessImg from "../../../images/BusinessImg.png";
import Artistimg from "../../../images/artisticImg.png";
import GlocalExposureCoverImg from "../../../images/globalExposureCover.png";
import AssessmentScreenshot from "../../../images/assessmentScreenshot.png";
import StudentImage from "../../../images/studentImage.png";

const CareerAssessment = () => {
  const assessmentRef = useRef(null);
  const [showAssessment, setShowAssessment] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("OCEAN Model");
  const [assessmentTitle, setAssesmentTitle] = useState("Free Career Assessment");

  const freeAssessmentSelected = assessmentTitle === "Free Career Assessment";

  const scrollToAssessment = (assessmentTitle) => {
    setShowAssessment(true);
    setAssesmentTitle(assessmentTitle);
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="pb-6 relative assessment-background">
      {/* Background Image */}
      <div
        className="w-full h-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${AssementCoverImage})`,
          height: "400px",
          backgroundColor: "#24ABFF",
          borderRadius: "0 0 100px 100px",
          backgroundPosition: "center",
          backgroundSize: "800px",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "-145px",
        }}
      >
        <div className="text-center text-white font-bold text-3xl md:text-4xl p-8 bg-cover bg-center rounded-b-3xl">
          Set Your Child on the Path to <br />
          <span className="text-[#F5C25A]">Success Today!</span>
        </div>
      </div>

      {/* Steps */}
      <div className="relative text-center p-8 rounded-lg">
        {/* Steps Section */}
        <div className="text-gray-700 font-semibold text-2xl p-8 rounded-lg">
          Steps To Empower Your Child’s Future
        </div>

        {/* Career Assessment Steps */}
        <div className="flex lg:flex-row md:flex-col justify-center items-center gap-6 sm:flex-col card-container">
          {/* Free Career Assessment */}
          <div
            className={`p-2 rounded-lg shadow-md text-center flex-1 font-bold assessmentVector assessment-card ${freeAssessmentSelected ? "bg-gradient-to-b from-[#FFDD94] to-[#FAAA2D] text-black" : "bg-gradient-to-b from-[#06F] to-[#003D99] text-white"}`}
          >
            <img src={AssessmentVector} className={"mb-4 " + (freeAssessmentSelected ? "invert" : "")} />
            <h3 className="font-bold text-xl">1. Free Career Assessment</h3>
            <p className="text-sm">Get a detailed report that provides a clear roadmap for your future.</p>
            <button
              className={`mt-4 bg-white px-4 py-2 rounded-lg font-bold ${freeAssessmentSelected ? "bg-white text-black" : "text-blue-600"}`}
              onClick={() => scrollToAssessment("Free Career Assessment")}>READ MORE</button>
          </div>

          {/* Personalized Career Insights */}
          <div
            className={`bg-blue-600 p-2 rounded-lg shadow-md text-center flex-1 assessmentVector assessment-card ${assessmentTitle === "Personalized Career Insights" ? "bg-gradient-to-b from-[#FFDD94] to-[#FAAA2D] text-black" : "bg-blue-600 text-white"}`}
          >
            <img src={AssessmentVector2} className={"mb-4 " + (assessmentTitle === "Personalized Career Insights" ? "invert" : "")} />
            <h3 className="font-bold text-xl">2. Your Personalized Career Insights</h3>
            <p className="text-sm">Get an advanced report with powerful career insights.</p>
            <button
              className={`mt-4 bg-white px-4 py-2 rounded-lg font-bold ${assessmentTitle === "Personalized Career Insights"
                ? "bg-white text-black" : "text-blue-600"}`} onClick={() => scrollToAssessment("Personalized Career Insights")}>READ MORE</button>
          </div>
        </div>
      </div>

      {/* Background Image Section Appears After Clicking "Know More" */}
      {showAssessment && (
        <motion.div
          className="relative mt-12 py-12 px-6 rounded-lg shadow-md text-white assessmnet-bottom-bg"
          style={{
            backgroundImage: `url(${bottombg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Key Features */}
          {assessmentTitle === "Free Career Assessment" && (
            <div>
              <div
                ref={assessmentRef}
                className="text-center font-extrabold text-xl lg:text-2xl text-yellow-400"
              >
                India’s First Assessment That Unlocks
                <span className="block">
                  Your Child’s True Potential
                </span>
              </div>

              <motion.p
                className="text-center mt-4 px-4 text-xs"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                Introducing SkillSphere – a cutting-edge, science-backed
                assessment that helps students discover their strengths and
                align them with the ideal career path. Powered by globally
                recognized models.
              </motion.p>

              {/* Models - Now in a Single Line with Background */}
              <motion.div
                className="flex flex-nowrap justify-center items-center gap-4 mt-6 max-w-full px-4 assessment-category-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                {[
                  "OCEAN Model",
                  "BAR-ON Model",
                  "Holland’s Model",
                  "CORE Formula",
                  "DAT Framework",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className={`bg-white px-4 py-2 rounded-md font-semibold text-black assessment-category-card cursor-pointer ${selectedCategory === item ? "selectedCategory" : ""
                      }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.6 + index * 0.1,
                    }}
                    onClick={() => handleCategoryClick(item)}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>

              {/* How It Works */}
              <motion.div
                className="relative mt-12 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              >
                <h2 className="text-center text-2xl font-bold text-yellow-400">How It Works</h2>
                <ul className="mt-4 list-inside space-y-2 text-center">
                  <li>📌 Step 1: Answer 150 expert-designed questions in a seamless assessment experience.</li>
                  <li>📌 Step 2: Gain insights on aptitude, emotional intelligence, resilience, and career potential.</li>
                  <li>📌 Step 3: Receive a detailed 19-page personalized report with career recommendations.</li>
                </ul>
              </motion.div>
            </div>
          )}

          {assessmentTitle === "Skill Development" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <div className="details-conetent-container">
                <p className="details-title">Discover Learn, and Grow</p>
                <p className="details-subtitle">with our Dynamics Clubs</p>
                <div className="details-card-container">
                  <div>
                    <DetailsCard
                      title={"Entrepreneurship League"}
                      description={"Dream, Build, Lead – Shape the World"}
                      image={Enterprenaurshipimg}
                    />
                    <DetailsCard
                      title={"Engineering Explorers"}
                      description={"Innovate Today, Engineer Tomorrow!"}
                      image={EngineerImg}
                    />
                    <DetailsCard
                      title={"Business Trailblazers"}
                      description={"Master Strategies, Lead the Game!"}
                      image={BusinessImg}
                    />
                  </div>
                  <div>
                    <DetailsCard
                      title={"Medical Mavericks"}
                      description={"Healing Lives, Inspiring Futures"}
                      image={MedicalImg}
                    />
                    <DetailsCard
                      title={"Artistic Visionaries"}
                      description={
                        "Create, Express, Inspire – The Future is Yours"
                      }
                      image={Artistimg}
                    />
                    <DetailsCard
                      title={"Administrative Achievers"}
                      description={"Lead with Integrity, Govern with Impact"}
                      image={AdminImg}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {assessmentTitle === "Personalized Career Insights" && (
            <motion.div
              className="details-conetent-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <p className="details-title details">
                Unlock your Child's Poential Now!
              </p>
              <p className="details-subtitle">
                “Our assessment uncovers your child’s unique strengths and
                suggests career options tailored to their potential.”
              </p>
              <div className="details-card-container">
                <div>
                  <DetailsCard
                    title={"Personality"}
                    description={
                      "Behavioral traits and emotional intelligence."
                    }
                    image={Enterprenaurshipimg}
                  />
                  <DetailsCard
                    title={"Interests"}
                    description={"Hobbies and subject preferences."}
                    image={EngineerImg}
                  />
                  <DetailsCard
                    title={"Aptitude"}
                    description={"Problem-solving and reasoning skills."}
                    image={BusinessImg}
                  />
                </div>
                <div>
                  <DetailsCard
                    title={"Strengths"}
                    description={"Skills needing improvement."}
                    image={MedicalImg}
                  />
                  <DetailsCard
                    title={"Growth Areas"}
                    description={
                      "Create, Express, Inspire – The Future is Yours"
                    }
                    image={Artistimg}
                  />
                  <DetailsCard
                    title={"Career Fit"}
                    description={"Matching profiles to career paths."}
                    image={AdminImg}
                  />
                </div>
              </div>

              <p className="details-title">
                See How Your Child’s Report Will Look!
              </p>
              <div className="assessment-screenshot">
                <img src={StudentImage} />
                <img src={AssessmentScreenshot} />
              </div>
            </motion.div>
          )}

          {assessmentTitle === "Global Exposure" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <div className="exposure-content">
                <div>
                  <img src={GlocalExposureCoverImg} />
                </div>
                <div className="exposure-content-text">
                  <h3>Global Exposure & Fellowship Opportunities</h3>
                  <p>
                    Gain insights into global trends with workshops and
                    international experiences, including a trip to the USA.
                  </p>
                  <p>
                    Stand out with fellowship grants for top performers,
                    empowering you to pursue further education or projects.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {assessmentTitle === "Free Career Assessment" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          {selectedCategory === "OCEAN Model" && (
            <ModelDescription
              title={"Psychometric Traits"}
              subTitle={"Gain Insight into Your Personality Traits"}
              description={
                "Based on the Big Five Personality Model (OCEAN), this test provides insights into your personality across five broad dimensions:"
              }
              bulletPoints={[
                "Openness",
                "Conscientiousness",
                "Extraversion",
                "Agreeableness",
                "Neuroticism",
              ]}
              img={PsychoImg}
            />
          )}
          {selectedCategory === "BAR-ON Model" && (
            <ModelDescription
              title={"Socio-Emotional Intelligence (SEI)"}
              subTitle={"Gain Insight into Your Emotional and Social Strengths"}
              description={
                "Based on Bar-On’s Model of Emotional-Social Intelligence, this test provides insights into how well you understand and manage your emotions, as well as how you interact with others."
              }
              bulletPoints={[
                "Emotional Intelligence (EQ)",
                "Social Intelligence (SQ)",
              ]}
              img={SocioImage}
            />
          )}
          {selectedCategory === "Holland’s Model" && (
            <ModelDescription
              title={"Interests & Preferences"}
              subTitle={"Gain Insight into Your Personality and Career Fit"}
              description={
                "Based on Holland’s RIASEC Model, this test provides insights into your personality type and aligns it with suitable career paths. It covers six types:"
              }
              bulletPoints={[
                "Realistic",
                "Investigative",
                "Artistic",
                "Social",
                "Enterprising",
                "Conventional",
              ]}
              img={InterestImg}
            />
          )}
          {selectedCategory === "CORE Formula" && (
            <ModelDescription
              title={"Adversity Quotient"}
              subTitle={"Gain Insight into How You Handle Challenges"}
              description={
                "Using the CORE Formula (Control, Ownership, Reach, Endurance), this test provides insights into how well you handle challenges:"
              }
              bulletPoints={["Control", "Ownership", "Reach", "Endurance"]}
              img={AdversityImg}
            />
          )}
          {selectedCategory === "DAT Framework" && (
            <ModelDescription
              title={"Aptitude Quotient"}
              subTitle={"Gain Insight into Your Abilities and Potential"}
              description={
                "Our Aptitude Test evaluates your natural talents and intellectual capabilities, based on the Differential Aptitude Test (DAT) framework. It provides insights into:"
              }
              bulletPoints={[
                "Verbal & Numerical Reasoning",
                "Abstract & Mechanical Reasoning",
                "Spatial & Perceptual Skills",
                "Language & Spelling Proficiency",
              ]}
              img={AptitudeImg}
            />
          )}
        </motion.div>
      )}
      {assessmentTitle === "Personalized Career Insights" && (
        <div className="assessment-focus">
          <div className="assessment-focus-text">
            <p>Assessment Focus:</p>
            <p>A Fast Glimpse of the Process</p>
          </div>
          <div className="empty-image"></div>
        </div>
      )}
    </div>
  );
};

export default CareerAssessment;
