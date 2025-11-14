const EXPERIENCE = [
    {
        company: "VaporVM IT Services",
        position: "Software Engineer",
        duration: "2022 - Present",
        jobType: "Full-time",
    },
    {
        company: "QaboolHai ltd",
        position: "React Developer",
        duration: "2023 - 2024",
        jobType: "Part-time",
    },
    {
        company: "US Packaging Solutions",
        position: "Frontend Developer",
        duration: "2021 - 2022",
        jobType: "Full-time",
    },
    {
        company: "Nubrotech",
        position: "Web Developer",
        duration: "2020 - 2021",
        jobType: "Internship",
    },
]



const WorkExperienceCard = ({company, position, duration, jobType}:{
    company: string,
    position: string,
    duration: string,
    jobType: string
}) => {
    return (
        <div className="bg-elements p-4 border border-gray-700 rounded relative isolate">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="h-full w-full animate-shine" style={{background: "linear-gradient(135deg, transparent 40%, #ffffff50 45%, transparent 70%)"}}></div>
            </div>
            <div className="flex justify-between items-start gap-4">
                <h3 className="text-lg lg:text-xl">{company}</h3>
                <div className="bg-cyan-500 text-xs py-1 px-2 rounded-md">{jobType}</div>
            </div>
            <p className="text-gray-400 text-xs mb-4">{duration}</p>
            <p className="text-dawn-orange text-sm">{position}</p>
        </div>
    );
}


const WorkExperience = () => {
    return (
        <div className="mt-12">
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1">
                    <div className="bg-elements px-4 py-8 text-center h-full">
                        <h3 className="text-6xl mb-2 font-medium">4</h3>
                        <p className="text-lg leading-[1.75em]">
                            Years<br/>
                            Experience<br/>
                            Working<br/>
                        </p>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-6">
                    {EXPERIENCE.map((experience) => (
                        <WorkExperienceCard key={experience.company} company={experience.company} position={experience.position} duration={experience.duration} jobType={experience.jobType} />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default WorkExperience;