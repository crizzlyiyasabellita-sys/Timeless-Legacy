import Header from "../components/Header";
import Footer from "../components/Footer";
import places from "../data/places";

function Highlights() {
    return (
        <div>

            <Header />

            <main className="highlights-page">

                <section className="highlights-intro">

                    <h2>Cebu Heritage Highlights</h2>

                    <p>
                        Explore the historical places and cultural
                        landmarks featured by Timeless Legacy.
                    </p>

                </section>


                <section className="places-grid">

                    {places.map((place) => (

                        <div
                            className="place-card"
                            key={place.id}
                        >

                            <img
                                src={place.image}
                                alt={place.name}
                            />

                            <div className="place-card-content">

                                <h3>
                                    {place.name}
                                </h3>

                                <p>
                                    {place.description}
                                </p>

                                <button
                                    onClick={() => {
                                        window.location.href =
                                            `/place/${place.id}`;
                                    }}
                                >
                                    Learn More
                                </button>

                            </div>

                        </div>

                    ))}

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Highlights;