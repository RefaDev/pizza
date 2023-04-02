import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export interface IPizza {
  imageUrl: string
  name: string
  price: number
}

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<IPizza | undefined>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://63f75f65e8a73b486af676c6.mockapi.io/items/${id}`
        )
        setPizza(data)
      } catch (error) {
        alert('Произошла ошибка')
        navigate('/')
      }
    }
    fetchPizza()
  }, [])

  if (!pizza) {
    return <>'Загрузка...'</>
  }
  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur
        quos laboriosam unde beatae sequi inventore adipisci minima dolore odio
        alias doloremque, rerum dolor quam tempora blanditiis? Facilis, alias
        sapiente!
      </p>
      <h4>{pizza.price} ₽</h4>
    </div>
  )
}

export default FullPizza
