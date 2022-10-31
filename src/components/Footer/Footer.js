import style from './Footer.module.scss'
import {useState} from "react";


export const Footer = ({theme, setTheme}) => {
    const switchTheme = (e) => {
        const switcher = document.querySelector(`.${style.switch}`);
        theme === 'dark'? setTheme('light') : setTheme('dark');
        switcher.style.justifyContent === 'flex-start' || switcher.style.justifyContent === '' ? switcher.style.justifyContent = 'flex-end' : switcher.style.justifyContent = 'flex-start';

    }
    return (
    <footer className={style.footer}>
        <p className={style.footer__text}>Change the theme</p>
        <div className={style.switch} onClick={(e) => switchTheme(e)}><div className={style.switcher__circle} ></div></div>
    </footer>
    )
}