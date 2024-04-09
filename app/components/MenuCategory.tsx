import React from 'react'
import { Category, Item, Languages } from '~/types/menu'
import MenuItem from './MenuItem'

type Props = {
  category: Category;
  lang: Languages;
  onChangeLang: () => void;

}

const MenuCategory = (props: Props) => {
  const { category, lang, onChangeLang } = props;

  if (category && typeof category === 'object' && category.items && Array.isArray(category.items) && category.items.length > 0)
    return (
      <div className=" ">
        <h1 className='text-4xl my-12 text-center font-charm'>{category.category_name}</h1>
        {
          category.items.map((menuItem: Item) => (
            <div key={menuItem.id} className='mb-12' >

              <MenuItem onChangeLang={onChangeLang} lang={lang} item={menuItem} />
            </div>
          )
          )}
      </div>
    );
  return (<></>)
}

export default MenuCategory
