import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("EmailJS success:", res);
      alert("Message sent successfully!");
      form.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send. Please check your EmailJS service and template.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Left */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
          <p className="text-gray-600">
            I’d love to hear from you! Whether you have a question or just want
            to say hi, feel free to drop a message.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-gray-700 text-xl" />
              <span className="text-lg">nirajprajapati0708@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-gray-700 text-xl" />
              <span className="text-lg">+91 8849882782</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-gray-700 text-xl" />
              <span className="text-lg">Surat, Gujarat, India</span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* These name attributes MUST match your template variables */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gray-800 hover:bg-gray-900"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
