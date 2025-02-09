import "./collection.css";
import collect from "@/app/assets/image/collect.png";
import collect1 from "@/app/assets/image/collect1.png";
import collect2 from "@/app/assets/image/collect2.png";
import collect3 from "@/app/assets/image/collect3.png";
import collect4 from "@/app/assets/image/collect4.png";
import collect5 from "@/app/assets/image/collect5.png";

export default function Collection() {
  return (
    <>
      <div className="collection">
        <Collect />
        <Collect1 />
        <Collect2 />
        <Collect3 />
        <Collect4 />
        <Collect5 />
      </div>
      <button className="viewbtn">VIEW ALL PRODUCTS</button>
    </>
  );
}

export function Collect() {
  return (
    <div className="collect">
      <img src={collect} alt="" />
      <div>
        <p>Decor Plate</p>
        <span>$ 65.00 USD</span>
      </div>
    </div>
  );
}
export function Collect1() {
  return (
    <div className="collect">
      <img src={collect1} alt="" />
      <div>
        <p>Decor Plate</p>
        <span>$ 65.00 USD</span>
      </div>
    </div>
  );
}
export function Collect2() {
  return (
    <div className="collect">
      <img src={collect2} alt="" />
      <div>
        <p>Decor Plate</p>
        <span>$ 65.00 USD</span>
      </div>
    </div>
  );
}
export function Collect3() {
  return (
    <div className="collect">
      <img src={collect3} alt="" />
      <div>
        <p>Decor Plate</p>
        <span>$ 65.00 USD</span>
      </div>
    </div>
  );
}
export function Collect4() {
  return (
    <div className="collect">
      <img src={collect4} alt="" />
      <div>
        <p>Decor Plate</p>
        <span>$ 65.00 USD</span>
      </div>
    </div>
  );
}
export function Collect5() {
  return (
    <div className="collect">
      <img src={collect5} alt="" />
      <div>
        <p>Decor Plate</p>
        <span>$ 65.00 USD</span>
      </div>
    </div>
  );
}
