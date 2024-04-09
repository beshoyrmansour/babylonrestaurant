import React from 'react'
import { Item, Languages } from '~/types/menu'

type Props = {
  item: Item;
  lang: Languages;
  onChangeLang: () => void;
}

const MenuItem = (props: Props) => {
  const { item, lang, onChangeLang } = props;
  return (
    <div className=' flex flex-col flex-nowrap w-full' >
      <div className="flex w-full text-nowrap">
        <span className='font-petitFormalScript'>
          {item.name.cz}
          {/*{lang === Languages.en ? item.name.en : item.name.cz}*/}
        </span>
        <div className='connector' />
        <span className='text-nowrap'>
          {item.price} Kč
        </span>
      </div>
      <div className="flex text-nowrap w-full justify-between font-reemKufi">
        <span className='font-italianno text-2xl'>
          {item.name.en}
        </span>
        <span>
          {item.name.ar}
        </span>
      </div>
      <p className='text-amber-600 font-forum'>
        <button onClick={onChangeLang} className="text-sm "><span className={lang === Languages.en ? 'text-yellow-100' : 'text-yellow-700'}>EN</span> / <span className={lang === Languages.cz ? 'text-yellow-100' : 'text-yellow-700'}>CZ </span> </button>
        {' '}
        {lang === Languages.en ? item.description.en : item.description.cz}
      </p>
      {/*<div className="flex w-full justify-between">
        <p className='text-amber-600 font-forum w-[50%]'>
          {item.description.cz}
        </p>
        <p className='text-amber-600 font-forum w-[50%]'>
          {item.description.en}
        </p>
      </div>*/}


    </div >
  )
}

export default MenuItem