import "./sec3Content.css";
import bactop from "@/app/assets/image/bactop.png";
import vasa from "@/app/assets/image/vasa.png";
import qaraboi from "@/app/assets/image/qaraboi.png";

export default function Content() {
  return <div className="content">
    <Top />
    <Bottom />
  </div>;
}

export function Top() {
  return (
    <div className="top">
      <div className="topimg">
        <img src={bactop} alt="" />
        <img style={{position:"absolute",zIndex:"1",left:"22%"}} src={vasa} alt="" />
      </div>
      <div className="toptext">
        <h3>Gold & Black Pottery</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
          veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
          commodo consequatuisaute.
        </p>
        <button>View Details</button>
      </div>
    </div>
  );
}
export function Bottom() {
  return (
    <div className="top">
      
      <div className="toptext">
        <h3>Orange Ceramic</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
          veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea
          commodo consequatuisaute.
        </p>
        <button>View Details</button>
      </div>
      <div className="topimg">
        <img src={bactop} alt="" />
        <img style={{position:"absolute",zIndex:"1",left:"22%"}} src={qaraboi} alt="" />
      </div>
    </div>
  );
}
