import style from "./Aboutme.module.scss";
import {Animated} from "../Animated/Animated";

export const AboutMe = () => {
    return (   <Animated>
        <section>
            <h2 id='about' className={style.main__heading_section}>About me</h2>
            <p className={style.education__prof}>Motivated and interested junior developer with almost a year experience
                in web development. Passionate
                towards learning new technologies. Skilled in JavaScript/TypeScript, React, Vue, Redux, HTML, CSS/SCSS</p>
            <h2 className={style.main__heading}>Education</h2>
            <p className={style.education__prof}>January 2022 - present. Frontend developer</p>
            <p className={style.education__place}>Yandex Practicum</p>
            <p className={style.education__prof}>September 2018 - July 2020. Master's degree in Biotechnology</p>
            <p className={style.education__place}>ITMO University, Russia, St Petersburg</p>
            <p className={style.education__prof}>September 2014 - July 2018. Bachelor's degree in Chemical
                Engineering</p>
            <p className={style.education__place}>St Petersburg State University of Industrial Technologies and Design,
                Russia, St Petersburg</p>
            <h2 className={style.main__heading}>Experience</h2>
            <p className={style.education__prof}>January 2022 - present. Practice of developing solo and team
                projects</p>
            <p className={style.education__place}>Yandex Practicum</p>
            <p className={style.education__prof}>October 2019 - August 2022. Chemical engineer</p>
            <p className={style.education__place}>Geropharm, Russia, St Petersburg</p>
        </section></Animated>)
}
