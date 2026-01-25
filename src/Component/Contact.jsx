import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "7f27df02-74a9-4fd0-b1cc-a0d35901123f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    setResult("");

    const data = await response.json();

    setResult(data.success ? "Success!" : "Error");
    alert("Form Submitted successfully");
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-5 decoration-1 under font-light ml-2">
          With us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        let's grow something together
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            <label htmlFor="name">Your name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            <label htmlFor="email">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          <label>Message</label>
          <textarea
            className="w-full border border-gary-300 rounded py-3 px-4 mt-2"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-green-600 text-white py-2 px-12 mb-10 hover:bg-green-500 active:bg-green-600 cursor-pointer rounded-sm">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
