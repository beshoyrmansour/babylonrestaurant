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
      {item.image && <div className='w-full'>
        <img className='w-full rounded-xl mb-4' src={`./imgs/${item.image}`} alt={item.name.en} />
      </div>}
      <div className="flex w-full flex-nowrap">
        <span className='font-lugrasimo text-2xl max-w-[66%]'>
          {lang === Languages.en ? item.name.en : item.name.cz}
          {/*{lang === Languages.en ? item.name.en : item.name.cz}*/}
        </span>
        <div className='connector' />
        <span className='text-nowrap  text-2xl'>
          {item.price} Kč
        </span>
      </div>
      <div className="flex text-nowrap w-full justify-between font-lugrasimo mt-1">
        <span className='font-forum'>
          {lang === Languages.en ? item.name.cz : item.name.en}

        </span>
        <span className='font-reemKufi'>
          {item.name.ar}
        </span>
      </div>
      {(item.description.cz || item.description.en) && (
        <div className='text-yellow-100 font-forum mt-4 flex gap-2 flex-nowrap'>
          <button onClick={onChangeLang} className="text text-yellow-100 flex gap-2 flex-nowrap">
            <span className={lang === Languages.en ? 'text-yellow-100' : 'text-yellow-500'}>EN</span> / <span className={lang === Languages.cz ? 'text-yellow-100' : 'text-yellow-700'}>CZ </span>
          </button>
          <span className='text-yellow-500'>{' | '}</span>
          <span>
            {lang === Languages.en ? item.description.en : item.description.cz}
          </span>
        </div>)
      }



    </div >
  )
}

export default MenuItem
