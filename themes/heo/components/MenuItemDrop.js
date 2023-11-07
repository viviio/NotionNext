import Link from 'next/link'
import { useState } from 'react'
import single from '../Single'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0
  


  if (!link || !link.show) {
    return null
  }


  return <div className='nav-icon' onMouseOver={() => changeShow(true)} onMouseOut={() => changeShow(false)} >

        {/* 不含子菜单 */}
        {!hasSubMenu &&
            <Link
                target={link?.to?.indexOf('http') === 0 ? '_blank' : '_self'}
                href={link?.to}
                className="group nav-icon-self font-sans text-gray-400 hover:text-white hover:bg-slate-200 dark:hover:bg-gray-700  rounded-full flex w-12 h-12 m-auto justify-center items-center no-underline tracking-widest">
                {link?.icon && <i className={link?.icon} />} {}

                {/* tab悬浮气泡 */}
                <span class="absolute opacity-0 -bottom-6 pointer-events-none transition duration-200 ease-in-out group-hover:translate-y-4 group-hover:opacity-100">
                    <span class='absolute h-2 w-2 bg-[#4f65f0] -top-[7px] left-1/2  origin-top-left rotate-45' aria-hidden="true"></span>
                    <span class=" bg-[#4f65f0] font-medium text-sm text-white px-3 py-2 rounded-md">
                    {link?.name}
                    </span>
                </span>

                
            </Link>}

        {/* 含子菜单的按钮 */}
        {hasSubMenu && <>
            <div className='cursor-pointer font-sans hover:bg-black hover:bg-opacity-10 rounded-2xl flex justify-center items-center px-3 py-1 no-underline tracking-widest'>
                {link?.icon && <i className={link?.icon} />} {link?.name}
            </div>
        </>}

        {/* 子菜单 */}
        {hasSubMenu && <ul style={{ backdropFilter: 'blur(3px)' }} className={`${show ? 'visible opacity-100 top-14' : 'invisible opacity-0 top-20'} drop-shadow-md overflow-hidden rounded-xl bg-white transition-all duration-300 z-20 absolute`}>
            {link.subMenus.map((sLink, index) => {
              return <li key={index} className='cursor-pointer hover:bg-blue-600 hover:text-white text-gray-900  tracking-widest transition-all duration-200 dark:border-gray-700  py-1 pr-6 pl-3'>
                    <Link href={sLink.to} target={link?.to?.indexOf('http') === 0 ? '_blank' : '_self'}>
                        <span className='text-sm text-nowrap font-extralight'>{link?.icon && <i className={sLink?.icon} > &nbsp; </i>}{sLink.title}</span>
                    </Link>
                </li>
            })}
        </ul>}

    </div>
}
