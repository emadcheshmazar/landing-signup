import Head from "next/head";
import Home from "../components/home";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function Main() {
  return (
    <div>
      <Head>
        <title>Fiber</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter;700&display=swap"
        />
      </Head>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
