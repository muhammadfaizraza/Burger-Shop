import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from "react-icons/ai"
import me from "../../assets/ceo.jpeg"


const Users = () => {
const arr =[1,2,3,4]

    return (
  
  <section className='tableClass'>
      <main>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>

              <th>Since</th>
            </tr>
          </thead>
          {
arr.map((i)=>(

<tbody key={i}>
            <tr>
            <td> #213213213</td>
            <td>FaizRaza</td>
            <td>
                <img src={me} alt=''/>
                 </td>
            <td>Admin </td>
            <td> {"24-23-2023"}</td>
    
{/* <Link to ={`/order/${"assaas"}`}>
<AiOutlineEye/>

</Link> */}

            </tr>
          </tbody>

))

          }
        </table>
      </main>
    


  </section>
  
  
    )
}

export default Users