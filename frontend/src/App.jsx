import { BrowserRouter, Routes, Route } from "react-router";
import { ChakraProvider } from '@chakra-ui/react';
import { LoginForm } from './pages/login/Login';
import { NavBar } from './components/nav/Nav'
import { Dashboard } from './pages/dashboard/Dashboard';
import { Users } from './pages/users/Users';
import { Department } from "./pages/department/Department";
import { Schedule } from "./pages/schedule/Schedule";
import { Beneficiary } from "./pages/ beneficiary/Beneficiary";

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
            <Route path="/schedules" element={
              <>
                <NavBar/>
                <Schedule />
              </>
              }
            />
            <Route path="/beneficiaries" element={
              <>
                <NavBar/>
                <Beneficiary />
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
