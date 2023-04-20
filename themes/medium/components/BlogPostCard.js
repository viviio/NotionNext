import BLOG from '@/blog.config'
import NotionPage from '@/components/NotionPage'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import React from 'react'
import CONFIG_MEDIUM from '../config_medium'
import CategoryItem from './CategoryItem'
import TagItemMini from './TagItemMini'

const BlogPostCard = ({ post, showSummary }) => {
  const showPreview = CONFIG_MEDIUM.POST_LIST_PREVIEW && post.blockMap
  const { locale } = useGlobal()
  return (
        <div
            key={post.id}
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
            className="max-w-7xl"
        >

            <div className="flex flex-col w-full h-full dark:bg-gray-800 rounded-md rounded-t-xl ease-out duration-500  transform hover:scale-102 hover:shadow-2xl">
                <Link href={`${BLOG.SUB_PATH}/${post.slug}`}
                    passHref className={'cursor-pointer font-bold text-2xl leading-tight text-gray-600 dark:text-gray-300 '}>
                    
                    {/* 图片和标题 */}
                    <div>
                        {CONFIG_MEDIUM.POST_LIST_COVER && <div className='w-full max-h-96 rounded-t-md object-cover overflow-hidden mb-2'>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={post.page_cover} className='w-full max-h-96 object-cover hover:scale-125 duration-150' />
                        </div>}
                        <div className="mx-6 mt-6">{post.title}</div>
                    </div>

                </Link>

                <div className="text-sm py-1 mx-6 text-gray-400 select-none">{post.date?.start_date}</div>


                {/* 日期、目录、标签 */}
                <div className={'flex py-1 mx-6 items-center justify-start flex-nowrap space-x-1 text-gray-400'}>
                                                            
                    {/* {CONFIG_MEDIUM.POST_LIST_CATEGORY && (
                        <CategoryItem category={post.category} />
                    )} */}

                    {CONFIG_MEDIUM.POST_LIST_TAG &&
                        post?.tagItems?.map(tag => (
                            <TagItemMini key={tag.name} tag={tag} />
                        ))}
                </div>

                

                {(!showPreview || showSummary) && (
                    <p className="mt-1 mb-4 mx-6 text-gray-400 dark:text-gray-300 text-sm font-light leading-6 select-none">
                        {post.summary}
                    </p>
                )}

                {showPreview && (
                    <div className="overflow-ellipsis truncate ">
                        <NotionPage post={post} />
                        <div className="pointer-events-none border-t pt-8 border-dashed">
                            <div className="w-full justify-start flex">
                                <Link
                                    href={`${BLOG.SUB_PATH}/${post.slug}`}
                                    passHref
                                    className="hover:bg-opacity-100 hover:scale-105 duration-200 pointer-events-auto transform font-bold text-green-500 cursor-pointer">

                                    {locale.COMMON.ARTICLE_DETAIL}
                                    <i className="ml-1 fas fa-angle-right" />

                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
  )
}

export default BlogPostCard
