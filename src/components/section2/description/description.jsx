import "./description.css";

export default function Sec2Description() {
  return <div className="description">
    <RightComp/>
    <LeftComp/>
  </div>;
}

export function RightComp () {
  return <div className="righttext">
      <h4>
        Hand Grafted <br />
        Pottery since 1990
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros
        dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus
        nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
        posuere.
      </p>
    </div>
}
export function LeftComp() {
  return <div className="lefttext">
      <h4>
      We Provide Premium<br />
      Pottery Produts
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros
        dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus
        nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
        posuere.
      </p>
    </div>
}
