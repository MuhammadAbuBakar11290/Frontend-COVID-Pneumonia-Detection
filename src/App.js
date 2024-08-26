import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainDashBoard from './screens/mainDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDashBoard/>} />
      </Routes>
    </Router>
  
  );
}

export default App;
