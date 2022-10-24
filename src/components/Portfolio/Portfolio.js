import style from './Portfolio.module.scss';
import mesto from '../../travel.png';
import {projectList} from "../../utils/projectList";
import {Project} from "../Project/Project";
import {Animated} from "../Animated/Animated";

export const Portfolio = () => {
    return (<Animated><section>
        <h2 className={style.portfolio__heading} id='portfolio'>Portfolio</h2>
        <ul>
            {projectList.map(project => {
                return <Project project={project} />
            })}


        </ul>
    </section></Animated>)
}