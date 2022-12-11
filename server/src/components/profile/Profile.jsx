import { motion } from "framer-motion";
import react from "react";
import { Link } from "react-router-dom";
import me from '../../assets/ceo.jpeg'
import {MdDashboard} from 'react-icons/md'

const Profile =()=>{

const options = {
initial:{
    y:'-100%',
    opacity:0



},animate:{
    y:'0',
    opacity:1



},


}

    return(

<section className="Profile">
    
    <main>

<motion.img src={me} alt="user" {...options   }/>

<motion.h5 {...options} transition={{delay:0.5}}>
Faiz Raza


</motion.h5>
<motion.div {...options} transition={{delay:0.6}} >

<Link to='/admin/dashboard' style={{

borderRadius:"0px",
backgroundColor:"rgb(40,40,40)"

}}> <MdDashboard/> Dashboard</Link>


</motion.div>
<motion.div initial={{
x:"100vw",
opacity:0



}
}animate={{
    x:"0",
    opacity:1
    
    
    
    }
    }>

<Link to='/myorders'>Orders</Link>


</motion.div>
   
 <motion.button initial={{
x:"100vw",
opacity:0



}
}animate={{
    x:"0",
    opacity:1
    
    
    
    }
    } translate={{

delay:0.4

    }}>
    
    LogOut
    
    
    </motion.button> 
   
    </main>
     </section>




    )
}
export default Profile;