import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import EditRecord from './pages/EditRecord/EditRecord';
// import Record from './pages/Record/Record';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path="/editrecord/:userId" element={<EditRecord />} />
      </Routes>
    </Router>
  );
}

export default App;