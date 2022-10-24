import logo from '../../logo.svg';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import {AppMain} from "../AppMain/AppMain";
import {Footer} from "../Footer/Footer";
import {createContext, useState} from "react";

export const ThemeContext = createContext(null)

function App() {
    const [theme, setTheme] = useState('dark');
    return (
        <Router>
            <div className="App" data-theme={theme}>
                <AppHeader></AppHeader>
                <ThemeContext.Provider value={theme}>
                    <AppMain></AppMain>
                </ThemeContext.Provider>
                <Footer theme={theme} setTheme={setTheme}></Footer>
            </div>
        </Router>
    );
}

export default App;
