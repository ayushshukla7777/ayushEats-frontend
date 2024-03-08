import { useCreateMyUser } from '@/api/MyUserApi';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthCallBackPage() {
    const { user } = useAuth0()
    const { createUser } = useCreateMyUser();

    const createdUser = useRef(false);
    const navigate = useNavigate()
    useEffect(()=>{
        if (user?.sub && user?.email && !createdUser.current ) {
            createUser({
                auth0Id: user.sub,
                email: user.email
            })
            createdUser.current = true
            
        }
        navigate('/');
    },[createUser, user,navigate])

    return (
    <div>Loading ....</div>
  )
}

export default AuthCallBackPage