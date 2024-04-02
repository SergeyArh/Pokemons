const values = [12, 24, 36, 48];

export default function Select({selectPokemons, target}) {
  function onChangeSelect(event) {
    selectPokemons(Number(event.target.value));
  }

  return (
    <select className="select" onChange={onChangeSelect} value={target}>
      {values.map(value => (
        <option value={value}>{value} покемонов</option>
      ))}
    </select>
  )
}