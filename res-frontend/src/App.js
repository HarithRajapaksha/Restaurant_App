import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRestuarant from "./Components/AddRestuarant";
import Showdata from "./Components/ShowAllRes";
import Updatedata from "./Components/UpdateRes";
import ViewData from './Components/ViewData';

function App() {


  return (
    <Router>
          <Routes>
            <Route path="/" element={<AddRestuarant />} />
            <Route path="/allData" element={<Showdata/>} />
            <Route path="/update/:id" element={<Updatedata/>} />
            <Route path="/view/:id" element={<ViewData/>} />
          </Routes>
    </Router>
  );
}

export default App;
