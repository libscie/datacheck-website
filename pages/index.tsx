import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Datacheck</title>
        <meta
          name="description"
          content="1 in 20 open datasets contain privacy violations. Prevent sharing privacy violations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <LogoCloud />
      </main>
    </div>
  );
}
