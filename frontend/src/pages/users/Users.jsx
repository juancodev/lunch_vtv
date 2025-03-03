import {useEffect, useState} from 'react';
import { useUsers } from '../../store/users';

export const Users = () => {
  const {users, getAllUsers} = useUsers();
  // const [usersAll, setUsersAll] = useState([]);


  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  console.log(users)
  return (
    <div>Users</div>
  )
}
