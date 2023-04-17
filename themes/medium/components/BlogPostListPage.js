import BlogPostCard from './BlogPostCard'
import BLOG from '@/blog.config'
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationSimple from './PaginationSimple'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount }) => {
  const totalPage = Math.ceil(postCount / BLOG.POSTS_PER_PAGE)

  if (!posts || posts.length === 0) {
    return <BlogPostListEmpty />
  } else {
    return (
      <div className='w-full justify-center'>
        <div id='container'className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* 文章列表 */}
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
        </div>
        <PaginationSimple page={page} totalPage={totalPage} />
      </div>
    )
  }
}

export default BlogPostListPage
