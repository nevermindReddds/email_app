import styles from "./App.module.scss";
export function App() {
  return (
    <div className={styles.layout}>
      <h1>First component</h1>
      <div>hello world</div>
      <button>click</button>
    </div>
  );
}
