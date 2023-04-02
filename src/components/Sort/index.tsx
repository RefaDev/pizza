import React, { memo, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSort, setDir } from 'redux/slices/filter/slice'
import { SortEnum } from 'redux/slices/filter/types'
import { RootState } from 'redux/store'

type ListItem = {
  name: string
  sort: SortEnum
}

const list: ListItem[] = [
  { name: 'популярности', sort: SortEnum.RATING },
  { name: 'цене', sort: SortEnum.PRICE },
  { name: 'алфавиту', sort: SortEnum.TITLE },
]

const Sort: React.FC = memo(() => {
  const dispatch = useDispatch()
  const sort = useSelector((state: RootState) => state.filter.sort)
  const sortRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)
  const [change, setChange] = useState(false)

  const onClickListItem = (obj: ListItem) => {
    dispatch(setSort(obj))
    setOpen(false)
  }

  const onChangeDir = () => {
    setChange(!change)
    dispatch(setDir(change))
  }

  const popupList = list.map((obj, i) => (
    <li
      onClick={() => onClickListItem(obj)}
      className={sort.sort === obj.sort ? 'active' : ''}
      key={i}
    >
      {obj.name}
    </li>
  ))

  useEffect(() => {
    const handleClosePopup = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setOpen(false)
      }
    }

    document.body.addEventListener('click', handleClosePopup)

    return () => document.body.removeEventListener('click', handleClosePopup)
  }, [])
  return (
    <div className='sort' ref={sortRef}>
      <div className='sort__label'>
        <svg
          style={
            open
              ? { transform: 'rotate(180deg)' }
              : { transform: 'rotate(90deg)' }
          }
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span
          onClick={(e) => {
            console.log(e)

            setOpen(!open)
          }}
        >
          {sort.name}
        </span>
      </div>
      <button onClick={onChangeDir}>
        <span style={change ? { color: 'red' } : { color: 'black' }}>↑</span>
        <span style={change ? { color: 'black' } : { color: 'red' }}>↓</span>
      </button>
      {open && (
        <div className='sort__popup'>
          <ul>{popupList}</ul>
        </div>
      )}
    </div>
  )
})
export default Sort
