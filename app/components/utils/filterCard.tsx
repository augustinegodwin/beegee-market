type buttonProp ={
    title:string
    active:boolean
}

export default function FilterCard(data:buttonProp) {
  return (
    data.active ?<button className=' bg-(--primary) cursor-pointer whitespace-nowrap text-white rounded-full px-5 py-2 title-font tracking-header'>
        {data.title}
    </button>:
    <button className='border border-gray-100 cursor-pointer whitespace-nowrap text-(--secondary) rounded-full px-5 py-2 title-font tracking-header'>
        {data.title}
    </button>
  )
}
