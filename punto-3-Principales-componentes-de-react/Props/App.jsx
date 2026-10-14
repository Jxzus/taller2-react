function Tarjeta({ titulo, precio }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>${precio}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Tarjeta titulo="Libro" precio={20} />
      <Tarjeta titulo="Cuaderno" precio={5} />
    </>
  );
}

export default App;
