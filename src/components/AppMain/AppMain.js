import style from './AppMain.module.scss'
import {AboutMe} from "../AboutMe/Aboutme";
import {Portfolio} from "../Portfolio/Portfolio";
import {Contacts} from "../Contacts/Contacts";
import {Route, Routes, Navigate} from "react-router-dom";

export const AppMain = () => {
    return (
        <main className={style.main}>
            <Routes>
                <Route path='/' element={<Navigate replace to='/about' />} />
                <Route exact path='/about' element={<AboutMe />}>
                </Route>
                <Route exact path='/portfolio' element={<Portfolio />}>
                   </Route>
                <Route exact path='/contacts' element={<Contacts />}>
                </Route></Routes>
        </main>
    )
}