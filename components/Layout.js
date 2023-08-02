import { Sora } from "@next/font/google";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
    return (
        <div
            className={`page text-white bg-no-repeat ${sora.variable} font-sora relative `}
        >
            <div className="w-full h-full site-background" />
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
        </div>
    );
};

export default Layout;
