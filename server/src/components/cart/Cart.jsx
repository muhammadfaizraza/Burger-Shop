import React from "react";
import burger1 from "../../assets/Burger1.jpg";
import {Link} from 'react-router-dom'

const CartIem = ({ value, title, img, increament, decreament }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decreament}>-</button>
      <input readOnly value={value} type="number"></input>

      <button onClick={increament}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increament = (Item) => {};
  const decreament = (Item) => {};
  return (
    <section className="cart">
      <main>
        <CartIem
          title={"cheese Burger"}
          increament={() => increament(1)}
          decreament={() => decreament(1)}
          img={burger1}
          value={0}
        />
        <CartIem
          title={"cheese Burger with French Fries"}
          increament={() => increament(2)}
          decreament={() => decreament(2)}
          img={burger1}
          value={0}
        />
        <CartIem
          title={"Zinger Burger "}
          increament={() => increament(3)}
          decreament={() => decreament(3)}
          img={burger1}
          value={0}
        />
        <article>
          <div><h4>Sub Total  </h4>
          <p>Rs:{2000}</p>

          </div>
          <div><h4>Tax</h4>
          <p>Rs:{2000 *18/100}</p>
          
          </div>
          <div><h4>Shipping</h4>
          <p>Rs:{200}</p>
          
          </div>
          <div><h4>Total</h4>
          <p>Rs:{2000 + 0.18 +200}</p>
          
          </div>
          <Link to =  "/shipping">Checkout </Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
