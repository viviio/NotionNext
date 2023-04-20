import BLOG from '@/blog.config'
import Router from 'next/router'
import React from 'react'


const InfoCard = (props) => {
  const { siteInfo } = props
  return <div id='info-card' className='py-4'>
    <div className='items-center justify-center'>
        <div className='hover:scale-105 transform duration-200 cursor-pointer flex justify-center' onClick={ () => { Router.push('/about') }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img src={siteInfo?.icon} className='rounded-full' width={120} alt={BLOG.AUTHOR}/> */}
        </div>
        <div className='transition duration-500 ease-in-out font-serif hover:italic transform hover:scale-x-150 text-xl py-2 flex justify-center dark:text-gray-300'>{BLOG.AUTHOR}</div>
        <div className='font-light text-gray-600 mb-2 hover:scale-105 transform duration-200 flex justify-center dark:text-gray-400'>{BLOG.BIO}</div>
        
    </div>
  </div>
}

export default InfoCard
