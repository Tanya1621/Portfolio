import style from './Portfolio.module.scss';
import mesto from '../../travel.png';
import {projectList} from "../../utils/projectList";
import {Project} from "../Project/Project";

export const Portfolio = () => {
    return (<section>
        <h2 className={style.portfolio__heading} id='portfolio'>Portfolio</h2>
        <ul>
            {projectList.map(project => {
                return <Project project={project} />
            })}


        </ul>
    </section>)
}