import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+-]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "65698cef-bf5c-452b-a273-5e98388fc320",
          ...formData,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h1 className="mb-5 mt-25 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Contact Me
      </h1>
          <div className="w-24 h-1 bg-gradient-to-r mb-5 from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your message has been received. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center text-gray-700 dark:text-gray-200 mb-1 text-sm">
                  <User className="w-4 h-4 mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="flex items-center text-gray-700 dark:text-gray-200 mb-1 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="flex items-center text-gray-700 dark:text-gray-200 mb-1 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="flex items-center text-gray-700 dark:text-gray-200 mb-1 text-sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md flex items-center justify-center space-x-2 
                  ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  } 
                  transition-colors duration-300`}
              >
                <Send
                  className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`}
                />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
