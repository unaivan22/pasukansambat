import React from 'react'


import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { BsChatSquare } from 'react-icons/bs';

export default function Home() {
  return (
    <div className='mx-auto xs:px-8 sm:px-12 md:px-32 xl:px-32 lg:px-32 bg-white'>
      <div className='columns-4 mt-12'>
        <div class="max-w-sm rounded-xl overflow-hidden shadow bg-pink-500">
          <img class="w-full" src="https://images.unsplash.com/photo-1577812581856-748375d2385d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
          <p class="text-white font-bold text-2xl line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 flex space-x-4">
            <a href='/' className='flex items-center space-x-1 text-white'>
              <MdOutlineFavoriteBorder /> 
              <small>12K</small>
            </a>
            <a href='/' className='flex items-center space-x-1 text-white'>
              <BsChatSquare /> 
              <small>12K</small>
            </a>
          </div>
          <div class="flex px-6 pt-4 pb-4 space-x-2 items-center">
            <img class="rounded-full object-fit h-11 w-11" src="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg" alt="" />
            <div className='grid grid-cols-1'>
              <p className='font-base text-md text-white line-clamp-1'>Naira Nasution</p>
              <small className='text-white'>2 hours</small>
            </div>
          </div>
        </div>
        <div class="max-w-sm rounded-xl overflow-hidden shadow bg-rose-900">
          <div class="px-6 py-4">
            <p class="text-white font-bold text-2xl line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 flex space-x-4">
            <div className='flex items-center space-x-1 text-white'>
              <MdOutlineFavoriteBorder /> 
              <small>12K</small>
            </div>
            <div className='flex items-center space-x-1 text-white'>
              <BsChatSquare /> 
              <small>12K</small>
            </div>
          </div>
          <div class="flex px-6 pt-4 pb-4 space-x-2 items-center">
            <img class="rounded-full object-fit h-11 w-11" src="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg" alt="" />
            <div className='grid grid-cols-1'>
              <p className='font-base text-md text-white line-clamp-1'>Naira Nasution</p>
              <small className='text-white'>2 hours</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
