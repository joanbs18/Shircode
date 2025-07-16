import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

// Importa las páginas
import Home from './pages/Home';
// import Acerca from './pages/Acerca';
// import Contacto from './pages/Contacto';

function App() {
  return (
    <>
      <Header />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
