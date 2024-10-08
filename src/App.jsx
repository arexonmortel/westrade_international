import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-white via-lightBlue to-royalBlue">
        <Header />
        <main className="flex-grow z-40 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
       {/*  <Footer /> */}
      </div>
    </Router>
  );
}

export default App;