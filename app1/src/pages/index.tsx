import styles from '../styles/Home.module.css';
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
      </main>
    </div>
  );
}
