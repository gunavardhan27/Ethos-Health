import logo from './logo.svg';
import Header from './comonents/Header';
import Donations from './comonents/Donations';
import Support from './comonents/Assistance';
import Story from './comonents/pages/story/Story';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './comonents/pages/AboutUs';
function App() {
  return (
    <div>
      
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/donations" element={<Donations />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/story" element={<Story />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
