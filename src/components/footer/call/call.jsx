import "./call.css";
import email from "@/app/assets/image/email.png" 
import find from "@/app/assets/image/find.png" 
import call from "@/app/assets/image/call.png" 

export default function Call () {
    return <div className="call">
        <div>
            <img src={email} alt="" />
            <h3>EMAIL</h3>
            <p>pompeopotery@gmail.com</p>
        </div>
        <div>
            <img src={find} alt="" />
            <h3>FIND</h3>
            <p>Central Park, Manhattan <br />
            New York, 1101</p>
        </div>
        <div>
            <img src={call} alt="" />
            <h3>CALL</h3>
            <p>+1 292 345 678</p>
        </div>
    </div>
}