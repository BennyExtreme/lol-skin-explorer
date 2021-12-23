import Image from "next/image";
import { useEffect, useMemo } from "react";
import Head from "next/head";
import { Header } from "../../components/header";
import { Footer, FooterContainer } from "../../components/footer";
import { useProps } from "../../data/contexts";
import styles from "../../styles/index.module.scss";
import Link from "next/link";
import { asset, classes, useLocalStorageState } from "../../data/helpers";
import { store } from "../../data/store";
import { Folder, Globe, User } from "react-feather";

function SkinlinesList() {
  const { skinlines } = useProps();
  return (
    <div className={styles.skinlines}>
      {skinlines.map((l) => (
        <div key={l.id}>
          <Link
            href={{
              pathname: "/skinlines/[skinlineId]",
              query: { skinlineId: l.id },
            }}
            prefetch={false}
          >
            <a>{l.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Index() {
  useEffect(() => {
    localStorage.lastIndex = "/skinlines";
  }, []);

  return (
    <>
      <Head>
        <title>Skinlines &middot; Skin Explorer</title>
      </Head>
      <FooterContainer>
        <div>
          <Header />
          <div className={styles.container}>
            <nav>
              <div className={styles.tabs}>
                <Link href="/">
                  <a>
                    <User />
                    Champions
                  </a>
                </Link>
                <Link href="/universes">
                  <a>
                    <Globe />
                    Universes
                  </a>
                </Link>
                <Link href="/skinlines">
                  <a className={styles.active}>
                    <Folder />
                    Skinlines
                  </a>
                </Link>
              </div>
            </nav>
            <main>
              <SkinlinesList />
            </main>
          </div>
        </div>
        <Footer />
      </FooterContainer>
    </>
  );
}

export async function getStaticProps() {
  await store.fetch();

  const skinlines = await store.patch.skinlines;

  return {
    props: {
      skinlines,
      patch: store.patch.fullVersionString,
    },
    revalidate: 60,
  };
}