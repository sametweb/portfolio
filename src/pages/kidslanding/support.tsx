/* eslint-disable react/no-unescaped-entities */
import styles from "@/styles/Home.module.css";
import Head from "next/head";

interface Props {}

function Support(props: Props) {
  const {} = props;

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Kid's Landing - Support</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <strong>Kid's Landing - Support</strong>
      <p>
        If you have any questions or suggestions about Kid's Landing, do not
        hesitate to contact me at{" "}
        <a href="mailto:mrmutevelli@gmail.com" className={styles.link}>
          mrmutevelli@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

export default Support;
