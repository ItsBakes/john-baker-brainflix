import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadPage from './Pages/UploadPage/UploadPage';
import MainVideoPage from './Pages/MainVideoPage/MainVideoPage'
// https://unit-3-project-api-0a5620414506.herokuapp.com/
// "api_key": "ce976863-77d9-4921-9e41-14e53f8217da"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainVideoPage/>}/> {/* need path and element in each route*/}
        <Route path='/video/:idFromParams' element={<MainVideoPage/>} />
        <Route path='/upload' element={<UploadPage/>}/>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
