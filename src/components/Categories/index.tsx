import React, { memo } from 'react'

type CategoriesProps = {
  value: number
  onClickCategory: (param: number) => void
}
const categoryItems = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Categories: React.FC<CategoriesProps> = memo(
  ({ value, onClickCategory }) => {
    const liItem = categoryItems.map((item, index) => {
      return (
        <li
          onClick={() => onClickCategory(index)}
          key={index}
          className={value === index ? 'active' : ''}
        >
          {item}
        </li>
      )
    })

    return (
      <div className='categories'>
        <ul>{liItem}</ul>
      </div>
    )
  }
)

export default Categories
