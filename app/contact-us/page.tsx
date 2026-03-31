"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactUs() {
    const labelClassName = "text-base tracking-wide text-[#FFFAF0] sm:text-lg";

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "Greece",
        message: "",
        newsletter: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        setForm({
            ...form,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <>
            <div
                className="fixed inset-y-0 right-0 hidden w-1/2 bg-black lg:block"
                aria-hidden="true"
            />

            <section className="relative z-10 overflow-x-clip pt-28 pb-12 lg:min-h-[calc(100dvh-6rem)] lg:overflow-hidden lg:py-0">

                <div className="grid h-full grid-cols-1 lg:grid-cols-[50%_50%]">

                    {/* LEFT */}
                    <div className="flex items-center px-6 pb-10 sm:px-10 lg:px-20 lg:pb-0">
                        <div className="max-w-xl">
                            <h1 className="text-[3.5rem] leading-[0.9] font-semibold text-black sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem]">
                                Get in <br /> touch
                            </h1>

                            <p className="mt-5 max-w-md text-base text-gray-600 sm:mt-6 sm:text-lg">
                                Not sure where to start?
                                <br />
                                Tell us about your product to get the ball rolling.
                            </p>

                            <Link
                                href="/contact-us/careers"
                                className="mt-6 inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-black"
                            >
                                Looking for a job? →
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        className="flex items-center justify-center bg-black px-4 py-8 sm:px-6 lg:bg-transparent"
                        data-cursor-theme="dark"
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-2xl rounded-[1.75rem] border-2 border-[#FFFAF0] p-6 text-[#FFFAF0] sm:rounded-3xl sm:p-8 lg:max-w-3xl lg:p-10"
                        >
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">

                                <div>
                                    <label className={labelClassName}>
                                        FULL NAME
                                    </label>
                                    <input
                                        name="name"
                                        required
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-none border-b-2 border-[#FFFAF0] bg-transparent py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div>
                                    <label className={labelClassName}>
                                        EMAIL
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-none border-b-2 border-[#FFFAF0] bg-transparent py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div>
                                    <label className={labelClassName}>
                                        PHONE NUMBER
                                    </label>
                                    <input
                                        name="phone"
                                        required
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-none border-b-2 border-[#FFFAF0] bg-transparent py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div>
                                    <label className={labelClassName}>
                                        SUBJECT
                                    </label>
                                    <select className="mt-2 w-full rounded-none border-b-2 border-[#FFFAF0] bg-transparent py-2 text-[#FFFAF0] focus:outline-none">
                                        <option>Select one of the following</option>
                                        <option>Project Inquiry</option>
                                        <option>Partnership</option>
                                        <option>General Question</option>
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className={labelClassName}>
                                        COMPANY
                                    </label>
                                    <input
                                        name="company"
                                        required
                                        onChange={handleChange}
                                        className="mt-2 w-full rounded-none border-b-2 border-[#FFFAF0] bg-transparent py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className={labelClassName}>
                                        MESSAGE
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        onChange={handleChange}
                                        placeholder="Write your message"
                                        className="mt-2 w-full rounded-none border-b-2 border-[#FFFAF0] bg-transparent py-2 outline-none resize-none focus:border-white"
                                    />
                                </div>

                                {/* <div className="md:col-span-2 flex items-center gap-3 text-gray-400 text-sm">
                                    <input
                                        type="checkbox"
                                        name="newsletter"
                                        onChange={handleChange}
                                    />
                                    I want to receive news and updates once in a while
                                </div> */}

                            </div>

                            <button
                                type="submit"
                                className="mt-8 w-full rounded-full border-2 border-[#FFFAF0] py-4 transition hover:bg-[#FFFAF0] hover:text-black sm:mt-10"
                            >
                                SEND MESSAGE
                            </button>

                        </form>

                    </div>
                </div>
            </section>
        </>
    );
}
