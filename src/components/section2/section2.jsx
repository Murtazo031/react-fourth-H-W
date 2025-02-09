import "./section2.css";
import Header from "@/components/section2/header/header";
import Handcraft from "@/components/section2/handCraft/handcraft";
import Description from "@/components/section2/description/description";

export default function Section2 () {
    return (
        <div className="section2">
            <Header />
            <Handcraft />
            <Description />
        </div>
    )
}