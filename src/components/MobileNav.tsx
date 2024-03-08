import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { CircleUserRound, Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const MobileNav = () => {
    const { user, loginWithRedirect, isAuthenticated , logout} = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='text-orange-500' />
            </SheetTrigger>
            <SheetContent className=' space-y-3 font-bold'>
                {isAuthenticated ? <span className='flex gap-2 hover:text-orange-500'>
                    <CircleUserRound className=' text-orange-500' />
                    <span>{user?.email}</span>
                </span> :
                    <SheetTitle className='text-orange-500 '>Welcome to AyushEats.com</SheetTitle>
                }
                <Separator />
                <div className='flex'>
                    {isAuthenticated ?
                        <div className='flex w-full flex-col justify-center gap-4 '>
                            
                            <Link className='text-gray-600 hover:text-black' to='/user-profile'>User Profile</Link>
                            <Button onClick={() => { logout() }} className="flex-1 hover:bg-orange-500 ">Logout</Button>
                        </div>
                        :
                        <Button onClick={async () => { loginWithRedirect() }} className='flex-1 hover:bg-orange-500'>Log In</Button>
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
