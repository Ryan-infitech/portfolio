import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Loader2,
} from "lucide-react";

// Define status types for form submission
type SubmissionStatus = "idle" | "loading" | "success" | "error";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // API URL for both dev and production
  const API_URL = "/api/contact"; // This works both in Vercel production and local development with vercel dev

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Set loading state
      setStatus("loading");

      // Send data to backend API
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("Email sent successfully:", data);
      setStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (error: any) {
      console.error("Email sending failed:", error);
      setStatus("error");

      // Provide specific error message
      const errorMsg =
        error.message || "Failed to send your message. Please try again later.";
      setErrorMessage(errorMsg);

      // Reset error state after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section className="min-h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-16 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
            Get In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Touch
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <span className="h-8 w-1 bg-indigo-500 rounded-full inline-block"></span>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Padang, ID, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:rianseptiawan@infitech.or.id"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      rianseptiawan@infitech.or.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +6285157517798
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <span className="h-8 w-1 bg-indigo-500 rounded-full inline-block"></span>
                Social Profiles
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <motion.a
                  href="https://github.com/Ryan-infitech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
                  whileHover={{ y: -2 }}
                >
                  <div className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <Github size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      GitHub
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Ryan-infitech
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all"
                  />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/rian-septiawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
                  whileHover={{ y: -2 }}
                >
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Linkedin size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      LinkedIn
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      rian-septiawan
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all"
                  />
                </motion.a>

                <motion.a
                  href="https://instagram.com/ryan.septiawan__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md"
                  whileHover={{ y: -2 }}
                >
                  <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                    <Instagram size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Instagram
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      @ryan.septiawan__
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all"
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-full">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <span className="h-8 w-1 bg-indigo-500 rounded-full inline-block"></span>
                Send Message
              </h3>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle
                      className="text-green-600 dark:text-green-400"
                      size={32}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-green-600 dark:text-green-400 mb-4">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-800/30 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle
                      className="text-red-600 dark:text-red-400"
                      size={32}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">
                    Message Could Not Be Sent
                  </h4>
                  <p className="text-red-600 dark:text-red-400 mb-4">
                    {errorMessage}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
                    >
                      Try Again
                    </button>
                    <a
                      href="mailto:rianseptiawan@infitech.or.id"
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Send Email Directly
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  name="contact-form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="rian ..."
                        className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="rian@example.com"
                        className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                      status === "loading"
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:shadow-lg"
                    }`}
                    whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
