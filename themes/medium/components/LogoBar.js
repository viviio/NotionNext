import Link from 'next/link'

export default function LogoBar (props) {
  const { siteInfo } = props
  return (
    <div id='top-wrapper' className='flex-1 flex items-center '>
          <Link href='/' className='flex flex-row text-md md:text-xl dark:text-gray-200'>
            
            
            <img src={'./avatar.png'} className='h-8' />
            {/* <div className='text-center'>{siteInfo?.title}</div> */}

            
            
            
          </Link>
          
    </div>
  );
}
