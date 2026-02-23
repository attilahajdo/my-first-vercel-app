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
        <section id="home">
          <h2>Welcome</h2>
          <p>This is my first custom page built with Next.js.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>I’m learning front-end development step by step — HTML, CSS, and JavaScript in real projects.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Find me at: <strong>myemail@example.com</strong></p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Attila Hajdó</p>
      </footer>
    </>
  );
}
