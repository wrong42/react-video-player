import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { VPVideoJs } from './components/VPVideJs'
import { VPSimpleHtml5 } from './components/VPSimpleHtml5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container-fluid">
      <div className="v-100 h-100">
        <div className="row border video-players">
          <div className="col">
            <VPSimpleHtml5 videoId={1}/>
          </div>
          <div className="col">
            <VPSimpleHtml5 videoId={2}/>
          </div>
          <div className="col">
            <VPSimpleHtml5 videoId={3}/>
          </div>
        </div>
        <div className="row border timeline">
          <div className="col">
            <h1>TIMELINE</h1>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App
