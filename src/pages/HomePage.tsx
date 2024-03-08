import LandingImg from '@/assets/landing.png'
import DownloadImg from '@/assets/appDownload.png'


export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
        <div className=" bg-white py-8 gap-4 px-4 shadow-md rounded-lg -mt-16 flex flex-col items-center justify-center ">
            <h1 className=" text-orange-500 text-5xl font-bold tracking-tight ">Tuck into a takeaway today</h1>
            <span className=" text-gray-600" >Food is just a click away!</span>
        </div>
        <div className=" grid md:grid-cols-2 gap-5">
            <div>
                <img src={LandingImg} alt="Landing Img" />
            </div>
            <div className='flex flex-col gap-4 items-center text-center justify-center '>
                <span className='text-xl font-bold tracking-tight'>
                    Order Take-away even faster!
                </span>
                <span className='text-xs tracking-tight '>
                    Downlaod the MernEats.com App for faster ordering and personilized recommendations
                </span>
                <span>
                    
                    <img src={DownloadImg} alt="Download Img" />
                </span>
                  
            </div>
        </div>
    </div>
  )
}
