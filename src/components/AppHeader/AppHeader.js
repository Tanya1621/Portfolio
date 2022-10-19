import style from './AppHeader.module.scss';

const AppHeader = () => {
    return (
        <header className={style.header}>
            <div className={style.header__name_wrapper}>
            <p className={style.header__name}>Tatiana</p>
            <p className={style.header__surname}>Zolotukhina</p>
            </div>
            <ul className={style.header__list}>
                <li><a href='#about' className={style.header__list_item}>About me</a></li>
                <li><a href='#portfolio' className={style.header__list_item}>Portfolio</a></li>
                <li><a href='#contacts' className={style.header__list_item}>Contacts</a></li>
            </ul>
        </header>
    )
}

export default AppHeader;