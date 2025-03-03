"use client";
import { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing relevant icons
import { CONTACT } from "../constants";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = {
      access_key: "856b9612-a812-4e43-97c5-8899efe4ad3c",
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    console.log("Submitting form data:", formData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response from server:", result);

      if (result.success) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 border-b border-neutral-800">
      <h2 className="mb-16 text-center text-4xl font-bold text-white">
        <span className="bg-gradient-to-r from-purple-400 via-cyan-500 to-indigo-400 bg-clip-text text-transparent">
          Let's Connect
        </span>
      </h2>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
          <div className="w-full md:w-1/2">
            <div className="text-center md:text-left space-y-6 max-w-lg mx-auto md:mx-0">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Ready to <span className="text-purple-400">collaborate?</span>
              </h3>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="p-2 rounded-full bg-neutral-800">
                  <FaMapMarkerAlt className="w-5 h-5 text-indigo-400" />
                </div>
                <p className="text-neutral-300">{CONTACT.address}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="p-2 rounded-full bg-neutral-800">
                  <FaPhoneAlt className="w-5 h-5 text-indigo-400" />
                </div>
                <p className="text-neutral-300">{CONTACT.phoneNo}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="p-2 rounded-full bg-neutral-800">
                  <FaEnvelope className="w-5 h-5 text-indigo-400" />
                </div>
                <p className="text-neutral-300">{CONTACT.email}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="max-w-md mx-auto backdrop-blur-sm rounded-xl overflow-hidden border border-neutral-700 shadow-lg shadow-purple-500/10">
              {isSubmitted ? (
                <div className="p-8 text-center bg-neutral-800/50">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-500/20 text-green-400">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    Message Sent!
                  </h3>
                  <p className="mb-6 text-neutral-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 text-sm font-medium text-white bg-neutral-700 rounded-md hover:bg-neutral-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 space-y-6 bg-neutral-800/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Send a <span className="text-cyan-400">Message</span>
                  </h3>

                  {error && (
                    <div className="p-4 text-red-400 bg-red-500/10 rounded-md border border-red-500/20">
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-neutral-800/50 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent placeholder:text-neutral-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 bg-neutral-800/50 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent placeholder:text-neutral-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      placeholder="Your message"
                      className="w-full px-4 py-3 bg-neutral-800/50 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent placeholder:text-neutral-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-md transition-transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Sending..." : <><HiPaperAirplane className="mr-2 h-5 w-5 rotate-45" /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
