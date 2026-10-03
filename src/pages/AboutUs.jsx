import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutUs() {
    return (
        <div className="about-page-wrapper">

            <Header />

            <main className="about-page">

                <section className="about-card">

                    <h2>About Us</h2>

                    <h3>Description:</h3>

                    <p className="about-description">
                        The website is a digital guide showcasing Cebu's rich
                        history and cultural heritage through its iconic
                        landmarks. It offers detailed articles, photos, and
                        interactive maps to explore significant sites, such as
                        Magellan's Cross, Fort San Pedro, and the Basilica
                        Minore del Santo Niño. Designed for history enthusiasts,
                        tourists, and students, it provides insights into
                        Cebu's role in shaping Philippine history, including
                        its trade, culture, and religion. The site also
                        highlights cultural events, festivals, and practical
                        information for visitors, promoting the preservation
                        and appreciation of Cebu's heritage. With an engaging
                        interface, it serves as a valuable resource for both
                        locals and visitors interested in Cebu's past.
                    </p>

                    <div className="about-gallery">

                        <img
                            src="/media/magellan1.jfif"
                            alt="Magellan's Cross"
                        />

                        <img
                            src="/media/fort1.jfif"
                            alt="Fort San Pedro"
                        />

                        <img
                            src="/media/casa1.jfif"
                            alt="Casa Gorordo Museum"
                        />

                        <img
                            src="/media/yap-san1.jfif"
                            alt="Yap-San Diego Ancestral House"
                        />

                        <img
                            src="/media/heritage1.jfif"
                            alt="Heritage of Cebu Monument"
                        />

                        <img
                            src="/media/cathedral1.jfif"
                            alt="Cebu Metropolitan Cathedral"
                        />

                        <img
                            src="/media/museo1.jfif"
                            alt="Museo Sugbo"
                        />

                        <img
                            src="/media/colon1.jfif"
                            alt="Colon Street"
                        />

                        <img
                            src="/media/plaza1.jfif"
                            alt="Plaza Independencia"
                        />

                    </div>

                    <section className="objectives-section">

                        <h2>Our Objectives</h2>

                        <ul>
                            <li>
                                To showcase the historical landmarks of Cebu.
                            </li>

                            <li>
                                To provide information about Cebu's cultural
                                heritage.
                            </li>

                            <li>
                                To encourage people to appreciate Cebu's
                                history.
                            </li>

                            <li>
                                To preserve awareness of important historical
                                places.
                            </li>
                        </ul>

                    </section>



                </section>

            </main>

            <Footer />

        </div>
    );
}

export default AboutUs;