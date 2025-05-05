import { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import AnimatedBackground from "../Background/AnimatedBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full font-['Poppins'] overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-20 w-full">{children}</main>
    </div>
  );
};

export default Layout;
