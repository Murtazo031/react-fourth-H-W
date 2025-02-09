import "@/components/navbar/navbar.css";
import Logo from "@/components/navbar/logo/logo";
import Pages from "@/components/navbar/pages/pages";
import Cart from "@/components/navbar/cart/cart";

export default function Navbar() {
  return <div className="navbar">
      <Logo />
      <div style={{display:"flex",gap:"2vh",alignItems:"center"}}>
      <Pages />
      <Cart />
      </div>
    </div>
}
