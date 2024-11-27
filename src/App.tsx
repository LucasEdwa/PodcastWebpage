import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { NavBar } from './components/navBar';
import Footer from './components/footer';
import LanguageSwitcher from './LanguageSwitcher'; // Import the LanguageSwitcher component

function App() {


  return (
    <>
      <NavBar  />
      <LanguageSwitcher /> {/* Add the LanguageSwitcher component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes as necessary */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;