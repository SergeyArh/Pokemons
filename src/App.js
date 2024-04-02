import "./App.css";
import React, { useEffect } from "react";
import Pokemon from "./Pokemons";
import Catch from "./Catch";
import { useState } from "react";
import {fetchPokemons} from "./fetchPokemons"
import Select from "./Select";

function App() {
  const [catchPokemons, setCatchPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(24);
  const [allPokemons, setAllPokemons] = useState(0);
  const [isLoad, setIsLoad] = useState(false)
  
  const countPages = Math.floor(allPokemons / pageSize);
  

  // https://pokeapi.co/api/v2/pokemon/   fetch
  // https://pokeapi.co/api/v2/pokemon/?offset=123&limit=12

  // сделать кнопку, по нажатию на которую загружаются данные 

  function togglePokemon(id) {
    if (catchPokemons.includes(id)) {
      return setCatchPokemons(catchPokemons.filter(item => item !== id))
    }
    return setCatchPokemons([id, ...catchPokemons])
  }
  useEffect(() => {
    setIsLoad(true);
    fetchPokemons(pageNumber, pageSize).then(response => {
      setAllPokemons(response.allPokemons);
      setPokemons(response.pokemons);
      setIsLoad(false);
    })
  }, [pageNumber, pageSize])

  return (
    <>
      <Catch countCatch={catchPokemons.length} countAllPokemons={allPokemons}/>
      <div className="card">
        {pokemons.map(item => (
          <Pokemon name={item.name} id={item.id} isCatch={catchPokemons.includes(item.id)} togglePokemon={togglePokemon}/>
          ))}
      </div>
      <button className="pagination" onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 0 || isLoad}>Назад</button>
      <button className="pagination" onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === countPages || isLoad}>Вперед</button>
      <br></br>
      <Select selectPokemons={setPageSize} target={pageSize}/>
    </>
  );
}
 
// - поправить вычсление офсета
// - дизейблоить кнопку, если нет страниц вперед или назад
// - хранить общее количество покемонов
// - сделать селект с выбором количества покемонов на странице

export default App;