//TODO: docstring describing component


function Pokecard({ name, id, type, base_experience }) {
  //const imgUrl =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  console.log("here is pokecard!!!")
  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;