import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { NavBar } from './components/navBar';
import About from './pages/About';
import Footer from './components/footer';
import ContactModal from './components/contactModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Router>
      <NavBar onContactClick={handleShowModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" />
      </Routes>
      <Footer />
      <ContactModal show={showModal} handleClose={handleCloseModal} />
    </Router>
  );
}

export default App;