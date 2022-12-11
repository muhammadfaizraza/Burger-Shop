import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from "react-icons/ai"
import {GiArmoredBoomerang} from 'react-icons/gi'


const Orders = () => {
const arr =[1,2,3,4]

return (
<section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>OrderQty</th>
              <th>Amount</th>

              <th>PaymentMethod</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          {
arr.map((i)=>(

<tbody key={i}>
            <tr>
            <td> #213213213</td>
            <td> OnGoing</td>
            <td>4 </td>
            <td>{4000} </td>
            <td> Cash</td>
            <td>Faiz</td>
            <td>

<Link to ={`/order/${"assaas"}`}>
<AiOutlineEye/>

</Link>
<button>

<GiArmoredBoomerang/> 
</button>
            </td>
            </tr>
          </tbody>

))

          }
        </table>
      </main>
    </section>
  )
}

export default Orders