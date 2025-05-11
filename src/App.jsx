import styles from "./App.module.scss";


export function App () { 
  const [isLOggedIn, setIsLoggedIn] = useState(false)
  
  return <div className={styles.layout}>
    {isLOggedIn ? 
  <button onClick={() => setIsLoggedIn}>
    Выйти из системы 
  </button>  
  }
  </div>
}