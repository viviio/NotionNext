import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'
import TagItemMini from './TagItemMini'
import CONFIG_MATERY from '../config_matery'
// import Image from 'next/image'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview = CONFIG_MATERY.POST_LIST_PREVIEW && post.blockMap
  // matery 主题默认强制显示图片
  if (post && !post.page_cover) {
    post.page_cover = siteInfo?.pageCover
  }
  const showPageCover = CONFIG_MATERY.POST_LIST_COVER && !showPreview && post?.page_cover
  const delay = (index % 3) * 300
  return (
      <div
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay={delay}
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
          className="flex flex-col w-full mb-4 ">

          {/* 固定高度 ，空白用图片拉升填充 */}
          <div className="group flex flex-col h-96 justify-between rounded-md bg-day-card-normal dark:bg-hexo-black-gray ease-out duration-500 transform hover:scale-102 hover:bg-white hover:shadow-2xl">

              {/* 头部图片 填充卡片 */}
              {showPageCover && (
                  <Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref legacyBehavior>
                      <div
                      className="h-72 m-3 relative duration-200 rounded-md cursor-pointer transform overflow-auto">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                              src={post?.page_cover}
                              alt={post.title}
                              className="h-full w-full hover:scale-125 rounded-t-md  transform object-cover duration-500"
                          />
                          
                      </div>
                  </Link>
              )}

              {/* 标签 */}
              {post?.tagItems && post?.tagItems.length > 0 && (<>
                    <div className="absolute top-3 right-3 opacity-0 justify-between flex p-3 ease-out duration-500 transform group-hover:opacity-100">
                        <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
                            <div>
                                {' '}
                                {post.tagItems.map(tag => (
                                    <TagItemMini key={tag.name} tag={tag} />
                                ))}
                            </div>
                        </div>
                    </div>
                </>)}

              {/* 文字描述 */}
              <div >
                  {/* 描述 */}
                  <div className="px-3 flex flex-col w-full  text-gray-700  dark:text-gray-300">

                      {/* 文章标题 */}
                       <div className='my-1'>
                            <span className=' text-black dark:text-day-card-normal font-medium text-2xl replace break-words w-full' > {post.title}</span>
                       </div>

                      {/* 文章概述 */}
                      {(!showPreview || showSummary) && post.summary && (
                          <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical' }}
                              className="replace mb-4 text-sm font-light text-day-item-hover leading-7 overflow-ellipsis truncate">
                              {post.summary}
                          </p>
                      )}

                      {/* 日期 */}
                      {/* <div className='text-gray-800 justify-between flex my-2  dark:text-gray-300'>
                          <Link
                              href={`/archive#${post?.date?.start_date?.substr(0, 7)}`}
                              passHref
                              className="font-light hover:underline cursor-pointer text-sm leading-4 mr-3">

                              <i className="far fa-clock mr-1" />
                              {post.date?.start_date || post.lastEditedTime}

                          </Link>
                          <Link
                              href={`/category/${post.category}`}
                              passHref
                              className="cursor-pointer font-light text-sm hover:underline hover:text-indigo-700 dark:hover:text-indigo-400 transform">

                              <i className="mr-1 far fa-folder" />
                              {post.category}

                          </Link>
                      </div> */}
                  </div>

                  
              </div>
          </div>

      </div>
  )
}

export default BlogPostCard
