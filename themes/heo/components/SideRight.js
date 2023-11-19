import Card from './Card'
import TagGroups from './TagGroups'
import Catalog from './Catalog'
import { InfoCard } from './InfoCard'
import dynamic from 'next/dynamic'
import Live2D from '@/components/Live2D'
import { AnalyticsCard } from './AnalyticsCard'
import TouchMeCard from './TouchMeCard'
import LatestPostsGroupMini from './LatestPostsGroupMini'

const FaceBookPage = dynamic(
  () => {
    let facebook = <></>
    try {
      facebook = import('@/components/FacebookPage')
    } catch (err) {
      console.error(err)
    }
    return facebook
  },
  { ssr: false }
)

/**
 * Hexo主题右侧栏
 * @param {*} props
 * @returns
 */
export default function SideRight(props) {
  const {
    post, tagOptions,
    currentTag, rightAreaSlot
  } = props

  return (
        <div id='sideRight' className='hidden lg:block w-72 space-y-4 h-full py-2'>

            <InfoCard {...props} className='w-72' />

            <div className='sticky top-20 space-y-4'>
                {post && post.toc && post.toc.length > 0 && (
                    <Card className='bg-white dark:bg-[#1e1e1e]'>
                        <Catalog toc={post.toc} />
                    </Card>
                )}

                {/* 联系交流群 */}
                <TouchMeCard />

                {/* 最新文章列表 */}
                <div className={' dark:border-gray-700 dark:bg-[#1e1e1e] dark:text-white rounded-xl lg:p-7 p-6 hidden lg:block bg-white'}>
                    <LatestPostsGroupMini {...props} />
                </div>

                {rightAreaSlot}

                <FaceBookPage />
                {/* <Live2D /> */}

                {/* 标签和成绩 */}
                <Card className={'bg-white dark:bg-[#1e1e1e] dark:text-white'}>
                    <TagGroups tags={tagOptions} currentTag={currentTag} />
                    <hr className='mx-1 flex border-dashed border-gray-700 relative my-4' />
                    <AnalyticsCard {...props} />
                </Card>
            </div>

        </div>
  )
}
