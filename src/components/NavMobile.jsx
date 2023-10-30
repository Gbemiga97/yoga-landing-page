import { BiMenu } from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import { navigation } from '../data'

const NavMobile = () => {
  const [showMenu, setSHowMenu] = useState(false)

  return (
    <nav>

      <button 
      onClick={() => setSHowMenu(prev => !prev)}
      className='cursor-pointer text-4xl text-heading ml-[10px] lg:hidden'>
        {
          !showMenu ? 
          <BiMenu />
          : <AiOutlineClose />
        }
      </button>

      <ul className={`${showMenu ? 'max-h-60 p-8' : 'max-h-0 p-0'}
      flex flex-col absolute w-full bg-white transition-all
      top-24 left-0 shadow-primary space-y-6 overflow-hidden`}>
        {
          navigation.map(({name, href}, i) => (
            <li key={i}>
              <a href={href}>{name}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavMobile