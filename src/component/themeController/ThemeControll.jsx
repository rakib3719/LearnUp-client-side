
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';



export const ThemeContext = createContext(null)
const ThemeControll = ({children}) => {

    const [isDarkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
      };


      if(isDarkMode){
        document.querySelector("html").setAttribute("data-theme", "synthwave");
      }

      if(!isDarkMode){
document.querySelector("html").setAttribute("data-theme", "light");
      }  

const themeInfo = {isDarkMode,toggleDarkMode}

    return (
      <div>


<ThemeContext.Provider value={themeInfo }>

    {children}
</ThemeContext.Provider>
  
      </div>
    );
};
ThemeControll.propTypes = {
    children: PropTypes.node
};
export default ThemeControll;