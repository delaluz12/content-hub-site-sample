import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Content Hub Experience Edge Demo";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta property="og:image" content="/images/UI_Main_horizontal_4c.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div>
            <Image
              priority
              src="/images/UI_Main_horizontal_4c.png"
              //className={utilStyles.borderCircle}
              height={1170}
              width={2048}
              style={{ width: "100%", height: "auto" }}
              sizes="100vw"
              alt={siteTitle}
            />
            <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
          </div>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/UI_Main_horizontal_4c.png"
                //className={utilStyles.borderCircle}
                height={117}
                width={205}
                alt={siteTitle}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {siteTitle}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
