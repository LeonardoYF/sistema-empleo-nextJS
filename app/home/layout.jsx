import { Inter } from "next/font/google";
import "../globals.css";

import Menu from "../../components/Menu";
import SideBar from "../../components/SideBar";
const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <div className="bg-gray-100  flex">
        <SideBar />
        <div className="block w-4/5">
          <Menu />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
export default RootLayout;
