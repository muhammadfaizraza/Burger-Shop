import React from 'react'
import {motion} from 'framer-motion'
import Burger from '../../assets/download.jfif'

const Contact = () => {
  return (
  <section className='contact'>
  <motion.form initial={{
x:"100vw",
opacity:0,


  }}
  animate={{
    x:"0",
    opacity:1,
    
    
      }}
      >
<motion.h2 initial={{
y:"-100vh",
opacity:0,


  }}
  animate={{
    y:"0",
    opacity:1,
    
    
      }}
transition={{
  delay:"0.4"
}}      >Contact Us</motion.h2>

<input type='text' placeholder='Name'/>
<input type='email' placeholder='Email'/> 

<textarea placeholder='Message...' cols='30' rows='10'></textarea>
<button type='submit '>Send</button>
  </motion.form>
 {/* <motion.div className='FormBorder'>
  <motion.div>

    <img src={Burger} alt='burger'></img>
  </motion.div>
   </motion.div>    */}
  </section>
  )
}

export default Contact