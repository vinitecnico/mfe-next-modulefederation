import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import pokemons from "../services/pokemons";
import { IPokemonProps, IResult } from "../types";
import Link from "next/link";
import Image from 'next/image'

export async function getStaticProps() {
  const allPokemons = await pokemons();

  return {
    props: {
      pokemons: allPokemons,
    },
  };
}

const Home: React.FC<IPokemonProps> = ({ pokemons }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <ul>
          {pokemons?.results.map((item: IResult) => (
            <li key={item.name}>
              <Link href={`/pokemon/${item?.name}`}>{item?.name}</Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" className={styles.logo} width="60" height="60"/>
        </a>
      </footer>
    </div>
  );
};

export default Home;
