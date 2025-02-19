import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layout/user/Home';
import Adopt from './layout/user/Adopt';



const App = () => {
  return (
    <Router>
    <Routes>
      {/*  main routes */}
      <Route path="/" element={<Home />} />
      <Route path="/adopt" element={<Adopt />} />
    </Routes>
    </Router>
  );
}

export default App;
