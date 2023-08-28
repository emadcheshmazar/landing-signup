import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/scss/style.scss";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
