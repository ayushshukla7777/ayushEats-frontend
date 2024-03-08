import { CircleUserRound } from 'lucide-react';
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import UserNameMenu from './UserNameMenu';

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (

    <div>
      {isAuthenticated ?
        <span className='flex gap-2 space-x-2 font-bold hover:text-orange-500  '>
          <CircleUserRound className='text-orange-500' />
          <UserNameMenu/>
          
        </span>
        :
        <Button onClick={async () => { loginWithRedirect() }} variant='ghost' className='text-md text-gray-600 hover:text-orange-500 hover:bg-white'>Log In</Button>
      }
    </div>
  )
}

export default MainNav