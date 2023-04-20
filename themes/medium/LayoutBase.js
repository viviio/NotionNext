import CommonHead from '@/components/CommonHead'
import { useEffect, useState, createContext, useContext } from 'react'
import Footer from './components/Footer'
import InfoCard from './components/InfoCard'
import RevolverMaps from './components/RevolverMaps'
import CONFIG_MEDIUM from './config_medium'
import Tabs from '@/components/Tabs'
import TopNavBar from './components/TopNavBar'
import SearchInput from './components/SearchInput'
import BottomMenuBar from './components/BottomMenuBar'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import Live2D from '@/components/Live2D'
import DarkModeButton from '@/components/DarkModeButton'
import BLOG from '@/blog.config'
import Lottie from 'lottie-web'
const ThemeGlobalMedium = createContext()

/**
 * 基础布局 采用左右两侧布局，移动端使用顶部导航栏

 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = props => {
  const { children, meta, showInfoCard = true, slotRight, slotTop, siteInfo } = props
  const { locale } = useGlobal()
  const router = useRouter()
  const [tocVisible, changeTocVisible] = useState(false)

  useEffect(() => {
    const mycat = document.getElementById('mycat')
    Lottie.loadAnimation({
      container: mycat,
      renderer: 'svg',
      loop: true,
      autoplay:true,
      path:'./data1.json'
    })
  }, [])

  return (
        <ThemeGlobalMedium.Provider value={{ tocVisible, changeTocVisible }}>
            <div id='theme-medium' className='bg-white dark:bg-hexo-black-gray w-full h-full min-h-screen justify-center dark:text-gray-300'>
                <CommonHead meta={meta} />

                <main id='wrapper' className={'relative flex justify-center w-full h-full mx-auto'}>
                    {/* 桌面端左侧菜单 */}
                    {/* <LeftMenuBar/> */}

                    <div id='container-inner' className='w-full relative z-10'>
                        
                        {/* 移动端顶部菜单 */}
                        <TopNavBar {...props} />
                        
                        {/* 头像和标语 */}
                        <div className='-mt-8 top-0 flex-col flex items-center'>
                            
                            {/* lottie动画 */}
                            <div className='-mb-16 md:max-w-8/10 md:-mt-10 md:-mb-20  xl:-mb-30 xl:max-w-6/10 xl:-mt-16 pr-8'>
                            {/* <img src={'./meCat.png'} className='max-w-3/10' /> */}
                                <div id="mycat"></div>
                            </div>
                            
                            <Tabs>
                                {slotRight}
                                <div key={locale.NAV.ABOUT}>
                                    {showInfoCard && <InfoCard {...props} />}
                                </div>
                            </Tabs>
                        </div>
                        
                        <div className='px-12 max-w-8/10 justify-center mx-auto min-h-screen'>
                            {slotTop}
                            {children}
                            
                            {/* 切换暗模式按钮 */}
                            <div className="bottom-40 right-2 fixed justify-end z-20 bg-slate-400">
                                <DarkModeButton />
                            </div>

                            {/* 回顶按钮 */}
                            <div
                              data-aos="fade-up"
                              data-aos-duration="300"
                              data-aos-once="false"
                              data-aos-anchor-placement="top-center"
                              className='fixed xl:right-80 right-2 mr-10 bottom-24 hidden lg:block z-20'>
                              <i className='fas fa-chevron-up cursor-pointer p-2 rounded-full border' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}/>
                            </div>
                        </div>

                        {/* 底部 */}
                        <Footer title={siteInfo?.title} />
                    </div>


                </main>

                <BottomMenuBar {...props} className='block md:hidden' />
            </div>
        </ThemeGlobalMedium.Provider>
  )
}

export default LayoutBase
export const useMediumGlobal = () => useContext(ThemeGlobalMedium)
