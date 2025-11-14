const DATA=[
    {
        title: "I Build Clean, Reliable, and Scalable Digital Products",
        description: "I focus on writing high-quality, maintainable code that grows with your project. No hacks, no shortcuts. Just scalable architecture and thoughtful design that keeps your app fast and stable long after launch.",
    },
    {
        title: "End-to-End Expertise",
        description: "From UI/UX to backend systems, database structure, API integrations, authentication, cloud deployment, and performance optimization. I handle the full development cycle. You get everything done by one skilled developer, not a scattered team.",
    },
    {
        title: "Pixel-Perfect Execution",
        description: "I translate designs into smooth, responsive interfaces that look and feel exceptional on every device. I obsess over micro-interactions, animations, and accessibility. Every detail matters.",
    },
    {
        title: "Custom Solutions, Not Templates",
        description: "I build tailored solutions that fit your business needs. Not generic templates or off-the-shelf setups. Your project gets unique attention and craftsmanship.",
    },
]

const HireMeCard = ({number, title, description}:{number: number, title: string, description: string}) => {
    return (
        <div className="bg-elements p-6 border border-gray-700 rounded relative isolate">
            <div className="absolute inset-0 flex justify-end -z-10">
                <div className="opacity-5 text-[150px] font-semibold leading-[1em]">{number}</div>
            </div>
            <h3 className="text-lg font-medium mb-4">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
        </div>
    )
}

const WhyHireMe = () => {
    return (
        <div className="grid grid-cols-2 gap-6 relative isolate">
            <div className="absolute inset-0 flex justify-center items-center -z-10">
                <div className="bg-linear-to-r from-dawn-orange to-dawn-blue h-[50%] w-[75%]"></div>
            </div>
            {DATA.map((item, index) => (
                <HireMeCard key={item.title} number={index + 1} title={item.title} description={item.description} />
            ))}
        </div>
    );
}
 
export default WhyHireMe;