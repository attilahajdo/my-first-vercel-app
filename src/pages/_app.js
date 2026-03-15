import "@/styles/globals.css";

import { Syne } from "next/font/google";
const syne = Syne({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
  <main className={syne.className}>
  <Component {...pageProps} />
  </main>
);}
