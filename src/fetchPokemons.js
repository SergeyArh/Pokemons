export function fetchPokemons(pageNumber, pageSize) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber * pageSize}&limit=${pageSize}`)
      .then(response => response.json())
      .then(data => {
        const countAll = data.count;
        const res = data.results.map(item => {
          return {
            id: item.url.slice(34, -1),
            name: item.name,
          }
        })
        return {
          allPokemons: countAll,
          pokemons: res
        }
      })
} 