import "./logo.css";
import logo from "@/app/assets/image/Pompeo.png"

export default function Logo (){
    return (
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
    );
 
}