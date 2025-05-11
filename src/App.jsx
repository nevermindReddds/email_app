import { useMemo, useRef, useState } from "react";
import styles from "./App.module.scss";
import { Details } from "./Details";

export function App() {
  const [details, setDetails] = useState({
    isLoading: false,
    title: "useEffect",
    description: "Hello World!",
    buttonText: "Click",
  });

  const imageRef = useRef(null);

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(10);

  const result = useMemo(() => {
    return count * multiplier;
  }, [count, multiplier]);

  return (
    <div className={styles.layout}>
      <img ref={imageRef} src="/mid_348779_607834.jpg" width={300} />

      <button onClick={() => setCount(0)}>Сбросить результат</button>

      <div>Результат: {result}</div>

      <button onClick={() => setCount(count + 1)}>Увеличить счетчик</button>
      <button onClick={() => setMultiplier(multiplier + 10)}>
        Увеличить множитель
      </button>

      {details.isLoading && <p>Loading...</p>}
      <Details details={details} setDetails={setDetails} />
    </div>
  );
}
