import { useState } from "react";
import Header from "../components/Header";

function ContactUs() {

    const [showMessage, setShowMessage] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const confirmed = window.confirm(
            "Are you sure you want to submit the form?"
        );

        if (confirmed) {
            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
            }, 5000);

            event.target.reset();
        }
    }

    return (
        <div>

            <Header />

            <main className="min-h-[80vh] bg-[#cdb695] p-5 lg:p-[50px] flex items-center justify-center">

                <section className="w-full max-w-[800px] bg-[#e6d5b8] p-5 lg:p-[40px] border-[8px] border-white/85 rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.18)]">

                    <h2 className="text-[30px] lg:text-[40px] text-[#4b4b3e] font-bold text-center mb-[15px]">
                        Contact Us
                    </h2>

                    <p className="text-[16px] lg:text-[18px] leading-[1.7] text-[#4b4b43] text-center mb-[30px]">
                        If you have any questions, comments, or suggestions,
                        feel free to contact us.
                    </p>

                    <form
                        id="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-[#4b4b3e] font-bold"
                            >
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="w-full p-3 bg-[#f3e8d2] border border-[#9c8c70] rounded-[5px] text-[#4b4b3e] text-base focus:outline-2 focus:outline-[#777866]"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-[#4b4b3e] font-bold"
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="w-full p-3 bg-[#f3e8d2] border border-[#9c8c70] rounded-[5px] text-[#4b4b3e] text-base focus:outline-2 focus:outline-[#777866]"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-[#4b4b3e] font-bold"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                rows="6"
                                required
                                className="w-full p-3 bg-[#f3e8d2] border border-[#9c8c70] rounded-[5px] text-[#4b4b3e] text-base resize-y focus:outline-2 focus:outline-[#777866]"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="block mx-auto mt-[10px] px-[30px] py-3 border-0 rounded-[5px] bg-[#5b5042] text-white text-base font-bold cursor-pointer transition duration-200 hover:bg-[#777866]"
                        >
                            Submit
                        </button>

                    </form>

                    {showMessage && (
                        <p
                            id="thank-you-message"
                            className="mt-5 p-3 bg-[#d9d4b8] text-[#4b4b3e] border border-[#8f8d72] rounded-[5px] text-center font-bold"
                        >
                            Thank you for contacting Timeless Legacy!
                        </p>
                    )}

                </section>

            </main>

            <footer />

        </div>
    );
}

export default ContactUs;
