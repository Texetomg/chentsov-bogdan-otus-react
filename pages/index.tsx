import styles from "./index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/tasks">Tasks</Link>
      <Link href="/users">Users</Link>
    </main>
  );
}
