import style from './AppHeader.module.scss';
import {NavLink} from "react-router-dom";
import {useState} from "react";

const AppHeader = () => {
    const [isMenuVisible, setMenuVisibility] = useState(false);
    const openMenu = () => {
        setMenuVisibility(true);
    }

    const closeMenu = () => {
        setMenuVisibility(false);
    }
    return (
        <header className={style.header}>
            <div className={style.header__name_wrapper}>
            <p className={style.header__name}>Tatiana</p>
            <p className={style.header__surname}>Zolotukhina</p>
            </div>
            <ul className={`${style.header__list} ${isMenuVisible ? style.header__list_active : ''}`} onClick={closeMenu}>
                <li><NavLink to='/about' className={navLink => navLink.isActive ? style.activeLink : style.header__list_item }>About me</NavLink></li>
                <li><NavLink to='/portfolio' className={navLink => navLink.isActive ? style.activeLink : style.header__list_item }>Portfolio</NavLink></li>
                <li><NavLink to='/contacts' className={navLink => navLink.isActive ? style.activeLink : style.header__list_item }>Contacts</NavLink></li>
            </ul>
            <button className={style.header__button} onClick={openMenu}></button>
        </header>

    )
}

export default AppHeader;