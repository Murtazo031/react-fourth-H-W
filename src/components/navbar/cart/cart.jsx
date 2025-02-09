import "@/components/navbar/cart/cart.css";
import cart from "@/app/assets/image/Vector (2).png"

export default function Cart () {
    return <div className="cart">
        <img src={cart} alt="" />
        <h2>Cart</h2>
    </div>
}