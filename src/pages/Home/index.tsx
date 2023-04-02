import React, { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage } from 'redux/slices/filter/slice'
import { fetchPizzas } from 'redux/slices/pizza/slice'
import { RootState, useAppDispatch } from 'redux/store'

import Sort from 'components/Sort'
import Categories from 'components/Categories'
import Skeleton from 'components/PizzaBlock/Skeleton'
import PizzaBlock from 'components/PizzaBlock'
import Pagination from 'components/Pagination'
import Error from 'components/Error'


const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const { categoryId, order, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter
  )
  const sort = useSelector((state: RootState) => state.filter.sort.sort)
  const { status, items } = useSelector((state: RootState) => state.pizza)

 

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id))
  }, [])
  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number))
  }
  const getPizzas = async () => {
    const sorted = sort
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const orderReq = order ? 'asc' : 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchPizzas({
        category,
        orderReq,
        search,
        sorted,
        currentPage: String(currentPage),
      })
    )

    window.scrollTo(0, 0)
  }
  useEffect(() => {
    getPizzas()
  }, [categoryId, sort, order, searchValue, currentPage])

  const pizzaBlocks = items?.map((pizza) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ))
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ))
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>

      {pizzaBlocks?.length === 0 && status === 'success' ? (
        <h1>Пиццы не найдены</h1>
      ) : status === 'error' ? (
        <Error />
      ) : (
        <div className='content__items'>
          {status === 'loading' ? skeletons : pizzaBlocks}
        </div>
      )}

      {pizzaBlocks?.length > 0 && (
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      )}
    </div>
  )
}

export default Home
