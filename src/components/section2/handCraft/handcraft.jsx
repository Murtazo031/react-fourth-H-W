import "./handcraft.css"
import vases from "@/app/assets/image/vases.png"
import mugs from "@/app/assets/image/mugs.png"
import plates from "@/app/assets/image/plates.png"

export default function Handcraft () {
    return <div className="hand">
        <h2 className="rotate">HAND CRAFT POTTERY</h2>
        <div className="pottery">
          <img src={vases} alt="" />
          <img src={mugs} alt="" />
          <img src={plates} alt="" />
        </div>
    </div>
} 