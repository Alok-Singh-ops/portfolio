import { createContext, useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Introduction from './Components/Introduction/Introduction';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import TechStack from './Components/TechStack/TechStack';
import { Route, Routes } from 'react-router-dom';


export const ThemeContext = createContext(null);

function App() {

  const [theme,setTheme] = useState("light");

  const toggleTheme = ()=>{
    setTheme((prev)=> (prev === "light" ? "dark": "light"))
  }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className="App" id= {theme}>
          <Navbar/>
        <Routes>
          <Route path='/introduction' element = {<Introduction/>}></Route>
          <Route path='/techStack' element = {<TechStack/>}></Route>
          <Route path='/projects' element = {<Projects/>}></Route>
        </Routes>
          <Footer/>
      
    </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
