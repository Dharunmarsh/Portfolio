import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import SkillList from './components/Skills'
import Exp from './components/Exp'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
<div class=" backdrop-blur-lg shadow-[0_0_30px_rgba(255,255,255,0.05)] ring-1 ring-white/5
 w-full min-h-full">
    <Navbar />  
    <Hero />
    <Education />
    <SkillList />
    <Exp />
    <Contact />
    <Footer />
    </div>
  )
}
export default App
