"use client"

import Image from "next/image"
import PerspectiveGrid from "./perspective-grid"
import { useRef, useEffect, useState } from "react"

const TECHNOLOGIES_LIST = [
    {
        name: "HTML",
        icon: "/icons/html.png",
    },
    {
        name: "CSS",
        icon: "/icons/css.svg",
    },
    {
        name: "JavaScript",
        icon: "/icons/javascript.png",
    },
    {
        name: "TypeScript",
        icon: "/icons/typescript.png",
    },
    {
        name: "React",
        icon: "/icons/react.svg",
    },
    {
        name: "Next.js",
        icon: "/icons/nextjs.png",
    },
    {
        name: "TailwindCSS",
        icon: "/icons/tailwindcss.png",
    },
    {
        name: "Node.js",
        icon: "/icons/node.png",
    },
    {
        name: "MongoDB",
        icon: "/icons/mongodb.webp",
    },
    {
        name: "PostgreSQL",
        icon: "/icons/postgresql.png",
    },
]

const TechnologyCard = ({name, icon}:{
    name: string,
    icon: string
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVisible(true);
            }
            else{
                setVisible(false);
            }
        },
        { threshold: 0.2 } // trigger when 20% visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return(
        <div ref={ref} className={`bg-gray-800 hover:bg-gray-700 transition-background transition-trnsform duration-200 p-4 rounded-lg flex flex-col items-center ${visible ? "fade-in-pop" : "opacity-0"}`}>
            <Image src={icon} alt={name} width={50} height={50} className="block mb-4" />
            <h3 className="mt-auto">{name}</h3>
        </div>
    )
}


const ToolsAndTechnologies = () => {
    return (
        <div className="mt-12 relative py-[100px] isolate">
            <PerspectiveGrid />
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 justify-center">
                    {TECHNOLOGIES_LIST.map(technology =>(
                        <TechnologyCard key={technology.name} name={technology.name} icon={technology.icon} />
                    ))}
                </div>

            </div>
        </div>
    );
}
 
export default ToolsAndTechnologies;