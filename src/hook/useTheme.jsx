
import { useContext } from "react";
import { ThemeContext } from "../component/themeController/ThemeControll";


const useTheme = () => {

    const themeControl = useContext(ThemeContext)
    return themeControl;

}

export default useTheme;