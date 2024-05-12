import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext(null);

const ThemeControll = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(() => {
     
        return localStorage.getItem('isDarkMode') === 'true';
    });

    const toggleDarkMode = () => {
        const darkModeLC = !isDarkMode;
        setDarkMode(!isDarkMode);
        localStorage.setItem('isDarkMode', darkModeLC);
    };

    useEffect(() => {
     
        document.querySelector("html").setAttribute("data-theme", isDarkMode ? "synthwave" : "light");
    }, [isDarkMode]);

    const themeInfo = { isDarkMode, toggleDarkMode };

    return (
        <div>
            <ThemeContext.Provider value={themeInfo}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

ThemeControll.propTypes = {
    children: PropTypes.node
};

export default ThemeControll;
