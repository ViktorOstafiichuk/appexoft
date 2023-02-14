import {Pokemons} from "../components/Pokemons/Pokemons";
import {PokemonDetailPage} from "../components/PokemonDetailPage/PokemonDetailPage";
import {Route, Routes} from "react-router-dom";


const MainLayout = () => {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Pokemons/>}>
                    <Route path={':id'} element={<PokemonDetailPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export {MainLayout};
