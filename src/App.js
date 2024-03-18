import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainVideoPage from './Pages/MainVideoPage';
import UploadPage from './Pages/UploadPage';
import Header from './Components/Header/Header';




function App() {


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<MainVideoPage />}/>
        <Route path='/video/:idFromParams' element={<MainVideoPage />} />
        <Route path='/upload' element={<UploadPage />}/>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
