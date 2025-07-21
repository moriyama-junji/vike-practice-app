import { useState } from "react";
import { Decrement } from "./components/button/decrement";
import styles from "./styles.module.scss";
import { Increment } from "./components/button/increment";
import { Initialize } from "./components/button/initialize";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.main}>
      <h1 className={styles.counter_main}>COUNTER</h1>
      <p className={styles.count}>{count}</p>
      <div className={styles.buttons}>
      <Decrement count={count} setCount={setCount} />
      <Initialize count={count} setCount={setCount} />
      <Increment count={count} setCount={setCount} />
      </div>
    </div>
  );
}
