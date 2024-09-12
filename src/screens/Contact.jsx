//Using formspree api

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mgvwbovv");

    if (state.succeeded) {
        return (
            <div className="text-center text-green-500 text-lg mt-12">
                <p>Thank you for your message!</p>
                <p>I will get back to you shortly.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4 ">
            {/* Heading */}
            <h1 className="font-poppins text-4xl lg:text-5xl text-center text-white mb-10">Get in Touch</h1>

            {/* Form Container */}
            <div className="w-full max-w-lg">
                <form
                    onSubmit={handleSubmit}
                    className="bg-stone-800 p-8 rounded-lg shadow-lg"
                >
                    {/* Email Address */}
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        className="w-full border border-gray-400 rounded-md p-2 mb-4 bg-neutral-300 text-white"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    {/* Phone Number */}
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        className="w-full border border-gray-400 rounded-md p-2 mb-4 bg-neutral-300 text-white"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />

                    {/* Message */}
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className="w-full border border-gray-400 rounded-md p-2 mb-4 bg-neutral-300 text-white"
                        rows="5"
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-40 text-white border-2 border-blue-500 p-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-8">
                {/* <a href="https://twitter.com/yourprofile" className="text-blue-400 hover:text-blue-500 text-xl transition">
                    Twitter
                </a> */}
                <a href="https://linkedin.com/in/yourprofile" className="text-blue-700 hover:text-blue-800 text-xl transition">
                    LinkedIn
                </a>
                <a href="https://github.com/yourprofile" className="text-gray-400 hover:text-gray-500 text-xl transition">
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default Contact;
