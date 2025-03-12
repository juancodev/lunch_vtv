import {useState, useEffect} from 'react';
import { Navigate } from 'react-router';
import { useUserAuth } from '../../store/auth';

export const ProtectRoute = ({children}) => {
  const { user } = useUserAuth();
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    if(Object.entries(user).length === 0) {
      setRedirectToLogin(true);
    } else {
      setRedirectToLogin(false)
    }
  }, [user]);

  if(redirectToLogin) {
    return <Navigate to={'/'} replace={true} />;
  }

  return <>{children}</>;
}