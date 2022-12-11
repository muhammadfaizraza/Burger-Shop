import React from 'react'

const OrderDetail = () => {
  return (
   <section className='orderDetail'>
      <main>
      <h1>Order Details</h1>

<div>

<h1>Shipping</h1>
<p>
<b>Address</b>
{"sjjd -3-d-dssa"}

</p>
</div>
<div>

<h1>Contact</h1>
<p>
<b>Name</b>
{"Faiz Raza"}

</p>
<p>
<b>Phone</b>
{'03131018267'}

</p>
</div>
<div>

<h1>Order Status</h1>
<p>
<b>Status</b>
{"preparing"}

</p>
<p>
<b>Placed At</b>
{'1-11-2022'}

</p>
<p>
<b>Delivered At</b>
{'3-11-2022'}

</p>
</div>


<div>

<h1>Payment</h1>
<p>
<b>Payment Method</b>
  {"Online"}

</p>
<p>
<b>Payment Reference</b>
#{'asasasasads'}

</p>
<p>
<b>Paid At</b>
{'3-11-2022'}

</p>
</div>


<div>

<h1>Amount</h1>
<p>
<b>Items Total</b>
{23232}

</p>
<p>
<b>Shipping Charges</b>
{200}

</p>
<p>
<b>Tax</b>
{232}

</p>
<p>
<b>Total Amount</b>
{232 + 200 + 23232}

</p>
</div>
<article>

<h1>Ordered Items</h1>

<div>

<h1>Cheese Burger</h1>

<div>
<span>{12}</span> X
<span>{232}</span>
</div>
</div>
<div>

<h1>Veg Cheese Burger</h1>

<div>
<span>{1}</span> X
<span>{22}</span>
</div>
</div>


<div>

<h1> Burger Fries</h1>

<div>
<span>{3}</span> X
<span>{245}</span>
</div>

</div>
<div>

<h4 style={{
fontWeight:800,

}}>
Sub Total

</h4>
<div style={{
fontWeight:800,

}}>{2322}</div>

</div>

</article>



      </main>


   </section>
  )
}

export default OrderDetail