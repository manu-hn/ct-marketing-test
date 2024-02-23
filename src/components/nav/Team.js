import React, { useState, useTransition } from 'react'
import { Link } from 'react-router-dom';
import ClimbTwo from "../../images/02climb.png"
import MountainClimb1 from "../../images/tab1.png"
import MountainClimb2 from "../../images/tab2.png"
import Mountain1 from './pages/Mountain1';
import ScheduleContent from "../../images/schedule-content.png";
import Copy from "../../images/copy.png";
import LogoMountains from "../../images/footerLogo.png";


const Team = () => {
  const [mountain, setMountain] = useState('mountain1');
  const [isPending, startTransition] = useTransition()

  function handleChange(id) {
    startTransition(() => {
      setMountain(id);
    })

  }
  const style = {

  }
  if (mountain === 'mountain1') {
    style.backgroundImage = `url(${MountainClimb1})`
    style.backgroundSize = 'cover'
  } else if (mountain === 'mountain2') {
    style.backgroundImage = `url(${MountainClimb2})`;
    style.backgroundSize = 'cover'

  }

  return (
    <>
      <div className='w-full bg-white h-40 flex items-center px-48' >
        <img src={ClimbTwo} alt="team member " />
        <p className="ml-5 text-gray-600 text-md text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam similique facere ipsum nobis doloremque, perspiciatis enim mollitia, aspernatur iste maxime porro quisquam laudantium corporis.
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="w-full h-10 bg-slate-800 flex items-center px-20  justify-between">
        <ul className="text-gray-400 flex">
          <li>
            <Link to={""}>
              <Mountain1 selectMountain={() => handleChange('mountain1')} active={mountain === 'mountain1'}>Mountain 1</Mountain1>
            </Link>
          </li>
          <li className="">
            <Link>
              <Mountain1 selectMountain={() => handleChange('mountain2')} active={mountain === 'mountain2'}>Mountain 2</Mountain1>
            </Link>
          </li>
        </ul>
        <div className='w-2/4'>
            <ul className='flex justify-evenly text-sm text-white underline sm:text-xl italic'>
              <li className=' '><Link to={'/history'}>History</Link></li>
              <li className=' '><Link to={'/team'}>Team</Link></li>
            </ul>
          </div>
      </div>
      <div className=" w-full h-screen" style={style}>
        <div className='flex justify-around px-8 w-full text-white  font-bold py-5' >
                 

        </div>
        <div className='w-full'>
          <div className='mx-44  my-24'>
            <img src={ScheduleContent} className='w-[30rem] opacity-95' alt="Schedule Content" />
          </div>
        </div>
      </div>
      <footer className='w-full h-20  flex justify-around items-center bg-slate-800'>
        <div>
          <img src={LogoMountains} alt="Logo" />
        </div>
        <div>
          <img src={Copy} alt="Copy rights" />
        </div>
      </footer>

    </>
  )
}

export default Team