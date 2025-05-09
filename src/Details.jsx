export function Details({ title, setTitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>hello world</div>
      <button onClick={() => setTitle("NewTitle")}>click</button>
    </div>
  );
}
