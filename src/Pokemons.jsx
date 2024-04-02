export default function Pokemon({ name, id, isCatch, togglePokemon }) {

  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  function handleClick() {
    return togglePokemon(id)
  } 
  return (
    <div className="pokemon" key={ id } style={{
      backgroundColor: isCatch ? '#BA0804' : '#019A13'
    }}>
      <li>{name}</li>  
      <img
        src={url + id + ".png"}
        alt={name}
      />
      <button 
        onClick={handleClick}
      >
        {isCatch ? 'Отпустить' : 'Поймать'}
      </button>
    </div>
  );
}