import React from 'react'
import { Category, Item } from '~/types/menu'
import MenuItem from './MenuItem'

type Props = {
  category: Category
}

const MenuCategory = (props: Props) => {
  const { category } = props;

  if (category && typeof category === 'object' && category.items && Array.isArray(category.items) && category.items.length > 0)
    return (
      <div className="flex justify-center items-center w-full h-full flex-col">
        <h1 className='text-4xl my-12'>{category.category_name}</h1>
        {
          category.items.map((menuItem: Item) => (
            <div key={menuItem.id} className='mb-12' >

              <MenuItem item={menuItem} />
            </div>
          )
          )}
      </div>
    );
  return (<></>)
}

export default MenuCategory
