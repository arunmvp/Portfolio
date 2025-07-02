import './App.css'
import MiniProjects from './Components/MiniProjects/MiniProjects'
import Navbar from './Components/Navbar/Navbar'
import SkillSection from './Components/Skillbars/SkillSection'
import TechStack from './Components/TechStack.jsx/TechStack'

function App() {

  return (
    <>
     <Navbar/>
     <SkillSection/>
     <MiniProjects/>
     <TechStack/>
    </>
  )
}

export default App
