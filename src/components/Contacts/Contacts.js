import style from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <section id='contacts'>
            <h2 className={style.contacts__heading}>Contacts</h2>
            <div className={style.contacts__area}>
                <div>
                    <p className={style.contact__name}>Phone number</p>
                    <p className={style.contact__name}>Email</p>
                    <p className={style.contact__name}>Github</p>
                </div>
                <div>
                    <p className={style.contact_value}>055-2876375</p>
                    <p className={style.contact_value}>tanya2012-21@yandex.ru</p>
                    <p className={style.contact_value}>https://github.com/Tanya1621</p>
                </div>
            </div>
        </section>
    )
}