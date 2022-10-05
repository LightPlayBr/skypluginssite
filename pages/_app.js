import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div>

            <Navigation/>

            <Component {...pageProps} />

            <Footer/>

        </div>
       );
}

export default MyApp;