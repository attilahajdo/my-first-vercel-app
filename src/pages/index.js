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

      {/* HERO SECTION */}
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.heroInner}>
            <p className={styles.heroLabel}>Brand Story</p>

            <h1 className={styles.heroTitle}>
              We let agencis focus on creative work, while we take full responsibility for building painless web solutions.
            </h1>
            <span className={styles.heroArrow}>↓</span>
          </div>
        </section>

      <main className={styles.main}>

        

        {/* THE WHY SECTION */}

      <section className={styles.section}>
        <p className={styles.sectionLabel}>The Why, How and What</p>

        <div className={styles.columns}>
          <div className={styles.columnBlock}>
            <h2>Our Vision (The Why)</h2>
            <p>Our vision is to estabilish long-term partnerships with Eurpoe's best creative agencies and felived them painless web solutions.</p>
          </div>
          <div className={styles.columnBlock}>
            <h2>Our Mission (The How)</h2>
            <p>By delivering stable, fast, future-proof web solutions that are raising productivity and lowering core problems for our partners.</p>
          </div>
          <div className={styles.columnBlock}>
            <h2>Our business (The What)</h2>
            <p>CamelWeb provides advanced technological web development solutions trough partnerships withn European creative agencies.</p>
          </div>

          
        </div>

        
      </section>

      {/* THE WORK PHILOSOPHY SECTION */}

      <section className={styles.section}>
        <p>Work Philosophy</p>

        <p>
          We work smart. We know when there is no need to reinvent the wheel and when we have to innovate. We develop hi-tech elements for modular web echnology,
          and we call this web DNA. We let agencies focus on creative work and take full responsibility for building faster, better, modern web solutions.
        </p>
      </section>

      {/* NEXT SECTION */}

      <section className={styles.section}>

        <p>Next</p>

        <div>
          <h2>Brand Positioning</h2>
          <span>→</span>
        </div>

      </section>

      </main>

      <footer className={styles.footer}>
        <p>© 2025 Attila Hajdó</p>
      </footer>
    </>
  );
}
