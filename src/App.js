import './App.css';
import Introduction from './Components/Introduction/Introduction';
import Navbar from './Components/Navbar/Navbar';
import TechStack from './Components/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <TechStack/>
    </div>
  );
}

export default App;
