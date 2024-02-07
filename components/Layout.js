import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout(props) {
  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>{props.title}</title>
      </Head>

      <div className="container px-5 mx-auto">
        <Navbar />
        <div className="py-10">{props.children}</div>

        <footer className="text-gray-500 text-sm text-center py-4">
          © 2024 mealapp. All Right Reserved
        </footer>
      </div>
    </main>
  );
}
