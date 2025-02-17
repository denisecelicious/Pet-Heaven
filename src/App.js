import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layout/user/Home';



const App = () => {
  return (
    <Router>
    <Routes>
      {/*  main routes */}
      <Route path="/" element={<Home />} />
    </Routes>
    </Router>
  );
}

export default App;
