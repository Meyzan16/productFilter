import React from 'react'

export default function ProductSkeleton() {
  return (
    <div className='relative animate-pulse'>
        <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none 
        lg:h-80'>
            <div className='w-full h-full bg-gray-200' />
        </div>
        <div className='mt-4 flex flex-col gap-2'>
            <div className='w-full h-4 bg-gray-200' />
            <div className='w-full h-4 bg-gray-200' />
        </div>
    </div>
  )
}