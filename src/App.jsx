import './App.css'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/education'
import Footer from './Components/Footer/Footer'
import MiniProjects from './Components/MiniProjects/MiniProjects'
import Navbar from './Components/Navbar/Navbar'
import Scroll from './Components/Scroll/Scroll'
import SkillSection from './Components/Skillbars/SkillSection'
import TechStack from './Components/TechStack.jsx/TechStack'

function App() {

  return (

    <>
    <Scroll/>
     <Navbar/>
     <SkillSection/>
     <MiniProjects/>
     <TechStack/>
     <Education/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
