import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`items-center  cursor-pointer inline-block rounded-md text-gray-600 dark:text-gray-100 hover:bg-indigo-100 hover:text-indigo-500 duration-200
        ml-2 py-1 px-2 text-xs whitespace-nowrap 
        ${selected
          ? 'text-white dark:text-gray-300 dark:bg-black dark:hover:bg-gray-900'
          : ` notion-${tag.color}_background`}` }>
        
        


      <div className='font-light '>{selected && <i className='mr-1 fa-tag'/>} {tag.name + (tag.count ? `(${tag.count})` : '')} </div>

    </Link>
  )
}

export default TagItemMini
