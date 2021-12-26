import classes from './searchBar.module.css'
import {faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const category = () => {
    return (
        <div className={`${classes.background}`}>

        <div className={`${classes.inputs}`}>
            <button className={`${classes.btn}`}>
            <FontAwesomeIcon icon={faBars} className={` ${classes.burger_icon}`}/> Kateqoriyaları göstər
            </button>

            <div className={`${classes.searchbar}`}>
            <input className={`${classes.input}`} placeholder="Məhsul axtar"/>
            <button className={`${classes.search_btn}`}><FontAwesomeIcon icon={faSearch} className={` ${classes.search_icon}`} /></button>
            </div>
        </div>
        </div>
    )
}

export default category;
