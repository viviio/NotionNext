// import Image from 'next/image'

import BLOG from '@/blog.config'
import { ArrowSmallRight, PlusSmall } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useImperativeHandle, useRef, useState } from 'react'
import CONFIG from '../config'

/**
 * 滚动图标组
 * @returns
 */
const ScrollingTab = props => {
  return (
    <div
      id="hero-wrapper"
      className="recent-top-post-group w-full overflow-hidden select-none px-5 mb-4"
    >
      
      <div
        id="hero"
        style={{ zIndex: 1 }}
        className={
          'animate__animated animate__fadeIn animate__fast recent-post-top rounded-[12px] 2xl:px-5 recent-top-post-group max-w-[86rem] overflow-x-scroll w-full mx-auto flex-row flex-nowrap flex xl:space-x-3 relative'
        }
      >
        
        <TagsGroupBar />
      </div>
    </div>
  )
}


/**
 * 英雄区左上角banner动图
 * @returns
 */
function Banner(props) {
  const router = useRouter()
  const { latestPosts } = props
  /**
   * 随机跳转文章
   */
  function handleClickBanner() {
    const randomIndex = Math.floor(Math.random() * latestPosts.length)
    const randomPost = latestPosts[randomIndex]
    router.push(`${BLOG.SUB_PATH}/${randomPost?.slug}`)
  }

  return (
    <div
      id="banners"
      onClick={handleClickBanner}
      className="hidden xl:flex xl:flex-col group h-full bg-white dark:bg-[#1e1e1e] rounded-xl border dark:border-gray-700 mb-3 relative overflow-hidden"
    >
      <div id="banner-title" className="flex flex-col absolute top-10 left-10">
        <div className="text-4xl font-bold mb-3  dark:text-white">
          {CONFIG.HERO_TITLE_1}
          <br />
          {CONFIG.HERO_TITLE_2}
        </div>
        <div className="text-xs text-gray-600  dark:text-gray-200">
          {CONFIG.HERO_TITLE_3}
        </div>
      </div>

      {/* 斜向滚动的图标 */}
      

      {/* 遮罩 */}
      <div
        id="banner-cover"
        style={{ backdropFilter: 'blur(15px)' }}
        className={
          'rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 duration-300 transition-all bg-[#4259efdd] dark:bg-[#dca846] dark:text-white cursor-pointer absolute w-full h-full top-0 flex justify-start items-center'
        }
      >
        <div className="ml-12 -translate-x-32 group-hover:translate-x-0 duration-300 transition-all ease-in">
          <div className="text-7xl text-white font-extrabold">随便逛逛</div>
          <div className="-ml-3 text-gray-300">
            <ArrowSmallRight className={'w-24 h-24 stroke-2'} />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 图标滚动标签组
 */
function TagsGroupBar() {
  const groupIcons = CONFIG.SCROLLING_ICONS.concat(CONFIG.SCROLLING_ICONS)

  return (
    <div className="tags-group-all w-96 flex flex-col shrink-0 relative overflow-hidden p-4 h-full m-auto">
      <div className="flex flex-nowrap  top-16" style={{
            '--duration': `18000ms`,
            '--direction': 'normal'
          }}>
        {/* 内部图标元素 */}
        <div className='flex w-fit transition animate-scrollLoop'>
        {groupIcons?.map((g, index) => {
          return (
            <div key={index} className="tags-group-icon-pair ml-4 select-none">
              <div
                style={{ background: g.color }}
                className={
                  'tags-group-icon w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-md'
                }
              >
                <LazyImage
                  priority={true}
                  src={g.img}
                  title={g.title}
                  className="w-2/3 block"
                />
              </div>
              
            </div>
          )
        })}
        </div>
        {/* 两端透明遮罩 */}
        <div className='absolute inset-0 pointer-events-none dark:bg-gradient-to-r from-[#1a191d] via-transparent via-50% to-[#1a191d]'/>
      </div>
    </div>
  )
}

  

export default ScrollingTab
