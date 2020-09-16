import React,{useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../Color';
import ThemeToggler from './ThemeToggler';

const Sample = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div style = {{
      padding : '1rem',
      backgroundColor: `${currentTheme.backgroundColor}`,
      color : `${currentTheme.textColor}`,
      textAlign:'center'
    }}>
      
      <h1>Context Api theme toggler</h1>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur repellendus dolores qui unde facilis perspiciatis neque nisi, excepturi aspernatur eveniet voluptas voluptate dignissimos possimus ipsum omnis incidunt suscipit consequuntur ipsam?</p>
      <button style = {{
        backgroundColor: 'aquamarine',
        padding : '10px 40px',
        fontSize: '15px',
        color: 'whitesmoke',
        border: `${currentTheme.border}`
      }}><ThemeToggler  /></button>
    </div>
  )
}

export default Sample
