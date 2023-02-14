import {Link} from "react-router-dom";
import css from './button.module.css';

const Pokemon = ({pokemon}) => {

    const {name, url} = pokemon;
let id = url.split('/')[6];

    return (
        <div className={css.button}>
            <Link to={`${id}`}><h3>{name}</h3></Link>
        </div>
    );
};

export {Pokemon};
