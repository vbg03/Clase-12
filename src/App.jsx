import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'
import FormMaterialize from './componentes/FormMaterialize.jsx'
import Form from './componentes/Form.jsx'
import PokemonApi from './componentes/pokemonApi.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>api-consumer</h1>
      <PokemonApi/>
      <PWABadge />
    </>
  )
}

export default App