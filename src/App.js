import React,{useState} from 'react';

import ThemeContext from './context/ThemeContext';
import {Toggle , Sample} from './Components'
import './App.css';


const App = () => {
  const themeHook = useState('light');
  return (
   <ThemeContext.Provider value = {themeHook}>

<div>
  <Toggle />
  <Sample />
</div>
   </ThemeContext.Provider>
  )
}

export default App
