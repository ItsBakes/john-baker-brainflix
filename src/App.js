import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainVideoPage from './Pages/MainVideoPage';
import UploadPage from './Pages/UploadPage';



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainVideoPage />}/>
        <Route path='/video/:idFromParams' element={<MainVideoPage />} />
        <Route path='/upload' element={<UploadPage />}/>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
