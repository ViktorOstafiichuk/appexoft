const PokemonDetail = ({pokemonDetail}) => {


    return (
        <div>
            <img src={pokemonDetail.img} alt={pokemonDetail.name}/>
            <h3> Pokemon name: {pokemonDetail.name}</h3>
        </div>
    );
};

export {PokemonDetail};
