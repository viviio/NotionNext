import CommonHead from '@/components/CommonHead'
import { useCallback, useEffect, useState } from 'react'
import InfoCard from './components/InfoCard'
import Footer from './components/Footer'
import JumpToTopButton from './components/JumpToTopButton'
import TopNav from './components/TopNav'
import Live2D from '@/components/Live2D'
import LoadingCover from './components/LoadingCover'
import { useGlobal } from '@/lib/global'
import BLOG from '@/blog.config'
import Tabs from '@/components/Tabs'
import throttle from 'lodash.throttle'


/**
 * 基础布局 采用左右两侧布局，移动端使用顶部导航栏
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children, headerSlot, meta, siteInfo } = props
  const [show, switchShow] = useState(false)
  const { onLoading,locale } = useGlobal()

  const throttleMs = 200
  const scrollListener = useCallback(throttle(() => {
    const scrollY = window.pageYOffset
    const shouldShow = scrollY > 220
    if (shouldShow !== show) {
      switchShow(shouldShow)
    }
  }, throttleMs))

  useEffect(() => {
    document.addEventListener('scroll', scrollListener)
    return () => document.removeEventListener('scroll', scrollListener)
  }, [])


  return (
        <div id='theme-matery' className="min-h-screen flex flex-col w-full justify-between bg-day dark:bg-night">

            <CommonHead meta={meta} siteInfo={siteInfo} />

            {/* 顶部菜单 */}
            <TopNav {...props} />

            {/* 主图 */}
            {headerSlot}

            {/* 卡片组 */}
            <main id="wrapper" className="flex-1 w-full py-8 px-8 relative bg-day dark:bg-night">
                <div id="container-inner" className="w-full max-w-6xl mx-auto justify-center relative z-10">
                    {onLoading ? <LoadingCover /> : children}
                </div>
            </main>

            {/* 左下角悬浮 */}
            {/* <div className="bottom-4 -left-14 fixed justify-end z-40">
                <Live2D />
            </div> */}


            {/* 右下角按钮（黑夜模式、回顶） */}

            <div className={ (show ? ' opacity-100 fixed ' : ' hidden opacity-0 ') + ' transition-all duration-200  bottom-12 right-2 justify-end z-20' }>
                <div className= ' justify-center  flex flex-col items-center cursor-pointer '>
                    <JumpToTopButton />
                </div>
            </div>

            <Footer title={siteInfo?.title || BLOG.TITLE} />
        </div>
  )
}

export default LayoutBase
