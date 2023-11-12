import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import SignIn from './pages/SignIn';
function App() {
  return (
    <BrowserRouter>
    {/* header add in all page */}
    <Header/> 
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="sign-in" element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App