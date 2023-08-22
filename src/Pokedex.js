import Pokecard from "./Pokecard";

/** take a list of pokemon data, return a sequence of Pokecard components */
function Pokedex({ pokemonsData, totalExp, isWinner }) {
  console.log("here is pokedex!!!! What is pokemon?", pokemonsData);
  return (
    <div className="Pokedex-container">
      <h2>Deck</h2>
      <h3>TotalExp:{totalExp}</h3>
      {pokemonsData.map(pokemon => <Pokecard name={pokemon.name} id={pokemon.id}
        type={pokemon.type} base_experience={pokemon.base_experience} />)}
      <p>{isWinner ? "THIS HAND WINS!" : null}</p>
    </div>
  );

};

export default Pokedex;
