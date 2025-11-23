import { WHY_HIRE_ME } from "@/constants";

const HireMeCard = ({number, title, description}:{number: number, title: string, description: string}) => {
    return (
        <div className="bg-elements p-6 border border-gray-700 rounded relative isolate">
            <div className="absolute inset-0 flex justify-end -z-10">
                <div className="opacity-5 text-[100px] lg:text-[150px] font-semibold leading-[1em]">{number}</div>
            </div>
            <h3 className="lg:text-lg font-medium mb-4">{title}</h3>
            <p className="text-gray-300 text-xs lg:text-sm">{description}</p>
        </div>
    )
}

const WhyHireMe = () => {
    return (
        <div className="grid grid-cols-2 gap-6 relative isolate">
            <div className="absolute inset-0 flex justify-center items-center -z-10">
                <div className="bg-linear-to-r from-dawn-orange to-dawn-blue h-[50%] w-[75%]"></div>
            </div>
            {WHY_HIRE_ME.map((item, index) => (
                <HireMeCard key={item.title} number={index + 1} title={item.title} description={item.description} />
            ))}
        </div>
    );
}
 
export default WhyHireMe;