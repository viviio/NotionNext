import Link from 'next/link'
import { useRouter } from 'next/router'
import LogoBar from './LogoBar'
import React from 'react'
import Collapse from '@/components/Collapse'
import GroupMenu from './GroupMenu'
import { useGlobal } from '@/lib/global'
import CONFIG_MEDIUM from '../config_medium'
import SocialButton from './SocialButton'

/**
 * 顶部导航栏 + 菜单
 * @param {} param0
 * @returns
 */
export default function TopNavBar(props) {
  const { className, customNav } = props
  const router = useRouter()
  const [isOpen, changeShow] = React.useState(false)

  const { locale } = useGlobal()

  const defaultLinks = [
    { icon: 'fas fa-th', name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG_MEDIUM.MENU_CATEGORY },
    { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: CONFIG_MEDIUM.MENU_TAG },
    { icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: CONFIG_MEDIUM.MENU_ARCHIVE },
    { icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: CONFIG_MEDIUM.MENU_SEARCH }
  ]

  const navs = defaultLinks.concat(customNav)

  const toggleMenuOpen = () => {
    changeShow(!isOpen)
  }

  return (
      <div id='sticky-nav' className={'sticky-nav sticky-nav-full top-0  w-full z-40 ' + className}>
            {/* 折叠菜单 */}
            <Collapse type='vertical' isOpen={isOpen} className='md:hidden'>
                <div className='bg-white dark:bg-hexo-black-gray pt-1 py-2 px-7 lg:hidden '>
                    <GroupMenu {...props} />
                </div>
            </Collapse>

            <div id="sticky-nav" className='flex w-full h-16 bg-opacity-60 px-7 items-between'>

                {/* 图标Logo */}
                <LogoBar {...props} />

                {/* 右侧汉堡菜单 */}

                  <div className='flex-1 flex md:hidden justify-center items-center text-sm space-x-4 font-serif dark:text-gray-200'>
                      <div onClick={toggleMenuOpen} className='cursor-pointer'>
                          {isOpen ? <i className='fas fa-times' /> : <i className='fas fa-bars' />}
                      </div>
                  </div>

               

                {/* 顶部tab */}
                <div className=' flex-1 hidden md:flex justify-center space-x-1.5'>
                    {navs && navs.map(link => {
                      if (link?.show) {
                        const selected = (router.pathname === link.to) || (router.asPath === link.to)
                        return (
                            <Link
                                key={`${link.id}-${link.to}`}
                                title={link.to}
                                href={link.to}
                                target={link.to.indexOf('http') === 0 ? '_blank' : '_self'}
                                className={'px-3 my-3 rounded-full bg-opacity-40 border-indigo-500 dark:border-indigo-400 duration-300 transform hover:-translate-y-1 text-sm justify-between text-indigo-900 dark:text-indigo-100 cursor-pointer flex flex-nowrap items-center ' +
                                    (selected ? ' text-indigo-900 bg-indigo-400 border' : ' hover:bg-indigo-300 hover:bg-opacity-20 hover:text-indigo-500 dark:hover:text-indigo-400')}>

                                <div className='items-center justify-center flex '>
                                    <i className={link.icon} />
                                    <div className='ml-2 whitespace-nowrap'>{link.name}</div>
                                </div>
                                {link.slot}

                            </Link>
                        )
                      } else {
                        return null
                      }
                    })}
                </div>

                <div className='flex-1 flex pr-4 justify-end'><SocialButton/></div>

                
            </div>
        </div>
  )
}
