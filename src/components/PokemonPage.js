import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    (async () => {
    const data = await fetch("http://localhost:3001/pokemon")
    const resp = await data.json()
    setPokemon(resp)
  })()
  },[])

  const handleSearch = e => setSearch(e.target.value)

  const newPokemon = newPokeObj => setPokemon([...pokemon, newPokeObj])
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm newPokemon={newPokemon}/>
      <br />
      <Search handleSearch={handleSearch} search={search}/>
      <br />
      <PokemonCollection pokemon={pokemon} search={search}/>
    </Container>
  );
}

export default PokemonPage;
