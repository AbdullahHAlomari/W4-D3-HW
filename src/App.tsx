import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WeatherApi from './components/WeatherApi'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    // hello
    <ChakraProvider>
    <div className="App">
      <WeatherApi/>
    </div>
    </ChakraProvider>
  )
}

export default App
