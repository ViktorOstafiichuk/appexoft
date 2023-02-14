import {useEffect, useState} from "react";

import {urls} from "../../config/urls";
import FetchService from "../../config/fetch.services/fetch.services";
import {Pokemon} from "../Pocemon/Pokemon";
import {Outlet, useSearchParams} from "react-router-dom";
import css from './wrap.module.css';

const Pokemons = () => {
    let fetchService = new FetchService(urls.pokemons);

    let [pokemons, setPokemons] = useState([]);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [query, setQuery] = useSearchParams({page: '0'});


    useEffect(() => {

      fetchService.getAllData(`?offset=${query.get('page')}&limit=12`).then(value => {
          setPokemons(value.results)
          setPrev(value.previous)
          setNext(value.next)
      })
    }, [query])

    const prevPage = () => {
        setQuery(value => ({page:value.get('page')-12}))
    }

    const nextPage = () => {
        setQuery(value => ({page:+value.get('page')+12}))
    }
    return (
        <div className={css.wrap}>
            <div>
                {
                    pokemons.map((pokemon, index)  => <Pokemon key={index} pokemon={pokemon}/>)
                }
                <div>
                    <button disabled={!prev} onClick={prevPage}>prevPage</button>
                    <button disabled={!next} onClick={nextPage}>nextPage</button>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export {Pokemons};
