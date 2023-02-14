import {useEffect, useState} from "react";

import {urls} from "../../config/urls";
import FetchService from "../../config/fetch.services/fetch.services";
import {Pokemon} from "../Pocemon/Pokemon";
import {Outlet} from "react-router-dom";
import css from './wrap.module.css';

const Pokemons = () => {
    let fetchService = new FetchService(urls.pokemons);

    let [pokemons, setPokemons] = useState([]);

    useEffect(() => {

      fetchService.getAllData().then(({results}) => setPokemons(results))
    }, [])

    return (
        <div className={css.wrap}>
            <div>
                {
                    pokemons.map((pokemon, index)  => <Pokemon key={index} pokemon={pokemon}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export {Pokemons};
