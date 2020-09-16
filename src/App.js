import React,{useState} from 'react';
import ThemeContext from './context/ThemeContext';
import Toggle from './Components/Toggle';
import Sample from './Components/Sample'

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
