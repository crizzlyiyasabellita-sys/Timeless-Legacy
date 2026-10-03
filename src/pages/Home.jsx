import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {

    const [showMessage, setShowMessage] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 5000);

        event.target.reset();
    }

    return (
        <div>

            <Header />

            <main className="home-page">

                <div className="home-layout">

                    <section className="login-section">

                        <div className="login-container">

                            <h2>
                                Welcome to Timeless Legacy
                            </h2>

                            <p>
                                Discover the rich history, culture,
                                and heritage of Cebu.
                            </p>

                            <form
                                id="login-form"
                                onSubmit={handleSubmit}
                            >

                                <div className="form-group">

                                    <label htmlFor="email">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="password">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                    />

                                </div>


                                <button type="submit">
                                    Login
                                </button>

                            </form>


                            {showMessage && (
                                <p className="login-success-message">
                                    Login successful!
                                </p>
                            )}

                        </div>

                    </section>

                    <div className="home-right">

                        <section className="intro-section">

                            <h2>
                                Explore Cebu's Heritage
                            </h2>

                            <p>
                                Timeless Legacy is a website dedicated
                                to showcasing the historical places and
                                cultural heritage of Cebu.
                            </p>

                            <p>
                                Explore the different landmarks and
                                discover the stories behind Cebu's
                                rich history.
                            </p>

                            <h2>
                                Featured Historical Places
                            </h2>

                            <div className="featured-images">

                                <img
                                    src="/media/magellan1.jfif"
                                    alt="Magellan's Cross"
                                />

                                <img
                                    src="/media/cathedral1.jfif"
                                    alt="Cebu Metropolitan Cathedral"
                                />

                                <img
                                    src="/media/fort1.jfif"
                                    alt="Fort San Pedro"
                                />

                                <img
                                    src="/media/museo1.jfif"
                                    alt="Museo Sugbo"
                                />

                            </div>

                        </section>

                    </div>

                </div>

            </main>

            <Footer />

        </div>
    );
}

export default Home;