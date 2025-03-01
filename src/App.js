import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layout/user/Home';
import Adopt from './layout/user/Adopt';
import AboutUs from './layout/user/AboutUs';
import SupportUs from './layout/user/SupportUs';
import AnimalDetail from './layout/user/AnimalDetail';
import Release from './layout/user/Release';



const App = () => {
  return (
    <Router>
    <Routes>
      {/*  main routes */}
      <Route path="/" element={<Home />} />
      <Route path="/adopt" element={<Adopt />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/support-us" element={<SupportUs />} />
      <Route path="/release" element={<Release />} />
      <Route path="/animal/:id" element={<AnimalDetail />} />

    </Routes>
    </Router>
  );
}

export default App;
