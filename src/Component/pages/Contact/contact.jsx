import React from "react";
import ContactChildren from "../../../images/contact-children.png";
import StudentImage from "../../../images/studentImg.png";
import TeacherImage from "../../../images/teacherImage.png";
import BubbleContainer from "../../bubbleContainer/bubbleContainer";
import ClassroomImg from "../../../images/classroom.png";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-cover">
        {/* <div className="contact-cover-img">
          <img src={StudentImage} />
        </div> */}
        <div className="cover-container-padding">
          <p className="cover-text-header text-6xl mb-3">Why Us</p>
          <p className="cover-text text-4xl mb-10">
            Because Learning Shouldn't Be One-Size-Fits-All
          </p>
          <div className="contact-cover-desc">
            <div className="flex text-2xl mb-2">
              <p className="cover-text-header">1. Exponential Learning : </p>
              <p className="cover-text">
                Interactive projects and challenges turn theory into practical,
                enjoyable lessons.
              </p>
            </div>
            <div className="flex text-2xl mb-2">
              <p className="cover-text-header">2. Global Exposure :</p>
              <p className="cover-text">
                From NASA to Harvard and MIT, we open doors to world-class
                innovation.
              </p>
            </div>
            <div className="flex text-2xl mb-2">
              <p className="cover-text-header">3.Fellowship Grant :</p>
              <p className="cover-text">
                Up to ₹2 crores in funding empowers young entrepreneurs to turn
                their bold ideas into reality.
              </p>
            </div>
            <div className="flex text-2xl mb-2">
              <p className="cover-text-header">4.Thriving Ecosystem :</p>
              <p className="cover-text">
                A supportive network for students, parents, and educators
                ensures collaboration and long-term success.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="contact-cover-img-teacher">
          <img src={TeacherImage} />
        </div> */}
      </div>
      <div className="contact-vision">
        <div className="contact-container">
          <div className="contact-children-container flex md:flex-col gap-20 sm:flex-col gap-20">
            <div className="contact-our-vision">
              <p className="contact-our-vision-text">Our Vision</p>
              <p className="contact-our-vision-para">
                Redefine learning to ignite curiosity, foster innovation, and
                empower the next generation to lead with impact and creativity.
              </p>
            </div>
            <img src={ContactChildren} />
          </div>
        </div>
      </div>
      <div className="contact-vision-second">
        <div className="contact-container">
          <div className="contact-children-container flex md:flex-col gap-20 sm:flex-col gap-20">
            <img src={ContactChildren} />
            <div className="contact-our-vision-second">
              <p className="contact-our-vision-text md:text-2xl sm:text-2xl lg:text-2xl xl:text-6xl ">
                Our Mission
              </p>
              <p className="contact-our-vision-para md:text-2xl sm:text-2xl lg:text-2xl xl:text-2xl">
                Revolutionize learning through immersive experiences by
                equipping the individuals with essential skills, encouraging
                creativity, and inspiring leadership, all while nurturing their
                potential to drive meaningful change and innovation in the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-values">
        <p>Our</p>
        <p className="values-text">Values</p>
      </div>
      <div className="contact-values-container flex md:flex-col items-center justify-center sm:flex-col items-center justify-center">
        <BubbleContainer
          text={"I"}
          secondText={"Integrity"}
          thirdText={"Demonstrate Integrity is All we Do."}
          bgColor={"linear-gradient(180deg, #A0E1FD 0%, #110B8B 100%)"}
        />
        <BubbleContainer
          text={"N"}
          secondText={"Nurture"}
          thirdText={"Nurture a Culture of Learning."}
          bgColor={"linear-gradient(180deg, #BCDC55 0%, #62BA14 100%)"}
        />
        <BubbleContainer
          text={"S"}
          secondText={"Simplify"}
          thirdText={"Simplify processes for efficiency."}
          bgColor={"linear-gradient(180deg, #A0E1FD 0%, #65B4FF 100%)"}
        />
        <BubbleContainer
          text={"P"}
          secondText={"Passionate"}
          thirdText={"Be Passionate about customer success."}
          bgColor={"linear-gradient(180deg, #E54445 0%, #E79693 100%)"}
        />
        <BubbleContainer
          text={"I"}
          secondText={"Innovate"}
          thirdText={"Innovate all the time."}
          bgColor={"linear-gradient(180deg, #FEDD9A 0%, #E09530 100%)"}
        />
        <BubbleContainer
          text={"R"}
          secondText={"Resilisence"}
          thirdText={"Show Resilience in times of change."}
          bgColor={"linear-gradient(180deg, #E2A2FF 0%, #9028A0 100%)"}
        />
        <BubbleContainer
          text={"E"}
          secondText={"Empower"}
          thirdText={"Empower to excel."}
          bgColor={
            "linear-gradient(180deg, rgba(248, 164, 1, 0.77) 0%, #FFDC4F 100%)"
          }
        />
      </div>
      <div className="contact-values">
        <p>What</p>
        <p className="values-text">We Do</p>
      </div>
      <div className="contact-text">
        <p>From Classrooms to Boardrooms – Shaping Tomorrow’s Leaders</p>
        <div className="contact-clasroom">
          <img src={ClassroomImg} className="mb-10" />
          <p>
            At Simplifying Skills, we bridge the gap between education and
            real-world success by offering dynamic, future-focused learning
            experiences. Through immersive technology, hands-on training, and
            interactive methodologies, we help students develop critical
            thinking, creativity, and leadership skills. Our programs are
            designed by experts, ensuring students are equipped to excel in
            tomorrow’s workforce and make a meaningful impact on the world. We
            don’t just teach—we inspire, challenge, and equip learners with the
            skills they need to thrive.
          </p>
        </div>
      </div>
      <div className="contact-values">
        <p>Our</p>
        <p className="values-text">Team</p>
      </div>
      <div className="our-team-container flex md:flex-col gap-20 sm:flex-col gap-20">
        <div className="team-small-container"></div>
        <div className="our-team-description">
          <p className="title md:mb-10 sm:mb-10">Training & Development</p>
          <p className="description">
            The team that empowers trainers and learners—building engaging
            programs that develop skills, boost confidence, and make learning
            truly effective. 
          </p>
        </div>
      </div>
      <div className="our-team-container-reverse flex md:flex-col-reverse gap-20 sm:flex-col-reverse gap-20">
        <div className="our-team-description">
          <p className="title md:mb-10 sm:mb-10">Leadership Team</p>
          <p className="description">
            The visionaries driving our mission forward—strategizing, guiding,
            and inspiring our teams to innovate, grow, and create meaningful
            learning experiences that make a lasting impact.
          </p>
        </div>
        <div className="team-small-container"></div>
      </div>
      <div className="our-team-container flex md:flex-col gap-20  sm:flex-col gap-20">
        <div className="team-small-container"></div>
        <div className="our-team-description">
          <p className="title md:mb-10 sm:mb-10">Business development</p>
          <p className="description">
            The bridge between us and our learners—connecting with students,
            parents, and institutions to understand their needs and offer the
            best learning solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
