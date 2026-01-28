import React from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Mr Wale",
      title: "Manager",
      ratings: 1,
      text: "Excellent service from start to finish. My garden looks neat, healthy, and well-maintained. Very professional, reliable, and detail-oriented. Highly recommended.",
    },

    {
      name: "Dr Utche",
      title: "Architect",
      ratings: 2,
      text: "They did an amazing job on my garden. The trimming was neat, the plants look healthy, and everything was done on time. I am very happy with the service.",
    },

    {
      name: "Mrs Amaka ",
      title: "UI/UX Designer",
      ratings: 3,
      text: "Professional garden maintenance with great attention to detail. The team transformed my outdoor space with clean edges, beautiful trimming, and consistent care.",
    },

    {
      name: "Mr Dada ",
      title: "Managing Director",
      ratings: 4,
      text: "Reliable, professional, and skilled. My garden has never looked better.",
    },
  ];
  return (
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer
        <span className="underline underline-offset-5 decoration-1 under font-light ml-2">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real stories from those who enjoyed our services.
      </p>

      <div className="grid grid-cols-1 lg:flex justify-center gap-8">
        {testimonialData.map((testimonials, index) => (
          <div
            key={index}
            className="w-fit lg:w-200 shadow-lg rounded px-8 py-12 text-center"
          >
            <h1 className="text-xl text-gray-700 font-medium">
              {testimonials.name}
            </h1>
            <p className="text-gray-500 mb-4 text-sm">{testimonials.title}</p>
            <p className="text-gray-600">{testimonials.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
