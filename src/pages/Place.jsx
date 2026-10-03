import Header from "../components/Header";
import Footer from "../components/Footer";
import places from "../data/places";

function Place() {

    const path = window.location.pathname;
    const id = path.split("/")[2];

    const place = places.find((item) => item.id === id);

    if (!place) {
        return (
            <div>

                <Header />

                <main className="place-page">

                    <section className="place-details">

                        <h2>Place Not Found</h2>

                        <p>
                            The historical place you are looking for does not exist.
                        </p>

                        <a
                            href="/highlights"
                            className="back-button"
                        >
                            ← Back to Highlights
                        </a>

                    </section>

                </main>

                <Footer />

            </div>
        );
    }

    return (
        <div>

            <Header />

            <main className="place-page">

                <section className="place-details">

                    <h2>{place.name}</h2>

                    <img
                        src={place.image}
                        alt={place.name}
                    />

                    <p>
                        {place.description}
                    </p>

                    <a
                        href="/highlights"
                        className="back-button"
                    >
                        ← Back to Highlights
                    </a>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Place;