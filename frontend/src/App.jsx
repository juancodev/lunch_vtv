import { BrowserRouter, Routes, Route } from "react-router";
import { ChakraProvider } from '@chakra-ui/react';
import { LoginForm } from './pages/login/Login';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Users } from './pages/users/Users';
import { NavBar } from './components/nav/Nav'
import { Department } from "./pages/department/Department";

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
            <Route path="/dashboard" element={
                <>
                  <NavBar/>
                  <Dashboard/>
                </>
                }
            />
            <Route path="/users" element={
                <>
                  <NavBar/>
                  <Users />
                </>
                }
            />
            <Route path="/departments" element={
              <>
                <NavBar/>
                <Department />
              </>
              }
            />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
