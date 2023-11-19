import Link from 'next/link'

/**
 * 标签组
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const TagGroups = ({ tags, className }) => {
  if (!tags) return <></>
  return (
        <div id='tags-group' className='dark:border-gray-700 space-y-2'>
            {
                tags.map((tag, index) => {
                  return <Link passHref
                        key={index}
                        href={`/tag/${encodeURIComponent(tag.name)}`}
                        className={'cursor-pointer inline-block  whitespace-nowrap'}>
                        <div className={`${className || ''} text-gray-400  flex items-center hover:bg-indigo-500 hover:text-white  px-2 py-0.5 duration-150 transition-all`}>
                            <div className='text-xs font-normal'>{tag.name} </div>{tag.count ? <sup className='relative ml-1'>{tag.count}</sup> : <></>}
                        </div>

                    </Link>
                })
            }
        </div>
  )
}

export default TagGroups
