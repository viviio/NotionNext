import Link from 'next/link'
import CONFIG from '../config'
import BLOG from '@/blog.config'
import TagItemMini from './TagItemMini'
import LazyImage from '@/components/LazyImage'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview = CONFIG.POST_LIST_PREVIEW && post.blockMap
  if (post && !post.pageCoverThumbnail && CONFIG.POST_LIST_COVER_DEFAULT) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover = CONFIG.POST_LIST_COVER && post?.pageCoverThumbnail && !showPreview
  return (
        <div className={` ${CONFIG.POST_LIST_COVER_HOVER_ENLARGE ? 'hover:scale-110 transition-all duration-150' : 'group card z-10 relative'}`} >
            <div className='cardBefore h-full w-full rounded-xl opacity-0 absolute top-0 left-0 z-20 pointer-events-none transition duration-500 group-hover:opacity-100'></div>
            
            <div
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
                className={'border bg-white dark:bg-[#1e1e1e] flex  flex-col h-[23rem] md:h-52 md:flex-row xl:h-96 xl:flex-col group w-full dark:border-gray-700 hover:border-indigo-600  dark:hover:border-indigo-600 duration-300 transition-colors justify-between overflow-hidden rounded-xl'}>

                {/* 图片封面 */}
                {showPageCover && (
                    <Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref legacyBehavior>
                        <div className="w-full md:w-5/12 xl:w-full overflow-hidden">
                            <LazyImage priority={index === 0} src={post?.pageCoverThumbnail} alt={post?.title} className='h-60 w-full object-cover group-hover:scale-105 group-hover:brightness-[0.25] transition-all duration-300' />
                        </div>
                    </Link>
                )}

                {/* 文字区块 */}
                <div className={'flex p-6 xl:p-4 flex-col justify-between h-48 md:h-full xl:h-48 w-full md:w-7/12 xl:w-full'}>
                    <div>
                        {/* 分类 */}
                        {post?.category && <div className={`flex mb-1 items-center ${showPreview ? 'justify-center' : 'justify-start'} hidden md:block flex-wrap dark:text-gray-500 text-gray-600 `}>
                            <Link passHref href={`/category/${post.category}`}
                                className="cursor-pointer text-xs font-normal menu-link hover:text-indigo-700 dark:hover:text-indigo-700  dark:text-gray-600 transform">
                                {post.category}
                            </Link>
                        </div>}

                        {/* 标题 */}
                        <Link
                            href={`${BLOG.SUB_PATH}/${post.slug}`}
                            passHref
                            className={' group-hover:text-indigo-700 dark:hover:text-indigo-700 dark:group-hover:text-indigo-600 text-black dark:text-gray-100  line-clamp-2 replace cursor-pointer text-xl font-extrabold leading-tight'}>
                            <span className='menu-link '>{post.title}</span>
                        </Link>
                    </div>

                    {/* 摘要 */}
                    {(!showPreview || showSummary) && (
                        <p className="line-clamp-2 replace my-3 xl:my-1 text-gray-700  dark:text-gray-300 text-sm font-light leading-tight">
                            {post.summary}
                        </p>
                    )}

                    <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                        <div>
                            {' '}
                            {post.tagItems?.map(tag => (
                                <TagItemMini key={tag.name} tag={tag} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='cardAfter h-full w-full opacity-0 absolute top-0 left-0 z-0 pointer-events-none transition duration-500 group-hover:opacity-100'></div> */}

        </div>

  )
}

export default BlogPostCard
