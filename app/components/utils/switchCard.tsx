import React from 'react'

export default function SwitchCard() {
  return (
    <div className='border bg-(--card) border-gray-200 cursor-pointer whitespace-nowrap text-(--secondary) rounded-full p-0.5 flex flex-row title-font tracking-header'>
        <button className='bg-(--primary) cursor-pointer whitespace-nowrap text-white rounded-full px-5 py-1.25 title-font tracking-header'>
          Sale
        </button>
        <button className=' cursor-pointer whitespace-nowrap text-(--secondary) rounded-full px-5 py-1.25 title-font tracking-header'>
          Rent
        </button>
    </div>
  )
}
