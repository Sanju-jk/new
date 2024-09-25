import React, { useContext } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ThemeContext } from '../ThemeContext'; // Adjust the path as necessary

function Contact() {
    const [state, handleSubmit] = useForm("mgvwbovv");
    const { theme } = useContext(ThemeContext); // Get the current theme

    if (state.succeeded) {
        return (
            <div className={`text-center text-green-500 text-lg mt-12`}>
                <p>Thank you for your message!</p>
                <p>I will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <div className={`flex flex-col justify-center items-center min-h-screen p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
            {/* Heading */}
            <h1 className={`font-poppins text-4xl lg:text-5xl text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-10`}>
                Get in Touch
            </h1>

            {/* Form Container */}
            <div className="w-full max-w-lg">
                <form
                    onSubmit={handleSubmit}
                    className={`p-8 rounded-lg shadow-lg border ${theme === 'light' ? 'bg-gray-200 border-gray-300' : 'bg-gray-800 border-gray-700'}`}
                >
                    {/* Email Address */}
                    <label htmlFor="email" className={`block text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-2`}>
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        className={`w-full border border-gray-600 rounded-md p-2 mb-4 ${theme === 'light' ? 'bg-white text-gray-900 placeholder-gray-500' : 'bg-gray-700 text-white placeholder-gray-500'}`}
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    {/* Phone Number */}
                    <label htmlFor="phone" className={`block text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-2`}>
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        className={`w-full border border-gray-600 rounded-md p-2 mb-4 ${theme === 'light' ? 'bg-white text-gray-900 placeholder-gray-500' : 'bg-gray-700 text-white placeholder-gray-500'}`}
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />

                    {/* Message */}
                    <label htmlFor="message" className={`block text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-2`}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className={`w-full border border-gray-600 rounded-md p-2 mb-4 ${theme === 'light' ? 'bg-white text-gray-900 placeholder-gray-500' : 'bg-gray-700 text-white placeholder-gray-500'}`}
                        rows="5"
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className={`w-40 text-white border-2 border-teal-500 p-2 rounded-lg ${theme === 'light' ? 'bg-teal-600 hover:bg-teal-500' : 'bg-teal-700 hover:bg-teal-600'} transition-all duration-300`}
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-8">
                <a href="https://linkedin.com/in/yourprofile" className={`text-xl transition ${theme === 'light' ? 'text-blue-500 hover:text-blue-600' : 'text-blue-400 hover:text-blue-500'}`}>
                    LinkedIn
                </a>
                <a href="https://github.com/yourprofile" className={`text-xl transition ${theme === 'light' ? 'text-gray-700 hover:text-gray-800' : 'text-gray-400 hover:text-gray-500'}`}>
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default Contact;
