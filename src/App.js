import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Projects from './pages/projects'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </BrowserRouter>
        <Body/>
        <Footer />
    </div>
  );
}
export default App;