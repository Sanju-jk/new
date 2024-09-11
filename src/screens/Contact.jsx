import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mgvwbovv");

    if (state.succeeded) {
        return <p className="text-center text-green-500 text-lg">Thanks for joining!</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-4">
            {/* Heading */}
            <h1 className="font-poppins text-4xl text-center text-gray-200 mb-8">Contact Me</h1>

            {/* Form Container */}
            <div className="w-full max-w-md">
                <form
                    onSubmit={handleSubmit}
                    className="bg-stone-900 p-8 rounded-lg shadow-lg"
                >
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full border border-gray-300 rounded-md p-2 mb-4"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    {/* Centered Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-36 text-white border-2 border-purple-500 p-2 rounded-xl hover:bg-purple-600 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
