import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from './LandingPage';
import Player from './Player';
import MainPage from './MainPage';


function Index() {
  

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<MainPage/>}/>
        <Route path='/player' element={<Player/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default Index