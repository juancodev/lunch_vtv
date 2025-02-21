import React from 'react'
import { NavBar } from '../../components/nav/Nav'
import { useUserAuth } from '../../store/users'

export const Dashboard = () => {

  const { user } = useUserAuth()

  return (
    <>
        <NavBar />
        <h1 className='text-5xl! text-center pt-10'>Bienvenido, {user.fullName}</h1>
    </>
  )
}