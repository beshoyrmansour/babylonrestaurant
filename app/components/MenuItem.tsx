import React from 'react'
import { Item, Languages } from '~/types/menu'

type Props = {
  item: Item;
  lang: Languages;

}

const MenuItem = (props: Props) => {
  const { item, lang } = props;
  return (
    <div className=' flex flex-col flex-nowrap w-full' >
      <div className="flex w-full text-nowrap">
        <span>
          {lang === Languages.en ? item.name.en : item.name.cz}
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
        {lang === Languages.en ? item.description.en : item.description.cz}
      </p>


    </div >
  )
}

export default MenuItem