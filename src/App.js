import './App.css';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Projects from './pages/projects'
import Home from './components/Home';
import Header from './components/Header';
//__________________________________________________________
function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  )
}
//___________________________________________________________
function MainContent() {  //I want only fixed header on Front UI.
  const location = useLocation();
  const showHeader = location.pathname === "/"

  return (
    <div>
      {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}
export default App;