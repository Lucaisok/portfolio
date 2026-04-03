import { Hero } from "../components/Home/Hero/Hero";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
};

export default Home;
