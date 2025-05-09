import { useState } from "react";
import styles from "./App.module.scss";
import { Details } from "./Details";

export function App() {
  const [title, setTitle] = useState("Null");
  return (
    <div className={styles.layout}>
      <img src="/mid_348779_607834.jpg" width={300} />

      <Details title={title} setTitle={setTitle} />
    </div>
  );
}
