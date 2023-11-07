
import FlipCard from '@/components/FlipCard'
import Link from 'next/link'
import CONFIG from '../config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  if (!JSON.parse(CONFIG.SOCIAL_CARD)) {
    return <></>
  }
  return (
        <div className={'relative h-28 text-white flex flex-col cursor-pointer border rounded-xl bg-[#4f65f0]  dark:border-gray-600'}>

            <div className='absolute left-0 top-0 w-full h-full' style={{ background: 'url(https://bu.dusays.com/2023/05/16/64633c4cd36a9.png) center center no-repeat' }}></div>
            <FlipCard
                className='lg:p-7 p-6 '
                frontContent={
                    <div className='h-full'>
                        <h2 className='font-[1000] text-xl'>{CONFIG.SOCIAL_CARD_TITLE_1}</h2>
                        <h3 className='pt-1 text-sm'>{CONFIG.SOCIAL_CARD_TITLE_2}</h3>
                        
                    </div>}
                backContent={<Link href={CONFIG.SOCIAL_CARD_URL}>
                    <div className='font-[1000] text-xl h-full'>
                        {CONFIG.SOCIAL_CARD_TITLE_3}
                    </div>
                </Link>}
            />
            

        </div>
  )
}
