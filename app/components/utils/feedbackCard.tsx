import React from 'react'

export default function FeedbackCard() {
  return (
    <div className="w-full bg-(--card) flex flex-col p-4 sm:p-5 rounded-[20px] gap-6">
        <div className="w-full">
            <p className="leading-body title-font track-body font-medium text-(--secondary)">The energy blend is now part of my morning routine. Love the all-natural approach.</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-sm leading-5 text-(--primary) font-medium title-font '>Abraham Emmanuel</p>
            <p className='text-sm leading-5 text-(--secondary) title-font'>Repeated Seller</p>
        </div>
    </div>
  )
}
