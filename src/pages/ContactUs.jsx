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

            <main className="contact-page">

                <section className="contact-container">

                    <h2>Contact Us</h2>

                    <p>
                        If you have any questions, comments, or suggestions,
                        feel free to contact us.
                    </p>

                    <form
                        id="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="form-group">
                            <label htmlFor="name">Name</label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <button type="submit">
                            Submit
                        </button>

                    </form>

                    {showMessage && (
                        <p
                            id="thank-you-message"
                            className="thank-you-message"
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