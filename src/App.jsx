import Home from './Home'
import './scss/global.scss'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </div>
  )
}

export default App
