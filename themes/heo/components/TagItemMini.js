import { HashTag } from '@/components/HeroIcons'
import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={'group/tag cursor-pointer inline-block  pr-4 dark:text-gray-500 text-xs whitespace-nowrap ' }>
      <div className='relative'>
        {/* <span class="block absolute w-full bg-white h-[1px]"></span> */}
        <span class="absolute block w-full origin-left scale-x-0 h-4 mr-0.5 bg-indigo-500/30 group-hover/tag:scale-x-100 transition translate duration-300"></span>
        <span class="font-['eudoxus sans'] text-xs  relative  underline-offset-4  decoration-dotted decoration-1 decoration-white group-hover/tag:text-indigo-100 group-hover/tag:decoration-indigo-500 font-normal flex items-center"><HashTag className='text-gray-500 stroke-2 mr-0.5 w-2 h-2'/> {tag.name + (tag.count ? `(${tag.count})` : '')} </span>
        
        

        
      </div>
    </Link>
  )
}

export default TagItemMini
