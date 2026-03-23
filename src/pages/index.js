import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Attila’s First Website</title>
        <meta name="description" content="Learning front-end development step by step" />
      </Head>

      {/* HEADER */}

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <Link href="/">
              <Image 
              src="/images/camelweb-logo.svg" 
              alt="CamelWeb logo"
              width={182}
              height={18}
               />
            </Link>
          </div>
          <nav className={styles.navigation}>
            <div className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          <span className={styles.divider}></span>
        </div>      
      </header>

      {/* HERO SECTION */}
        <section className={`${styles.section} ${styles.hero}`}>
          
          <div className={styles.heroInner}>
            <p className={styles.heroLabel}>Brand Story</p>
            <h1 className={styles.heroTitle}>
              We let agencis focus on creative work, while we take full responsibility for building painless web solutions.
            </h1>
            <div className={styles.heroArrow}>
              <Image
                src="/images/arrow-down.svg"
                alt="Arrow Down"
                width={13}
                height={13}
              />
            </div>
          </div>
          <div className={styles.heroNav}>
            <button className={styles.navBtn}>
              <Image 
                src="/images/arrow-left.svg"
                alt="Arrow left"
                width={32}
                height={32}
              />
            </button>
            <button className={styles.navBtn}>
              <Image 
                src="/images/arrow-right.svg"
                alt="Arrow right"
                width={32}
                height={32}
              />
            </button>
          </div>
        </section>

      <main className={styles.main}>

        

        {/* THE WHY SECTION */}

      <section className={`${styles.section} ${styles.whySection}`}>
        <div className={styles.container}>
          <h4 className={styles.sectionLabel}>The Why, How and What</h4>

        <div className={styles.columns}>
          <div className={styles.columnBlock}>
            <h3>Our Vision<br /> (The Why)</h3>
            <p>Our vision is to estabilish long-term partnerships with Eurpoe's best creative agencies and felived them painless web solutions.</p>
          </div>
          <div className={styles.columnBlock}>
            <h3>Our Mission<br /> (The How)</h3>
            <p>By delivering stable, fast, future-proof web solutions that are raising productivity and lowering core problems for our partners.</p>
          </div>
          <div className={styles.columnBlock}>
            <h3>Our business<br /> (The What)</h3>
            <p>CamelWeb provides advanced technological web development solutions trough partnerships withn European creative agencies.</p>
          </div>
        </div>
        </div>
      </section>

      {/* THE WORK PHILOSOPHY SECTION */}

      <section className={` ${styles.section} ${styles.workSection}`}> 
        <div className={styles.container}>
          <h4 className={styles.sectionLabel}>Work Philosophy</h4>
          <h3 className={styles.workHeading}>
            We work smart. We know when there is no need to reinvent the wheel and when we have to innovate. We develop hi-tech elements for modular web echnology,
            and we call this web DNA. We let agencies focus on creative work and take full responsibility for building faster, better, modern web solutions.
          </h3>
        </div>
      </section>

      {/* NEXT SECTION */}

      <section className={` ${styles.section} ${styles.nextSection}`}>
        <div className={styles.container}>
          <div className={styles.nextWrapper}>
            <div className={styles.nextText}>
              <p className={poppins.className}>Next</p>
              <h2>Brand Positioning</h2>
            </div>
            <div>
              <a href="#">
                <img src="/images/next-section-right-arrow.svg" alt="Next article" />
              </a>
            </div>
          </div>
        </div>
      </section>

      </main>

      <footer className={styles.footerBottom}>
        <div className={styles.footerBottomWrapper}>

          <div className={styles.left}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                src="/images/camelweb-black-logo.svg"
                alt="Camelweb black logo"
                width={90}
                height={65}
                />
              </Link>
            </div>
            <p>© 2022 Copyrights Camelweb. All right reserved.</p>
          </div>

          <div className={styles.center}>
            <p>Branding by High Contrast.</p>
          </div>

          <div className={styles.right}>
            <div className={styles.social}>
              <Link href="#">
                <Image 
                src="/images/twitter-logo.svg"
                alt="Twitter logo"
                width={20}
                height={20}
                />
              </Link>
              <Link href="#">
                <Image
                src="/images/linked-in-logo.svg"
                alt="LinkedIn logo"
                width={20}
                height={20}
                />
              </Link>
            </div>
            <div className={styles.links}>
              <Link href="#">Help & Support</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Term of Use</Link>
              <Link href="#">Cookie Policy</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

