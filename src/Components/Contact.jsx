import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (!formData.name) {
      newErrors.name = "field required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "field required";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "field required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      // Handle form submission here
    }
  };

  return (
    <div className="items-center justify-center flex p-8  flex-col ">
      <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 rounded-md font-bold text-white">
        CONTACT ME
      </button>
      <div className="bg-[#1a1a1a]  p-8 mt-8 mb-8 ">
        <form  action="https://getform.io/f/bllyegwb" method="POST">
          <div className="flex gap-3 mb-2 ">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name*"
                className="border-2 p-2 w-full"
                onChange={handleChange}
              />
              {errors.name && (
                <span className="text-red-500 text-xs">{errors.name}</span>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email*"
                className="border-2 p-2 w-full"
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="mb-2">
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your message*"
              className="border-2 p-2 w-full h-32"
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-xs">{errors.message}</span>
            )}
           
          </div>
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 w-full p-2 rounded-md font-bold text-white" type="submit">
              Send
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
