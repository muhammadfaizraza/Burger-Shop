import React from 'react'
import MenuCard from './MenuCard'
import burger1 from '../../../src/assets/Burger1.jpg'
import burger2 from '../../../src/assets/burger2.jpg'
import burger3 from '../../../src/assets/burger3.jpg'

const Menu = () => {
const addToCartHandler = (itemNum)=>{




}

  return (
    <section id = 'menu'>
      <h1>Menu</h1>

<div>
  
  <MenuCard ItemNum={1} BurgerSrc ={burger1} price={600} title="Cheese Burger" handler ={addToCartHandler} delay={0.2}/>
<MenuCard ItemNum={1} BurgerSrc ={burger2} price={800} title="Zinger Burger" handler ={addToCartHandler} delay={0.6}/>
<MenuCard ItemNum={1} BurgerSrc ={burger3} price={900} title="Crunch Burger" handler ={addToCartHandler} delay={0.8}/>


</div>
    </section>
  )
}

export default Menu