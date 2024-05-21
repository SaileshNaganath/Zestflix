import {Header} from '../components/header.jsx';
import {Hero} from '../sections/hero.jsx';
import {Plans} from '../sections/plans.jsx';
import { VideoCarousel } from '../sections/video-carousel';
import {SignUp} from '../sections/signup.jsx';
import '../index.css';

const LandingPage = () => {
  return (
    <>
    <Header/>
 <main>
    <div className="bg-black relative z-10">
      <Hero />
      <Plans/>
    </div>
    <VideoCarousel />
    <div className="bg-black relative z-10">
    <SignUp/>
    </div> 
  </main>
    </>
   
  )
}

export default LandingPage