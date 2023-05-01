import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`items-center  cursor-pointer inline-block rounded-md hover:bg-blue-600 hover:text-white duration-200
        ml-2 py-1 px-2 text-xs whitespace-nowrap
        ${selected
          ? 'text-white dark:text-gray-300 dark:bg-black dark:hover:bg-gray-900'
          : `text-gray-600 hover:shadow-xl dark:border-gray-400 notion-${tag.color}_background dark:bg-gray-800`}` }>
        
        


      <div className='font-light '>{selected && <i className='mr-1 fa-tag'/>} {tag.name + (tag.count ? `(${tag.count})` : '')} </div>

    </Link>
  )
}

export default TagItemMini
