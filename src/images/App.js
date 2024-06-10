
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Order } from './pages/Order';
import Booking from './pages/Booking';
import Discreption from '../src/components/Discreption';
import Galary from './pages/Galary';
import Review from './pages/Review';
import ShopSingle from './pages/ShopSingle';
import Blogsingle from './pages/Blogsingle';
import Blog from './pages/Blog';
import License from './pages/License';
import Contact from './pages/Contact';
import About from './pages/About';
import Menu from './pages/Menu';
import Ourchefs from './pages/Ourchefs';
import { ChefSingle } from './components/ChefSingle';

function App() {
  return (

    <>
    
      <Router>
        <Routes>
          <Route path='/Galary' element={<Galary/>}/>
          <Route path='/Booking' element={<Booking/>}/>
          <Route path='/Order' element={<Order/>}/>
          <Route path='/Review' element={<Review/>}/>
          <Route path='/ShopSingle' element={<ShopSingle/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/License' element={<License/>}/>
          <Route path='/Blogsingle' element={<Blogsingle/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Ourchefs' element={<Ourchefs/>}/>
          <Route path='/ChefSingle' element={<ChefSingle/>}/>

        </Routes>

      </Router>

    </>




  )
}

export default App;
