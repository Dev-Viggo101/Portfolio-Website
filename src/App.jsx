import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='dark:bg-black'>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
