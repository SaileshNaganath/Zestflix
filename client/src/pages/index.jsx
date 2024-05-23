import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from './LandingPage';
import Player from './Player';
import MainPage from './MainPage';
import Booking from './Booking';
import BookingPage from './BookingPage';



function Index() {
  

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<MainPage/>}/>
        <Route path='/player' element={<Player/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/seats' element={<BookingPage/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default Index