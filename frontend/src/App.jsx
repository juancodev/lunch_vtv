import { BrowserRouter, Routes, Route } from "react-router";
import { ChakraProvider } from '@chakra-ui/react';
import {ProtectRoute} from './components/protectRoute/ProtectRoute';
import { LoginForm } from './pages/login/Login';
import { NavBar } from './components/nav/Nav'
import { Dashboard } from './pages/dashboard/Dashboard';
import { Users } from './pages/users/Users';
import { Department } from "./pages/department/Department";
import { Schedule } from "./pages/schedule/Schedule";
import { Beneficiary } from "./pages/ beneficiary/Beneficiary";
import {Menu} from "./pages/menu/Menu";
 
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
                  <ProtectRoute>
                    <NavBar/>
                    <Dashboard/>
                  </ProtectRoute>
                </>
                }
            />
            <Route path="/users" element={
                <>
                  <ProtectRoute>
                    <NavBar/>
                    <Users />
                  </ProtectRoute>
                </>
                }
            />
            <Route path="/departments" element={
              <>
                <ProtectRoute>
                  <NavBar/>
                  <Department />
                </ProtectRoute>
              </>
              }
            />
            <Route path="/schedules" element={
              <>
                <ProtectRoute>
                  <NavBar/>
                  <Schedule />
                </ProtectRoute>
              </>
              }
            />
            <Route path="/beneficiaries" element={
              <>
                <ProtectRoute>
                  <NavBar/>
                  <Beneficiary />
                </ProtectRoute>
              </>
              }
            />
            <Route path="/menu" element={
              <>
                <ProtectRoute>
                  <NavBar/>
                  <Menu />
                </ProtectRoute>
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
