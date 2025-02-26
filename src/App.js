import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layout/user/Home';
import Adopt from './layout/user/Adopt';
import AboutUs from './layout/user/AboutUs';
import SupportUs from './layout/user/SupportUs';



const App = () => {
  return (
    <Router>
    <Routes>
      {/*  main routes */}
      <Route path="/" element={<Home />} />
      <Route path="/adopt" element={<Adopt />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/support-us" element={<SupportUs />} />
    </Routes>
    </Router>
  );
}

export default App;
