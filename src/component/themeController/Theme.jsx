import { useContext } from "react";

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from "./ThemeControll";


const Theme = () => {

    const {isDarkMode,toggleDarkMode} = useContext(ThemeContext);
  
    return (
        <div>
          <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={40}
      />   
        </div>
    );
};

export default Theme;