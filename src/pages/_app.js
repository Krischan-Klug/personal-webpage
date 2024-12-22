import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  //Fix hydration
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return <Component {...pageProps} />;
}
