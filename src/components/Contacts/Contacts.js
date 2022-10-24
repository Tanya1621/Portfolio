import style from './Contacts.module.scss'
import {Animated} from "../Animated/Animated";

export const Contacts = () => {
    return (
        <Animated>
        <section id='contacts'>
            <h2 className={style.contacts__heading}>Contacts</h2>
            <div className={style.contacts__area}>
                <div>
                    <p className={style.contact__name}>Phone number</p>
                    <p className={style.contact__name}>Email</p>
                    <p className={style.contact__name}>Github</p>
                    <p className={style.contact__name}>LinkedIn</p>
                </div>
                <div>
                    <p className={style.contact_value}>055-2876375</p>
                    <p className={style.contact_value}>tanya2012-21@yandex.ru</p>
                    <p className={style.contact_value}><a className={style.link} href={'https://github.com/Tanya1621'}>Tanya1621</a></p>
                    <p className={style.contact_value}><a className={style.link} href={'https://www.linkedin.com/in/tatiana-zolotukhina-64375b24b/'}>Tatiana Zolotukhina</a></p>
                </div>
            </div>
        </section></Animated>
    )
}