import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MainNav from './MainNav'


const Header = () => {
  return (
    <div className='container mx-auto py-6 border-b-2 border-b-orange-500 '>
      <div className="flex flex-row justify-between items-center">
        <Link className=' font-bold text-3xl antialiased text-orange-500 tracking-tight' to='/'>AyushEats.com</Link>
        <div className='md:hidden'>
          <MobileNav/>
        </div>
        <div className='max-md:hidden'>
          <MainNav/>
        </div>
      </div>

    </div>
  )
}

export default Header