import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import EditRecord from './pages/EditRecord/StudentTable';
// import Record from './pages/Record/Record';
import DetailView from './pages/TableView/DetailView';
// import Record from './pages/Record/Record';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DetailView />} />
        {/* <Route path='/' Component={Home} /> */}
        {/* <Route path="/record" element={<Record />} /> */}
      </Routes>
    </Router>
  );
}

export default App;