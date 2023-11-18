import BlogPostCard from './BlogPostCard'
import PaginationNumber from './PaginationNumber'
import BLOG from '@/blog.config'
import BlogPostListEmpty from './BlogPostListEmpty'
import { useEffect } from 'react'
import { Style } from '../style'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount, siteInfo }) => {

  useEffect(()=>{
    document.getElementById("cards").onmousemove = e => {
      const cardAll=document.getElementsByClassName("cardBefore");


      for(const card of cardAll) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;


        // const cardAfter= document.querySelector(".cardAfter");
    
        card.style.setProperty("background", `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 40%)`);
        // cardAfter.style.setProperty("background", `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.5), transparent 40%)`);
      };
    }

  })
  




  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)
  const showPagination = postCount >= BLOG.POSTS_PER_PAGE
  if (!posts || posts.length === 0 || page > totalPage) {
    return <BlogPostListEmpty />
  } else {
    return (
            <div id="container" className='w-full'>
                    {/* 文章列表 */}
                    <div id="cards" className="grid xl:grid-cols-2 grid-cols-1 gap-5 py-2">
                        {posts?.map(post => (
                            <BlogPostCard index={posts.indexOf(post)} key={post.id} post={post} siteInfo={siteInfo} />
                        ))}
                    </div>

                    {showPagination && <PaginationNumber page={page} totalPage={totalPage} />}
            </div>
    )
  }
}

export default BlogPostListPage
