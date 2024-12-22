import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  //Fix hydration
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}
