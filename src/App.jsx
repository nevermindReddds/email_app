import { useRef, useState } from "react";
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

  const onClick = () => {
    if (!imageRef.current) return;
    imageRef.current.style.BorderRadius = "20px";
    imageRef.current.style.BoxShadow = "0 3px 6px rgba(0,0,0, .1";
    console.log(imageRef.current);
  };

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(10);

  const result = count * multiplier;

  return (
    <div className={styles.layout}>
      <img ref={imageRef} src="/mid_348779_607834.jpg" width={300} />

      <div>Результат: {result}</div>

      <button onClick={() => setCount(count + 1)}>Увеличить счетчик</button>
      <button onClick={() => setMultiplier(multiplier + 10)}>
        Увеличить множитель
      </button>
      <button onClick={onClick}>Change image</button>
      {details.isLoading && <p>Loading...</p>}
      <Details details={details} setDetails={setDetails} />
    </div>
  );
}
