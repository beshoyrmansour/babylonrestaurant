import React from 'react'
import { Item } from '~/types/menu'

type Props = {
  item: Item
}

const MenuItem = (props: Props) => {
  const { item } = props;
  return (
    <div className=' flex flex-col flex-nowrap w-full' >
      <div className="flex w-full text-nowrap">
        <span>
          {item.name.cz}
        </span>
        <div className='connector' />
        <span className='text-nowrap'>
          {item.price} Kč
        </span>
      </div>
      <div className="flex flex-col text-nowrap">
        <span>
          {item.name.ar}
        </span>
      </div>
      <p className='text-yellow-100'>
        {item.description.cz}
      </p>


    </div >
  )
}

export default MenuItem