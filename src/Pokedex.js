import Pokecard from "./Pokecard";

function Pokedex({pokemonsData}) {
  console.log("here is pokedex!!!! What is pokemon?", pokemonsData)
  return (
    <div>
      {pokemonsData.map(pokemon => <Pokecard name={pokemon.name} id={pokemon.id} type={pokemon.type} base_experience={pokemon.base_experience} />)}
    </div>
  );

};

export default Pokedex;
