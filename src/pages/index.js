import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Attila’s First Website</title>
        <meta name="description" content="Learning front-end development step by step" />
      </Head>

      <header className={styles.header}>
        <h1>Attila’s First Website 🚀</h1>
        <nav>
          <a href="#home">Home</a> | 
          <a href="#about">About</a> | 
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className={styles.main}>

        {/* HERO SECTION */}
        <section className={styles.section}>
          <p>Brand Story</p>

          <h1>
            We let agencis focus on creative work, while we take full responsibility for building painless web solutions
          </h1>
        </section>

        {/* THE WHY SECTION */}

      <section className={styles.section}>
        <p>The Why, How and What</p>

        <h2>Our Vision (The Why)</h2>
        <p>Our vision is to estabilish long-term partnerships with Eurpoe's best creative agencies and felived them painless web solutions.</p>

        <h2>Our Mission (The How)</h2>
        <p>By delivering stable, fast, future-proof web solutions that are raising productivity and lowering core problems for our partners.</p>

        <h2>Our business (The What)</h2>
        <p>CamelWeb provides advanced technological web development solutions trough partnerships withn European creative agencies.</p>





      </section>

      </main>

      <footer className={styles.footer}>
        <p>© 2025 Attila Hajdó</p>
      </footer>
    </>
  );
}
