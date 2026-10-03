import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Highlights from "./pages/Highlights";
import Gallery from "./pages/Gallery";
import Place from "./pages/Place";
import ContactUs from "./pages/ContactUs";

function App() {

    const path = window.location.pathname;

    if (path === "/") {
        return <Home />;
    }

    if (path === "/about") {
        return <AboutUs />;
    }

    if (path === "/highlights") {
        return <Highlights />;
    }

    if (path === "/gallery") {
        return <Gallery />;
    }

    if (path === "/contact") {
        return <ContactUs />;
    }

    if (path.startsWith("/place/")) {
        return <Place />;
    }

    return <Home />;
}

export default App;
