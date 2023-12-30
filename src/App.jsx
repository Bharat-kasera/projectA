
import './App.css'
import Home from './components/pages/Home';
import LandingPage from './components/pages/LandingPage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductDetailPage from './components/ProductDetailPage';
import Test from './components/Test';


function App() {

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>

        <Route path='/:type' element={<ProductDetailPage/>}/>
        {/* <Route path='/fabrics' element={<Fabrics/>}/>
        <Route path='/yarns' element={<Yarns/>}/> */}

      </Routes>
    </Router>
  )
}

export default App
