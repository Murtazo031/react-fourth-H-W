import "./section6.css"
import sec6img1 from "@/app/assets/image/IMAGE (2).png"
import icon from "@/app/assets/icons/svg.svg"

export default function Section6 () {
return <div className="section6">
    <img src={sec6img1} alt="" />
     <p style={{color:"#D77474",fontWeight:"600"}}>LATEST NEWS</p>
     <h1>Latest news <img src={icon} alt="" /> New updates</h1>
     <div className="inpsub">
        <input placeholder="Enter your email"/>
        <button>SUBSCRIBE</button>
     </div>
     <div className="sign">
        <input type="checkbox" />
        <p>Sign up for our newsletter</p>
     </div>
    </div>

} 