import { Github, Linkedin, Mail } from "lucide-react";
// import Image from "next/image";



const LINKS = [
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/zargham-aijaz-779890154/",
        icon: <Linkedin />
    },
    {
        name: "Github",
        href: "https://github.com/zarghamaijaz",
        icon: <Github />
    },
    {
        name: "Email",
        href: "mailto:zadxdev@gmail.com",
        icon: <Mail />
    },
]


function getCurrentYear() {
    "use client";
    return new Date().getFullYear();
}


const Footer = () => {
    return (
        <footer>
            <div className="bg-slate-800 p-4">
                <div className="flex gap-4 justify-between items-center">
                    <div>
                        <div>Copyright &copy; {getCurrentYear()}</div>
                    </div>
                    {/* <div>
                        <Image src="/logo.svg" height={100} width={150} alt="Zargham" />
                    </div> */}
                    <div>
                        <nav>
                            <ul>
                                {LINKS.map((link) => (
                                    <li key={link.name} className="inline-block mr-4">
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-500 transition-all duration-200">
                                            {link.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-slate-900 p-4 text-center ">
                <p>Made with ❤️ by <a href="https://www.linkedin.com/in/zargham-aijaz-779890154/" target="_blank" className="text-cyan-500 font-medium hover:underline">Zargham</a></p>
                <p>Wanna grab the source code? <a href="https://github.com/zarghamaijaz/portfolio" target="_blank" className="text-cyan-500 font-medium hover:underline">click here</a></p>
            </div>
        </footer>
    );
}
 
export default Footer;