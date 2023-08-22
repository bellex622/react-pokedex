
/** take props of name, id, type and base_experience,
 * return a pokeCard
 */
const BASE_IMG_URL ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ name, id, type, base_experience }) {
  console.log("here is pokecard!!!")
  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={`${BASE_IMG_URL}${id}.png`} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;