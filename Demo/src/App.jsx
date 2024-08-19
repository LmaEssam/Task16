import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menpage from './Pages/Menpage'
import Aboutpage from './Pages/Aboutpage';
import Homepage from './Pages/Homepage/Homepage';
import Womenpage from './Pages/Womenpage';
import Layoutpage from './Pages/Layoutpage/Layout';
import Productpage from './Pages/Productpage';
function App() {
  return (
    <div id='mainpage'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layoutpage/>} >
      <Route index element={<Homepage/>} />
      <Route path='/Aboutpage' element={<Aboutpage/>} />
      <Route path='/Menpage' element={<Menpage/>} />
      <Route path='/Womenpage' element={<Womenpage/>} />
      <Route path='/Product/:id' element={<Productpage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App