import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
import CONFIG_MATERY from '../config_matery'

const MenuButtonGroupTop = (props) => {
  const { customNav } = props
  const router = useRouter()
  const { locale } = useGlobal()

  let links = [
    { icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: CONFIG_MATERY.MENU_ARCHIVE },
    { icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: CONFIG_MATERY.MENU_SEARCH },
    { icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG_MATERY.MENU_CATEGORY },
    { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: CONFIG_MATERY.MENU_TAG }
  ]

  if (customNav) {
    links = customNav.concat(links)
  }

  return (
    <nav id='nav' className='flex justify-center font-light w-full space-x-4'>
      {links.map(link => {
        if (link?.show) {
          const selected = (router.pathname === link.to) || (router.asPath === link.to)
          return (
            <Link
              key={`${link.to}`}
              title={link.to}
              href={link.to}
              target={link.to.indexOf('http') === 0 ? '_blank' : '_self'}
              className={'flex items-center w-10 h-10 p-3 clothoid-corner cursor-pointer duration-300 ' +
              (selected ? ' bg-indigo-100 text-indigo-500 dark:bg-night-card-hover dark:text-gray-300 drop-shadow-xl' : 'text-day-item-hover hover:bg-indigo-100 hover:text-indigo-500 dark:hover:bg-night-card-hover dark:hover:text-gray-300')}>

              <div className='mx-auto'>
                <i className={`${link.icon}`}/>
                {/* <div className='text-center'>{link.name}</div> */}
              </div>

            </Link>
          )
        } else {
          return null
        }
      })}
    </nav>
  )
}
export default MenuButtonGroupTop
