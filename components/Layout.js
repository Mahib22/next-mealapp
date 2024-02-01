import Head from "next/head";
import { Inter } from "next/font/google";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout(props) {
  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>{props.title}</title>
      </Head>

      {props.children}
      <Footer />
    </main>
  );
}
