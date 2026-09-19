export interface ILayoutProps {
  children: React.ReactNode
}

import { Inter, Roboto } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({subsets:["latin"], weight:["400", "700"]});

export const metadata : Metadata = {
  title: "NEXT.js",
  description: "NEXT.js learning and practicing."
};

function Layout({ children }: ILayoutProps) {

  return (
    <html>
       <body className={inter.className}>
        <div>
          <p className={roboto.className}>NEXT.js with Sahal</p>
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}

export default Layout;