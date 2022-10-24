import style from './Project.module.scss'
import mesto from "../../travel.png";
import githubBlack from '../../github-black.svg';
import gitHubWhite from '../../github-white.svg';
import linkLight from '../../link-light.svg';
import link from '../../link.svg';
import {useContext} from "react";
import {ThemeContext} from "../App/App";

export const Project = ({project}) => {
    const theme = useContext(ThemeContext);
    return (
        <li className={style.project}>
                <h3 className={style.project__heading}>{project.name}</h3>
                <div className={style.project__pic}><img src={project.img} className={style.project__pic}/></div>
                <div className={style.project__pic_cover}><p className={style.project_capture}>{project.date}</p></div>
                <div className={style.project__description}><p>{project.description}</p></div>

                <div className={style.project__technologies}>{
                    project.technologies.map(technology => {
                        return <span className={style.project__technology}>{technology}</span>
                    })
                }</div>
                <div className={style.project__links}><a href={project.github}><img className={style.project__github_img}
                                                                                src={theme === 'dark' ? githubBlack : gitHubWhite}/></a> <a href={project.link}><img
                    className={style.project__github_img} src={theme === 'dark' ? link : linkLight}/></a></div>
        </li>
    )
}