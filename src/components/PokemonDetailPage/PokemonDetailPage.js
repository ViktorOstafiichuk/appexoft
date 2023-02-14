import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import FetchService from "../../config/fetch.services/fetch.services";
import {urls} from "../../config/urls";
import {PokemonDetail} from "../PokemonDetail/PokemonDetail";
import css from './details.module.css'

const PokemonDetailPage = () => {
let {id} = useParams();
let [pokemonDetail, setPokemonDetail] = useState([]);
    let fetchService = new FetchService(urls.pokemons);

useEffect(() => {
    fetchService.getSingleData(id)
        .then(value => {
            const img = value.sprites.back_default;
            const name = value.name;
            const ability = value.abilities.map(value => <li key={value.slot}>{value.ability.name}</li>);
            const type = value.types.map(value => <li key={value.slot}>{value.type.name}</li>);


        setPokemonDetail({img, name, ability, type})
        });

}, [id]);

    return (
        <div className={css.details}>
            {pokemonDetail && <PokemonDetail key={id} pokemonDetail={pokemonDetail}/>}
            {pokemonDetail && <ul>Pokemon abilities: {pokemonDetail.ability}</ul>}
            {pokemonDetail && <ul>Pokemon type: {pokemonDetail.type}</ul>}
        </div>
    );
};

export {PokemonDetailPage};
