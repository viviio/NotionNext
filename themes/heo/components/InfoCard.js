import BLOG from '@/blog.config'
import { ArrowRightCircle, GlobeAlt } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CONFIG from '../config'
import Announcement from './Announcement'
import Card from './Card'

/**
 * 社交信息卡
 * @param {*} props
 * @returns
 */
export function InfoCard(props) {
  const { siteInfo, notice } = props
  const router = useRouter()
  // 在文章详情页特殊处理
  const isSlugPage = router.pathname === '/[...slug]'

  return (
        <Card className='bg-[#4f65f0]  text-white flex flex-col w-72 overflow-hidden relative'>
            {/* 信息卡牌第一行 */}
            <div className='flex justify-center'>
                {/* 问候语 */}
                <GreetingsWords />
                <div className={`${isSlugPage ? 'absolute right-0 -mt-8 -mr-5 hover:opacity-0 hover:scale-150 blur' : 'cursor-pointer'} justify-center items-center flex dark:text-gray-100 transform transitaion-all duration-200`}>
                    {/* <LazyImage src={siteInfo?.icon} className='rounded-full' width={isSlugPage ? 100 : 28} alt={BLOG.AUTHOR} /> */}
                </div>
            </div>
            <div className='flex justify-center my-8 transition ease-in-out duration-300 hover:scale-110'>
                <LazyImage className='' src='/images/avator1.png' width={140} alt={BLOG.AUTHOR} />
            </div>

            



            {/* 公告栏 */}
            {/* <div>
                <Announcement post={notice} style={{ color: 'white !important' }} />
            </div> */}

            <div className='flex justify-between'>
                <div>
                    <h2 className='text-xl font-extrabold'>
                    Yuwei Liang
                    </h2>
                    <p class='text-sm pt-1'>vviii2333@outlook.com</p>
                </div>
                <div className='flex space-x-3   items-center '>
                    {/* 两个社交按钮 */}
                    {/* <div className='bg-indigo-400 p-2 rounded-full w-10 h-10 transition ease-in-out duration-200 hover:scale-110 dark:bg-yellow-500'>
                        <Link href='/about'><GlobeAlt className={'w-6 h-6'} /></Link>
                    </div> */}
                    <div className='bg-indigo-400 p-3 rounded-full w-12 h-12 transition ease-in-out duration-200 hover:scale-110 dark:bg-indigo-400'>
                        {/* <Link href={CONFIG.INFO_CARD_URL}><i className='fab fa-github text-xl w-6 h-6' /></Link> */}
                        <Link href='/about' className='w-full h-full'><GlobeAlt className={'w-6 h-6 m-auto'} /></Link>
                    </div>
                </div>
                {/* <MoreButton /> */}
            </div>
        </Card>
  )
}

/**
 * 欢迎语
 */
function GreetingsWords() {
  const greetings = CONFIG.INFOCARD_GREETINGS
  const [greeting, setGreeting] = useState(greetings[0])
  // 每次点击，随机获取greetings中的一个
  const handleChangeGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length)
    setGreeting(greetings[randomIndex])
  }

  return <div onClick={handleChangeGreeting} className=' select-none cursor-pointer py-1 px-2 bg-indigo-400 hover:bg-indigo-50  hover:text-indigo-950 dark:bg-indigo-400 dark:hover:text-white dark:hover:bg-indigo-700 text-sm rounded-lg  duration-200 transition-colors'>
        {greeting}
    </div>
}

/**
 * 了解更多按鈕
 * @returns
 */
function MoreButton() {
  return <Link href='/about'>
        <div className={'group bg-indigo-400 dark:bg-indigo-500 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white flex items-center transition-colors duration-200 py-2 px-3 rounded-full space-x-1'}>
            <ArrowRightCircle className={'group-hover:stroke-black dark:group-hover:stroke-white w-6 h-6 transition-all duration-100'} />
            <div className='font-bold'>了解更多</div>
        </div>
    </Link>
}
