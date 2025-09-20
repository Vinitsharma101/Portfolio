import React, { useState } from "react";
// import myphoto from "/assets/myphoto.jpg";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, CheckCircle, X } from "lucide-react";

interface ContactProps {
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  const handleClose = () => {
    onClose();
  };

  return (
    <section
      id="contact"
      className="fixed overflow-auto hide-scrollbar inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-8"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          >
            <X size={24} className="text-white" />
          </button>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">
              Get In Touch
            </h2>

            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information - 2/5 width on large screens */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-dark-surface to-black border border-gray-800 rounded-2xl overflow-hidden h-full">
                  {/* Top decorative header */}
                  <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="absolute top-8 left-8 w-40 h-40 bg-white/10 rounded-full"></div>
                      <div className="absolute bottom-4 right-12 w-20 h-20 bg-white/10 rounded-full"></div>
                      <div className="absolute top-12 right-12 w-12 h-12 bg-white/10 rounded-full"></div>
                    </div>
                  </div>

                  {/* Contact info content */}
                  <div className="p-8 relative">
                    {/* Profile picture - overlapping the header */}
                    <div className="w-24 h-24 rounded-full border-4 border-dark-bg overflow-hidden absolute -top-12 left-8">
                      <img
                        src="https://imgs.search.brave.com/Pyx_GJg2V_zlRgyOyoQYVBiVfjJ8HzVGpCCQepJP4Sg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FlLzMx/L2M4L2FlMzFjODEz/M2JhNzUzYTBmZDYx/OGE1MGJmNzhmNTZk/LmpwZw"
                        alt="Vinit Sharma"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="mt-16">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        Vinit Sharma
                      </h3>
                      <p className="text-gray-400 mb-6">Full Stack Developer</p>

                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 bg-gray-800/50 p-3 rounded-lg mr-4">
                            <Mail className="text-blue-400" size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-1">
                              Email
                            </h4>
                            <a
                              href="mailto:vinitsharmapc827@gmail.com"
                              className="text-white hover:text-blue-400 transition-colors"
                            >
                              vinitsharmapc827@gmail.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 bg-gray-800/50 p-3 rounded-lg mr-4">
                            <Phone className="text-blue-400" size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-1">
                              Phone
                            </h4>
                            <a
                              href="tel:+917056101827"
                              className="text-white hover:text-blue-400 transition-colors"
                            >
                              +91 7056101827
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 bg-gray-800/50 p-3 rounded-lg mr-4">
                            <MapPin className="text-blue-400" size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-1">
                              Location
                            </h4>
                            <p className="text-white">Chandigarh, India</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="mt-8 pt-8 border-t border-gray-800">
                      <h4 className="text-sm font-medium text-gray-400 mb-4">
                        Connect With Me
                      </h4>
                      <div className="flex space-x-4">
                        <a
                          href="https://github.com/Vinitsharma101"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800/50 p-3 rounded-lg text-white hover:bg-gray-700/70 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href="www.linkedin.com/in/sharma-vinit101"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800/50 p-3 rounded-lg text-white hover:bg-gray-700/70 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a
                          href="buildwithvinit.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800/50 p-3 rounded-lg text-white hover:bg-gray-700/70 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - 3/5 width on large screens */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-dark-surface to-black border border-gray-800 rounded-2xl p-8 h-full relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Send Me a Message
                    </h3>

                    {isSubmitted ? (
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
                        <CheckCircle
                          size={48}
                          className="mx-auto text-green-500 mb-4"
                        />
                        <h4 className="text-xl font-semibold text-white mb-2">
                          Message Sent Successfully!
                        </h4>
                        <p className="text-gray-300">
                          Thank you for reaching out. I'll get back to you as
                          soon as possible.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-400 mb-2"
                            >
                              Enter your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Name"
                              className={`w-full bg-dark-bg border ${
                                formErrors.name
                                  ? "border-red-500"
                                  : "border-gray-700"
                              } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                            />
                            {formErrors.name && (
                              <p className="mt-1 text-sm text-red-500">
                                {formErrors.name}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-400 mb-2"
                            >
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full bg-dark-bg border ${
                                formErrors.email
                                  ? "border-red-500"
                                  : "border-gray-700"
                              } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                              placeholder="example@gmial.com"
                            />
                            {formErrors.email && (
                              <p className="mt-1 text-sm text-red-500">
                                {formErrors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-400 mb-2"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`w-full bg-dark-bg border ${
                              formErrors.subject
                                ? "border-red-500"
                                : "border-gray-700"
                            } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                            placeholder="Project Inquiry"
                          />
                          {formErrors.subject && (
                            <p className="mt-1 text-sm text-red-500">
                              {formErrors.subject}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-400 mb-2"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className={`w-full bg-dark-bg border ${
                              formErrors.message
                                ? "border-red-500"
                                : "border-gray-700"
                            } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none`}
                            placeholder="I'd like to discuss a potential project..."
                          />
                          {formErrors.message && (
                            <p className="mt-1 text-sm text-red-500">
                              {formErrors.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all ${
                              isSubmitting
                                ? "bg-gray-700 cursor-not-allowed"
                                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message
                                <Send size={18} className="ml-2" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;