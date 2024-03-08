
import HeroImg from '@/assets/hero.png'
const Hero = () => {
  return (
    <div>
        <img className='w-full max-h-[600px] object-cover ' src={HeroImg} alt="HeroImg" />
    </div>
  )
}

export default Hero