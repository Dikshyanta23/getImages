import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const getInitialDarkMode = () => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
        const storedDarkMode = localStorage.getItem('darkTheme') === 'true'

        return storedDarkMode || prefersDarkMode
    }

    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
    const [search, setSearch] = useState('tree')

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme
        setIsDarkTheme(newDarkTheme)
        localStorage.setItem('darkTheme', newDarkTheme)
    }

    useEffect(()=> {
        document.body.classList.toggle('dark-theme', isDarkTheme);
    },[isDarkTheme])


    return <AppContext.Provider value ={{isDarkTheme, toggleDarkTheme, search, setSearch}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)