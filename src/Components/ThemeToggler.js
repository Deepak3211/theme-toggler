import React,{useContext} from 'react';
import {FaSun, FaMoon} from 'react-icons/fa/';
import ThemeContext from '../context/ThemeContext';


const ThemeToggler = () => {
const [themeMode, setThemeMode] = useContext(ThemeContext);
return (
<div className ='container'>
<span>
{ themeMode ==='light'? 'Dark Mode': 'Light Mode'}
</span>

  <span onClick = {()=>[
    setThemeMode(themeMode ==='light' ?'dark': 'light')
  ]} >{themeMode === 'light'? <FaMoon className = 'moon' /> : <FaSun className ='sun' />}</span>

</div>
)
}


export default ThemeToggler;
