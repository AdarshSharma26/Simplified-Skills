import React from "react";

import ai_coding from "../../../images/aicoding.png"
import entrepreneur from "../../../images/Entrepreneurship&leadership.png"
import emotional from "../../../images/EmotionalIntellignece.png"
import innovation from "../../../images/innovation.png"
// import robotics from "../../../images/robotics.png"
import environment from "../../../images/environment.png"
import financial from "../../../images/financial.png"
import ethical from "../../../images/ethical.png"
import digital_literacy from "../../../images/digital-literacy.png"
import critical_thinking from "../../../images/critical-thinking.png"
import data_literacy from "../../../images/data-literacy.png"
import communication_skills from "../../../images/communication-skills.png"

// Skill data with labels, background colors, and icon paths
const skills = [
  {
    title: "AI and Coding",
    color: "bg-[#AC95FF]",
    icon: ai_coding,
    class: "p-1",
  },
  {
    title: "Entrepreneurship and Leadership",
    color: "bg-[#F5F8FB]",
    icon: entrepreneur,
  },
  {
    title: "Emotional Intelligence",
    color: "bg-[#EDBAFF]",
    icon: emotional,
    class: "p-1",
  },
  {
    title: "Innovation and Creativity",
    color: "bg-[#F5F8FB]",
    icon: innovation,
    class: "p-1",
  },
  // { title: "Robotics", color: "bg-[#F5F8FB]", icon: robotics, class: "p-1" },
  {
    title: "Environmental Literacy",
    color: "bg-[#C0FF60]",
    icon: environment,
    class: "p-1",
  },
  {
    title: "Financial Literacy",
    color: "bg-[#F5F8FB]",
    icon: financial,
    class: "p-1",
  },
  {
    title: "Ethical and Global Citizenship",
    color: "bg-[#FFE058]",
    icon: ethical,
  },
  {
    title: "Digital Literacy",
    color: "bg-[#FAC8D2]",
    icon: digital_literacy,
    class: "p-1",
  },
  {
    title: "Critical Thinking and Problem Solving",
    color: "bg-[#F5F8FB]",
    icon: critical_thinking,
  },
  {
    title: "Data Literacy",
    color: "bg-[#C9C5FF]",
    icon: data_literacy,
    class: "p-1",
  },
  {
    title: "Communication Skills",
    color: "bg-[#F5F8FB]",
    icon: communication_skills,
    class: "p-1",
  },
];

const SkillsSection = () => {
  return (
    <div className="py-16 px-6 text-center bg-white">
      <h2 className="text-4xl font-bold text-gray-900">
        Skills that set you <span className="text-orange-500">APART</span>
      </h2>

      {/* Skills Grid */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center p-3 rounded-lg shadow-md ${skill.color} text-gray-900`}
          >
            {/* Small Icon Box */}
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-md text-lg">
              <img src={skill.icon} className={"w-full " + (skill.class || "")} />
            </div>

            {/* Skill Title */}
            <p className="ml-3 text-sm font-medium text-left">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;





