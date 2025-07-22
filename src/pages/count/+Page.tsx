import { useState } from "react";
import { Increment } from "./components/buttons/increment";
import { Decrement } from "./components/buttons/decrement";
import { Initialize } from "./components/buttons/initialize";
import * as css from "./styles.module.scss";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className={css.main}>
      <h1>COUNTER</h1>
      <p className={css.count}>{count}</p>
      <div className={css.buttons}>
      <Decrement  setCount={setCount} />
      <Initialize  setCount={setCount} />
      <Increment  setCount={setCount} />
      </div>
    </div>
  );
}
