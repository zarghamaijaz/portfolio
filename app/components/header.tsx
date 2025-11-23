import Image from "next/image";
import Button from "./ui/button";
import { Copy } from "lucide-react";
import CopyEmailButton from "./ui/copy-email-button";
import Link from "next/link";

const Header = () => {
    return (
        <div className="container mx-auto p-4">
            <header className="bg-header p-4 rounded-lg flex flex-wrap gap-4 items-center justify-between">
                <div className="flex-1">
                    <Link href="/">
                        <Image src="/logo.svg" height={80} width={120} alt="Zargham" />
                    </Link>
                </div>
                <nav className="flex-1">
                    <ul className="flex gap-3 lg:gap-6 justify-center items-center text-xs lg:text-base">
                        <li>
                            <Link href="/" className="hover:text-cyan-400 hover:underline">Home</Link>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-cyan-400 hover:underline">Projects</a>
                        </li>
                        <li>
                            <a href="#experience" className="hover:text-cyan-400 hover:underline">Experience</a>
                        </li>
                    </ul>
                </nav>
                <div className="hidden lg:flex flex-1 justify-center lg:justify-end items-center gap-2">
                    <CopyEmailButton />
                    <Button variant="gradient">Download CV</Button>
                </div>

            </header>
        </div>
    );
}
 
export default Header;