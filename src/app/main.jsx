import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "@/components/navbar/navbar";
import Section1 from "@/components/section1/section1";
import Section2 from "@/components/section2/section2";
import Section3 from "@/components/section3/section3";
import Section4 from "@/components/section4/section4";
import Section5 from "@/components/section5/section5";
import Section6 from "@/components/section6/section6";
import Footer from "@/components/footer/footer";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="conteiner">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5 />
      <Section6/>
      <Footer/>
    </div>
  </StrictMode>
);
