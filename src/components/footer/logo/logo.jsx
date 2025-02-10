import "./logo.css";
import logo from "@/app/assets/image/Pompeo.png"

export default function LogoFoot () {
    return <div className="logofoot">
        <img src={logo} alt="" />
        <p>I have always striven to fix beauty in wood, stone, <br />
        glass or pottery, that has been my creed.</p>
    </div>
}