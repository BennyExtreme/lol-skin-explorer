import Image from "../components/image";
import { useEffect, useMemo } from "react";
import Head from "next/head";
import { useProps } from "../data/contexts";
import styles from "../styles/index.module.scss";
import Link from "next/link";
import {
  asset,
  classes,
  makeDescription,
  makeTitle,
  useArrowNavigation,
  useLocalStorageState,
} from "../data/helpers";
import { store } from "../data/store";
import { Nav } from "../components/nav";
import { Layout } from "../components";
import { prepareAdditions } from "../components/new-additions/helpers";

function ChampionsList({ role }) {
  const { champions } = useProps();
  const filteredChamps = useMemo(() => {
    if (!role) return champions;

    return champions.filter((c) => c.roles.includes(role));
  }, [champions, role]);

  return (
    <div className={styles.champions}>
      {filteredChamps.map((c) => (
        <Link
          key={c.id}
          href="/champions/[champId]"
          as={`/champions/${c.key}`}
          prefetch={false}
        >
          <a>
            <Image
              unoptimized
              className={styles.img}
              src={asset(c.squarePortraitPath)}
              alt={c.name}
              width={80}
              height={80}
            />
            <div>{c.name}</div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default function Index() {
  const [champRole, setChampRole] = useLocalStorageState(
    "champs_index__champRole",
    ""
  );

  useEffect(() => {
    localStorage.lastIndex = "/";
  }, []);

  const handlers = useArrowNavigation("/skinlines", "/universes");

  const { champions } = useProps();

  return (
    <>
      <Head>
        {makeTitle()}
        {makeDescription(
          `Browse through League of Legends skins from the comfort of your browser. Take a look at these ${champions.length} champions!`
        )}
      </Head>
      <div {...handlers} className={styles.container}>
        <Nav
          active="champions"
          filters={
            <label>
              <span>Role</span>
              <select
                value={champRole}
                onChange={(e) => setChampRole(e.target.value)}
              >
                <option value="">All</option>
                {Object.entries(classes).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </select>
            </label>
          }
        />
        <main>
          <ChampionsList role={champRole} />
        </main>
      </div>
    </>
  );
}

Index.getLayout = (page) => <Layout withNew>{page}</Layout>;

export async function getStaticProps() {
  await store.fetch();

  const champions = await store.patch.champions;

  return {
    props: {
      champions,
      patch: store.patch.fullVersionString,
      added: await prepareAdditions(),
    },
  };
}
