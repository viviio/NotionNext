import React, { useCallback, useEffect } from 'react'
import { ArticleLock } from './components/ArticleLock'
import HeaderArticle from './components/HeaderArticle'
import LayoutBase from './LayoutBase'
import Comment from '@/components/Comment'
import NotionPage from '@/components/NotionPage'
import ArticleAdjacent from './components/ArticleAdjacent'
import ArticleCopyright from './components/ArticleCopyright'
import { ArticleInfo } from './components/ArticleInfo'
import Catalog from './components/Catalog'
import JumpToCommentButton from './components/JumpToCommentButton'
import throttle from 'lodash.throttle'

export const LayoutSlug = props => {
  const { post, lock, validPassword } = props

  const [show, switchShow] = React.useState(false)
  const throttleMs = 200

  const scrollListener = useCallback(throttle(() => {
    const scrollY = window.pageYOffset
    const shouldShow = scrollY > 220 && post?.toc?.length > 0
    if (shouldShow !== show) {
      switchShow(shouldShow)
    }
  }, throttleMs))
  useEffect(() => {
    document.addEventListener('scroll', scrollListener)
    return () => document.removeEventListener('scroll', scrollListener)
  }, [])

  if (!post) {
    return <LayoutBase
            headerSlot={<HeaderArticle {...props} />}
            {...props}
            showCategory={false}
            showTag={false}
        ></LayoutBase>
  }

  return (<LayoutBase
        headerSlot={<HeaderArticle {...props} />}
        {...props}
        showCategory={false}
        showTag={false}
    >

        <div id='inner-wrapper'>
            <div className={'w-full mx-auto max-w-3xl'}>
                <div className=" rounded-md ">
                    {lock && <ArticleLock validPassword={validPassword} />}

                    {!lock && <div id="container" className="mx-auto overflow-x-auto max-w-3xl px-3 ">
                        {post?.type && post?.type === 'Post' && <>
                            <div
                                // data-aos="fade-down"
                                // data-aos-duration="100"
                                // data-aos-once="false"
                                // data-aos-anchor-placement="top-center"
                                className=''>
                                <ArticleInfo post={post} />
                            </div>

                        </>}

                        <div className=' subpixel-antialiased'>
                            <article itemScope >
                                {/* Notion文章主体 */}
                                <section id='notion-article' className='justify-center mx-auto max-w-3xl'>
                                    {post && <NotionPage post={post} />}
                                </section>

                                <section className="px-1 py-2 my-1 text-sm font-light overflow-auto text-gray-600  dark:text-gray-400">
                                    {/* 文章内嵌广告 */}
                                    <ins className="adsbygoogle"
                                        style={{ display: 'block', textAlign: 'center' }}
                                        data-adtest="on"
                                        data-ad-layout="in-article"
                                        data-ad-format="fluid"
                                        data-ad-client="ca-pub-2708419466378217"
                                        data-ad-slot="3806269138" />
                                </section>

                                {/* 文章版权说明 */}
                                {/* {post.type === 'Post' && <ArticleCopyright {...props} />} */}

                            </article>

                            {/* <hr className='border-dashed' /> */}

                            {/* 评论互动 */}
                            {/* <div className="overflow-x-auto dark:bg-hexo-black-gray px-3">
                                <Comment frontMatter={post} />
                            </div> */}
                        </div>

                    </div>}
                </div>

                {/* 文章推荐 */}
                {post.type === 'Post' && <ArticleAdjacent {...props} />}

                {/* 文章目录 */}
                {post?.toc?.length > 0 && <div id='toc-wrapper' style={{ zIndex: '-1' }} className='absolute top-0 w-full h-full xl:block hidden lg:max-w-3xl 2xl:max-w-4xl' >
                    <div data-aos-delay="200"
                        data-aos="fade-down"
                        data-aos-duration="200"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                        className='relative h-full'>
                        <div className='opacity-0 float-right w-60 px-10 -mr-44 h-full mt-40 ease-out duration-500 hover:opacity-100'>
                            <div className='sticky top-24 text-sm'>
                                <Catalog toc={post.toc} />
                            </div>
                        </div>
                    </div>
                </div>}

            </div>

            {/* <div className='fixed bottom-28 right-4'>
                <JumpToCommentButton />
            </div> */}

        </div>

    </LayoutBase>
  )
}
