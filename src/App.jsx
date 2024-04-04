
import './App.css'
import Canvas from './canvas'
import Custumizer from './pages/Custumizer'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <main className='app transition-all ease-in'>
        <Home/>
        <Canvas/>
        <Custumizer/>
      </main>
    </div>
  )
}

export default App
