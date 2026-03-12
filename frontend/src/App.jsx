import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
      <footer className="footer glass-card">
        <p>&copy; 2026 Mera Tiffin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
