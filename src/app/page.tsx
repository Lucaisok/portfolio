import type { Metadata } from "next";
import { Hero } from "../components/Home/Hero/Hero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Luca Tomarelli's portfolio of scalable digital products across web and mobile.",
};

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
};

export default Home;
