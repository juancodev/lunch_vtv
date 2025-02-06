import { BrowserRouter, Routes, Route } from "react-router";
import { ChakraProvider } from '@chakra-ui/react'
import { LoginForm } from './pages/login/Login'
import { RegisterForm } from './pages/register/Register'

import './App.css'

function App() {

  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" exact component={<>LoginForm</>} />
              <Route path="/register" component={<>RegisterForm</>} />
            {/* <Route path="/dashboard" component={Dashboard} /> */}
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
