const SectionInfo = ({badge, title, description}:{
    badge?: string,
    title: string | React.ReactNode,
    description?: string | React.ReactNode
}) => {
    return (
        <div>
            {badge && (
                <p className="bg-cyan-600 capitalize text-sm py-1 px-2 w-fit rounded-md mb-8">{badge}</p>
            )}
            <h2 className="text-3xl lg:text-5xl mb-8 font-heading leading-[1.35em]">{title}</h2>
            {description && (
                <p className="text-gray-300">{description}</p>
            )}
        </div>
    );
}
 
export default SectionInfo;