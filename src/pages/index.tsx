import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {
  Linkedin,
  Twitter,
  Home as HomeIcon,
  GitHub,
  GitBranch,
  Gitlab,
} from "react-feather";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Samet Mutevelli</title>
        <meta name="description" content="Samet Mutevelli - personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Image
        src="/profile.jpeg"
        alt="Samet Mutevelli"
        width={200}
        height={200}
        className={styles.profileImage}
      />
      <div className={styles.welcomeHeader}>Hello, my name is Samet.</div>
      <div className={styles.welcomeText}>
        I am a full-stack web developer working at Google. I like building for
        web.
      </div>
      <div className={styles.icons}>
        <Link href="https://github.com/sametweb" target="_blank">
          <GitHub size={20} color="#171515" />
        </Link>
        <Link href="https://twitter.com/sametmutevelli" target="_blank">
          <Twitter size={20} color="#1DA1F2" />
        </Link>
        <Link href="https://linkedin.com/in/samet-mutevelli" target="_blank">
          <Linkedin size={20} color="#0072b1" />
        </Link>
      </div>
    </div>
  );
}
