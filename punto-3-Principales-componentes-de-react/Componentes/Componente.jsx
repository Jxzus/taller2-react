function Saludo() {
  return <h1>Hola, mundo</h1>;
}

function App() {
  return (
    <div>
      <Saludo />
      <Saludo />
    </div>
  );
}

export default App;
