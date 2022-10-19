import style from './AppMain.module.scss'
import {AboutMe} from "../AboutMe/Aboutme";
import {Portfolio} from "../Portfolio/Portfolio";
import {Contacts} from "../Contacts/Contacts";

export const AppMain = () => {
    return (
        <main>
           <AboutMe></AboutMe>
            <Portfolio></Portfolio>
            <Contacts></Contacts>
        </main>
    )
}