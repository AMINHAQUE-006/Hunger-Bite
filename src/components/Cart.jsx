import CartCard from './CartCard'
import { useSelector } from 'react-redux'
import store from '../redux/store'

import React from 'react'

function Cart() {
    const foodInfo = useSelector((store) => store.cart.items)
  return (
    <div className='flex flex-wrap'>
        {foodInfo?.map((elem) => <CartCard key={elem.id} {...elem}/>)}
    </div>
    
  )
}

export default Cart