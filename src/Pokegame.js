import Pokedex from "./Pokedex";

/** take a list of 8 pokemons, randomly assign them into two hand of 4 cards
 * each, then render two Pokedex components
 */
function Pokegame({ pokeList }) {
  const pokeList2 = [];

  while (pokeList.length > 4) {
    let idx = Math.floor(Math.random() * pokeList.length);
    let selectedCard = pokeList[idx];
    pokeList2.push(selectedCard);
    pokeList.splice(idx, 1);
  }

  let totalExp = 0;
  for (let poke of pokeList) {
    totalExp += poke.base_experience;
  }

  let totalExp2 = 0;
  for (let poke of pokeList2) {
    totalExp2 += poke.base_experience;
  }

  // let winner = totalExp > totalExp2 ? totalExp : totalExp2;

  return (
    <div>
      <Pokedex pokemonsData={pokeList} totalExp={totalExp} isWinner={totalExp > totalExp2} />
      <Pokedex pokemonsData={pokeList2} totalExp={totalExp2} isWinner={totalExp2 > totalExp} />
    </div>
  );

}

export default Pokegame;