import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import Game from './pages/Game';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/games' element={<Game />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
