import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;