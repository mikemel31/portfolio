import './App.css';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Social } from './components/Social';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <About />
     <Skills />
     <Projects />
     <Social />
    </div>
  );
}

export default App;
