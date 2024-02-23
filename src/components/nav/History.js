import OneHistory from "../../images/01history.png"
import BG from "../../images/footerLogo.png";
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel'
import { imagesSlider } from "../../utils/Constants";
const History = () => {
  return (
    <div className='bg-history w-full flex flex-col justify-between h-screen'>
      <div className='flex justify-around px-8 w-full text-white bg-white font-bold py-5' >
        <div className='w-2/4  flex justify-center'>
          <Link to={'/'}>
            <img src={BG} alt="Logo" className='' />
          </Link>
        </div>
        <div className='w-2/4'>
          <ul className='flex justify-evenly text-sm text-black underline sm:text-xl italic'>
            <li className=' '><Link to={'/history'}>History</Link></li>
            <li className=' '><Link to={'/team'}>Team</Link></li>
          </ul>
        </div>

      </div>

      <div className='flex flex-col mx-[20rem] mt-[2rem]'>
        <div>
          <img src={OneHistory} className="w-28 sm:w-36 md:w-44 lg:56" alt="One History" />
        </div>
        <p className=" text-justify font-light text-gray-800 text-xs sm:text-sm md:text-lg line-clamp-1 sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-5 xl:line-clamp-6 text-md ml-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos veniam iusto, facere cupiditate dolorem maxime unde excepturi? Ullam natus non animi adipisci aut amet sequi nulla? Deserunt illum veniam vero quis, fugiat explicabo assumenda, ut quae totam facere dolorem quasi ratione hic aut non amet asperiores quaerat temporibus in.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cum optio dignissimos voluptate repellendus corporis! Aspernatur magnam fugiat accusamus excepturi.
        </p>
      </div>

      <div className="w-full h-44 flex justify-center items-center  mt-20 opacity-90 bg-slate-800">
        <div className="w-[40%] sm:w-[80%]">
        <Carousel cols={4} rows={1} loop gap={5}>
          {
            imagesSlider.map((photo) => (<Carousel.Item>
              <img width={"100%"} className="h-40" src={photo.images} alt=" logo" />
            </Carousel.Item>))
          }
        </Carousel>
        </div>

      </div>
    </div>
  )
}

export default History