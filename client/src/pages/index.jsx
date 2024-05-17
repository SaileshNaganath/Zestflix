import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from './LandingPage';
import { Header } from '../components/header';


function Index() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default Index