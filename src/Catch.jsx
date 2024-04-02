function Catch({ countCatch, countAllPokemons }) {
  return (
    <div className="catch">
      <h2>Поймано покемонов</h2>
      <h1>{countCatch}/{countAllPokemons}</h1>
    </div>
  );
}

export default Catch