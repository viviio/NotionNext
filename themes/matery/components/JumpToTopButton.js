import { useGlobal } from '@/lib/global'
import React from 'react'
import CONFIG_MATERY from '../config_matery'

/**
 * 跳转到网页顶部
 * 当屏幕下滑500像素后会出现该控件
 * @param targetRef 关联高度的目标html标签
 * @param showPercent 是否显示百分比
 * @returns {JSX.Element}
 * @constructor
 */
const JumpToTopButton = ({ showPercent = true, percent }) => {
  const { locale } = useGlobal()

  if (!CONFIG_MATERY.WIDGET_TO_TOP) {
    return <></>
  }
  return (<div className='h-10 w-10 space-x-1 items-center justify-center transform hover:scale-105 hover:border-indigo-400 hover:text-indigo-400 dark:hover:border-indigo-400 dark:hover:text-indigo-400 duration-200 px-3 py-2 border border-gray-200 dark:border-gray-600 text-center text-day-item-normal dark:text-night-item-normal bg-none dark:bg-hexo-black-gray rounded-full'
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
        <div title={locale.POST.TOP} ><i className='fas fa-arrow-up text-sm rounded-full' /></div>
        {showPercent && (<div className='text-md hidden lg:block'>{percent}</div>)}
    </div>)
}

export default JumpToTopButton
