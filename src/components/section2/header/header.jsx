import "./header.css"
import img from "@/app/assets/icons/svg.svg"

export default function Sec2Header (){
  return<div className="headersec2">
    <p style={{color:"#D77474",fontWeight:"600"}}>PRODUCT CATEGORIES</p>
    <div className="textheader">
        <h2>Porcelain</h2>
        <img src={img} alt="" />
        <h2>Pottery</h2>
    </div>
    </div>
}