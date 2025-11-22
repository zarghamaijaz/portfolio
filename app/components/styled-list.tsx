import Image from "next/image";

type DataType = {
    title: string;
    description: string;
    image?: string;
}


const StyledList = ({data}: {data: DataType[]}) => {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.title} className="flex gap-6 items-center mb-[100px]">
                    <div className="shrink-0 h-8 w-8 rounded-full border-2 border-cyan-400"></div>
                    <div className="flex-1">
                        <h4 className="text-lg lg:text-2xl mb-4">{item.title}</h4>
                        <p className="text-sm lg:text-base text-gray-300">{item.description}</p>
                    </div>
                {item.image && (
                    <div className="flex-1">
                        <Image src={item.image} alt={item.title} width={1920} height={1080} className="w-full h-auto object-contain" />
                    </div>
                )}
                </li>
            ))}
        </ul>
    );
}
 
export default StyledList;