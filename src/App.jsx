
import './App.css'
import Mainbutton from './components/mainbutton'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CarouselSlider from './components/CarouselSlider';

function App () {


  return (
    <>
      {/* like this
      <div className="bg-primary" >test</div>
      <div className="text-primary" >test</div>
      <div className="border-2 border-secondary w-fit p-4" >test</div>
      <Mainbutton >
        click
      </Mainbutton> */}
      {/* <HeroSection /> */}
      <CarouselSlider />
      {/* <PhotographyAwards /> */}
      <Testimonials />
      <Footer />
    </>
  )
}

export default App