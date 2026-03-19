import Header from '../../components/Header'
import '../../App.css'
import Footer from './Footer'
import InerSection from './InerSection'
import Screen from './Screen'


function Home() {

  return (
    <> 
          <Header/>
      <div className=" global-zoom viewport-container">
      <div className="viewport-scale-wrapper">
      <Screen/>
      <InerSection/>
      <Footer/>
    </div>
    </div>
    </>

  )
}

export default Home
