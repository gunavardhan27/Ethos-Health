import logo from './logo.svg';
import Header from './comonents/Header';
import Donations from './comonents/Donations';
import Support from './comonents/Assistance';
import ShareStory from './comonents/ShareStory';
import Aboutus from './comonents/pages/Aboutus';
import { BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/support' element = {<Support />}/>
        <Route path='/about' element = {<Aboutus/>}/>
        <Route path='/story' element = {<ShareStory/>}/>
        <Route path='/donations' element = {<Donations/>}/>
      </Routes>
    </div>
  );
}

export default App;
