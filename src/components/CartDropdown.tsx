import React, { useState } from "react";
import "./CartDropdown.css";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Sneakers XYZ",
    price: 1499,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=100",
  },
  {
    id: 2,
    name: "Smartphone Max",
    price: 25999,
    quantity: 1,
    image:
      "https://5.imimg.com/data5/ECOM/Default/2023/9/345412856/WL/SG/VG/117134804/h2bf9e94d6604458cbd83aaba9f1734d24-500x500.jpg",
  },
  {
    id: 3,
    name: "Wireless HeadPhone Pro",
    price: 2999,
    quantity: 2,
    image: "https://istation.in/wp-content/uploads/2024/07/MQTR3.jpeg",
  },
];

const CartDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-wrapper">
      <button className="cart-icon" onClick={() => setIsOpen(!isOpen)}>
        🛒
        {cart.length > 0 && <span className="badge">{cart.length}</span>}
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <span>Qty: {item.quantity}</span>
                  <p>₹ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <strong>Total: ₹ {total}</strong>
            <button className="checkout-btn">Go to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
