import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import formatDate from '@/lib/formatDate'
import TagItemMiddle from './TagItemMiddle'
import TagItemMini from './TagItemMini'
import WordCount from './WordCount'

export const ArticleInfo = (props) => {
  const { post } = props

  const { locale } = useGlobal()
  const date = formatDate(post?.date?.start_date || post?.createdTime, locale.LOCALE)
  const title = post?.title

  return (
      <section className='mb-3 dark:text-gray-200'>

            {/* 标题 */}
            <div className='mt-3'>
                <span className='text-black dark:text-white text-3xl'>{title}</span>
            </div>


            <div className='flex flex-wrap justify-between gap-3 mt-3 text-sm'>
                {post?.type !== 'Page' && (<>

                    {/* <Link
                        href={`/archive#${post?.date?.start_date?.substr(0, 7)}`}
                        passHref
                        className="cursor-pointer whitespace-nowrap">
                    </Link>

                    <WordCount />

                    <span className='whitespace-nowrap'>
                        <i className='far fa-calendar-check fa-fw' /> 更新日期: {post.lastEditedTime}
                    </span> 

                    <span className="hidden busuanzi_container_page_pv font-light mr-2">
                        <i className='mr-1 fas fa-eye' /><span className="busuanzi_value_page_pv" />
                    </span>
                    
                    
                    */}


                    {/* 标签 */}
                    <div className='-ml-2 my-3'>
                        {post.tagItems && (
                        <div className="flex flex-nowrap overflow-x-auto">
                        {post.tagItems.map(tag => (
                            <TagItemMini key={tag.name} tag={tag} />
                        ))}
                        </div>
                        )}
                    </div>

                    {/* 日期 */}
                    <div className='flex items-center'>
                        <i className='far fa-calendar-minus fa-fw my-auto'/> {date}
                    </div>

                    
                </>)}
            </div>

        </section>
  )
}
