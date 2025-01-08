function MyButton() {
  return (
    <button onClick={() => alert("hehe")}>
      I'm a button hehe
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
