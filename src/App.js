import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Title from './components/Title';  // ✅ Correct
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/title' element={<Title />} />
      </Routes>
      <ToastContainer position="bottom-left" />
      {/* <GithubCalender /> */}
      {/* <DarkLightTest /> */}
    </div>
  );
}

export default App;