import React from 'react'
import { Link } from 'react-router-dom';
// import Logo from '../../images/logo.png';

const Header = ({logo, width, height, bg}) => {
    return (
        <div className='flex justify-around px-8 w-full text-white font-bold py-5'>
          
          <div className='flex justify-around px-8 w-full text-white font-bold py-5' style={{backgroundColor : `${bg}` || null }}>
            <div className='w-2/4  flex justify-center'>
              <Link to={'/'}>
                <img src={logo} alt="Logo" width={width} height={height} className='' />
              </Link>
            </div>
            <div className='w-2/4'>
              <ul className='flex justify-evenly text-sm sm:text-xl italic'>
                <li className='hover:underline underline-offset-4 hover:text-slate-800'><Link to={'/history'}>History</Link></li>
                <li className='hover:underline underline-offset-4 hover:text-slate-800'><Link to={'/team'}>Team</Link></li>
              </ul>
            </div>

          </div>
        

        </div>
    )
}

export default Header