import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import CategoryGroup from './CategoryGroup'
import Logo from './Logo'
import SearchDrawer from './SearchDrawer'
import TagGroups from './TagGroups'
import MenuButtonGroupTop from './MenuButtonGroupTop'
import SideBarDrawer from '@/components/SideBarDrawer'
import SideBar from './SideBar'
import throttle from 'lodash.throttle'
import SocialButton from './SocialButton'
import FloatDarkModeButton from './FloatDarkModeButton'

let windowTop = 0

/**
 * 顶部导航
 * @param {*} param0
 * @returns
 */
const TopNav = props => {
  const { tags, currentTag, categories, currentCategory } = props
  const { locale } = useGlobal()
  const searchDrawer = useRef()
  const { isDarkMode } = useGlobal()
  const throttleMs = 200
  const scrollTrigger = useCallback(throttle(() => {
    requestAnimationFrame(() => {
      const scrollS = window.scrollY
      const nav = document.querySelector('#sticky-nav')
      const header = document.querySelector('#header')
      const showNav = scrollS <= windowTop || scrollS < 5 || (header && scrollS <= header.clientHeight * 2)// 非首页无大图时影藏顶部 滚动条置顶时隐藏
      // 是否将导航栏透明
      const navTransparent = header && scrollS < 300 // 透明导航条的条件

      if (navTransparent) {
        nav && nav.classList.replace('bg-indigo-700', 'bg-none')
        nav && nav.classList.replace('text-black', 'text-white')
        nav && nav.classList.replace('drop-shadow-xl', 'shadow-none')
        nav && nav.classList.replace('dark:bg-hexo-black-gray', 'transparent')
        // nav && nav.classList.remove('backdrop-filter', 'backdrop-blur-lg')
      } else {
        nav && nav.classList.replace('bg-none', 'bg-indigo-700')
        nav && nav.classList.replace('text-white', 'text-black')
        nav && nav.classList.replace('shadow-none', 'drop-shadow-xl')
        nav && nav.classList.replace('transparent', 'dark:bg-hexo-black-gray')
        // nav && nav.classList.add('backdrop-filter', 'backdrop-blur-lg')
      }

      if (!showNav) {
        nav && nav.classList.replace('top-0', '-top-20')
        windowTop = scrollS
      } else {
        nav && nav.classList.replace('-top-20', 'top-0')
        windowTop = scrollS
      }
      navDarkMode()
    })
  }, throttleMs))

  const navDarkMode = () => {
    const nav = document.getElementById('sticky-nav')
    const header = document.querySelector('#header')
    if (!isDarkMode && nav && header) {
      if (window.scrollY < header.clientHeight) {
        nav?.classList?.add('dark')
      } else {
        nav?.classList?.remove('dark')
      }
    }
  }

  // 监听滚动
  useEffect(() => {
    scrollTrigger()

    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  }, [])

  const [isOpen, changeShow] = useState(false)

  const toggleMenuOpen = () => {
    changeShow(!isOpen)
  }

  const toggleMenuClose = () => {
    changeShow(false)
  }

  const searchDrawerSlot = <>
        {categories && (
            <section className='mt-8'>
                <div className='text-sm flex flex-nowrap justify-between font-light px-2'>
                    <div className='text-gray-600 dark:text-gray-200'><i className='mr-2 fas fa-th-list' />{locale.COMMON.CATEGORY}</div>
                    <Link
                        href={'/category'}
                        passHref
                        className='mb-3 text-gray-400 hover:text-black dark:text-gray-400 dark:hover:text-white hover:underline cursor-pointer'>

                        {locale.COMMON.MORE} <i className='fas fa-angle-double-right' />

                    </Link>
                </div>
                <CategoryGroup currentCategory={currentCategory} categories={categories} />
            </section>
        )}

        {tags && (
            <section className='mt-4'>
                <div className='text-sm py-2 px-2 flex flex-nowrap justify-between font-light dark:text-gray-200'>
                    <div className='text-gray-600 dark:text-gray-200'><i className='mr-2 fas fa-tag' />{locale.COMMON.TAGS}</div>
                    <Link
                        href={'/tag'}
                        passHref
                        className='text-gray-400 hover:text-black  dark:hover:text-white hover:underline cursor-pointer'>

                        {locale.COMMON.MORE} <i className='fas fa-angle-double-right' />

                    </Link>
                </div>
                <div className='p-2'>
                    <TagGroups tags={tags} currentTag={currentTag} />
                </div>
            </section>
        )}
    </>

  return (
      <div id='top-nav'>
            <SearchDrawer cRef={searchDrawer} slot={searchDrawerSlot} />
            {/* 导航栏 */}
            <div id='sticky-nav' className={'top-0 fixed w-full z-30 bg-day dark:bg-night-card-normal transform transition-all duration-300 ease-in-out'}>
                <div className='flex w-full max-w-full justify-between items-center px-4 py-2'>
                    
                    {/* logo */}
                    <div className='flex-none w-10 h-10'>
                        <Logo {...props} />
                    </div>

                    {/* 汉堡菜单 */}
                    {/* <div className='flex-1 flex justify-center items-center hidden '>
                        <div onClick={toggleMenuOpen} className='w-8 justify-center items-center h-8 cursor-pointer flex md:hidden'>
                            {isOpen ? <i className='fas fa-times' /> : <i className='fas fa-bars' />}
                        </div>
                    </div> */}

                    {/* 功能组 */}
                    <div className='flex-grow flex justify-end items-center'> <MenuButtonGroupTop {...props} /></div>

                    {/* 搜索按钮 */}
                    {/* <div className='flex-1 flex justify-end items-center '>
                        <div className='block lg:hidden'><Link href={'/search'} passHref>
                            <i className='fas fa-search' />
                        </Link></div>
                    </div> */}
                    
                    {/* 社交按钮 */}
                    {/* <div className='flex-none w-40 flex pr-4 justify-end'><SocialButton/></div> */}

                    {/* 黑夜按钮 */}
                    <div className="flex-none w-10 h-10 justify-end">
                      <FloatDarkModeButton />
                    </div>
                </div>

            </div>

            <SideBarDrawer isOpen={isOpen} onClose={toggleMenuClose}>
                <SideBar {...props} />
            </SideBarDrawer>

        </div>
  )
}

export default TopNav
