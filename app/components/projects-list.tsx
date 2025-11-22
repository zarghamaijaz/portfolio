import Link from "next/link";
import Image from "next/image";
import PositionAwareBgEffect from "./position-aware-bg-effect";
import { PROJECTS_LIST } from "@/constants";

const ProjectCard = ({href, title, description, image, domain}: {href: string, title: string, description: string, image: string, domain: string}) => {
    return(
        <Link href={href} className="p-4 block w-full relative isolate">
            <div className="absolute inset-0 isolate bg-white rounded-2xl overflow-hidden">
                {image && (
                    <Image src={image} alt={title} width={300} height={300} className="w-full h-full object-cover blur-[3px]" />
                )}
                <div className="bg-linear-to-t from-black to-transparent absolute inset-0 opacity-80"></div>
            </div>
            <div className="relative z-10">
                <div className="mb-[60px]">
                    <p className="bg-cyan-600 capitalize text-sm py-1 px-2 w-fit rounded-md mb-2">{domain}</p>
                </div>
                <h3 className="mb-2 font-medium">{title}</h3>
                <p className=" text-sm text-gray-300">{description}</p>
            </div>
        </Link>
    )
}


const ProjectsList = () => {
  return (
    <div className="mt-12 relative py-[100px] isolate overflow-hidden">
      <PositionAwareBgEffect/>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {PROJECTS_LIST.map((project) => (
          <ProjectCard key={project.name} href={project.href} title={project.name} description={project.description} image={project.image} domain={project.domain} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
