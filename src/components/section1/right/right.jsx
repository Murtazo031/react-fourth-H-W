import "@/components/section1/right/right.css"
import svg from "@/app/assets/icons/svg.svg"


export default function Sec1RightSide () {
      return <>
      <div className="right-side">
        <Text />
        <Button />
        <Image />
      </div>
      </>
}

export function Text () {
    return <div className="text">
          <p style={{color:"#D77474",fontWeight:"600"}}>POMPEO POTTERY</p>
          <h1>Unique Porcelain <br />
          Stone Collection</h1>
          <p style={{color:"#6C6C6C"}}>Unique & modern pottery made by our master in porcelain & stones</p>
    </div>
}

export function Button () {
    return <button className="btn">SHOP COLLECTION</button>
}

export function Image () {
    return <img className="image" src={svg} alt="" />
}