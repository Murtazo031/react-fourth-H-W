import "./footer.css";
import LogoFoot from "@/components/footer/logo/logo";
import CallFoot from "@/components/footer/call/call";
import Rights from "@/components/footer/rights/rights";

export default function Footer() {
  return (
    <footer className="footer">
      <LogoFoot />
      <CallFoot />
      <Rights />
    </footer>
  );
}
