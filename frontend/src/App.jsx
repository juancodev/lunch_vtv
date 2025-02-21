import { BrowserRouter, Routes, Route } from "react-router";
import { ChakraProvider } from '@chakra-ui/react'
import { LoginForm } from './pages/login/Login'
import { Dashboard } from './pages/dashboard/Dashboard'

function App() {

  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={
                <>
                  <LoginForm/>
                </>
                }
              />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
