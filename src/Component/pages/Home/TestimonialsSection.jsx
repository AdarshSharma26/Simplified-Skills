import React from "react";

const testimonials = [
  {
    name: "Masrinah Majri",
    handle: "@youraccount",
    review:
      "The session was highly engaging and interactive, making it easy to understand key communication concepts. The practical approach helped us grasp the importance of effective communication in a fun and meaningful way.",
    rating: 5,
  },
  {
    name: "Masrinah Majri",
    handle: "@youraccount",
    review:
      "The interactive discussions and activities made the workshop enjoyable, allowing us to apply financial concepts in a hands-on and meaningful way. / A well-structured and impactful session that simplified financial concepts, encouraged smart decision-making, and made learning about money management exciting.",
    rating: 5,
  },
  {
    name: "Masrinah Majri",
    handle: "@youraccount",
    review:
      "The session provided valuable insights into robotics, AI and problem-solving, helping us understand how technology can be used to create innovative solutions. / The trainers explained robotics principles in a simplified manner, using practical examples that made learning fun and interactive.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 px-6 text-center">
      {/* Testimonials Container */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} data={testimonial} />
        ))}
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ data }) => {
  return (
    <div className="w-80 bg-white hover:shadow-lg">
      {/* Review Section */}
      <div className="p-6 bg-gray-100">
        {/* Star Ratings */}
        <div className="flex justify-center mb-2">
          {Array(data.rating)
            .fill()
            .map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
        </div>
        {/* Review Text */}
        <p className="text-gray-600 text-sm">{data.review}</p>
      </div>

      {/* User Section */}
      <div className="bg-blue-500 p-4 text-white flex items-center">
        {/* User Icon */}
        <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wide">{data.name}</h4>
          {/* <p className="opacity-80 text-xs">{data.handle}</p> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;