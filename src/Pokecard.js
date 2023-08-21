function Pokecard({ name, id, type, base_experience }) {
  const imgUrl =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  console.log("here is pokecard!!!")
  return (
    <div>
      <h3>{name}</h3>
      <img src={imgUrl} alt={name} />
      <p>Type:{type}</p>
      <p>EXP:{base_experience}</p>
    </div>
  );
}

export default Pokecard;