import Image from "next/image";
import React from "react";
import { EDUCATION, CERTIFICATIONS } from "@/constants";

const Card = ({children}: {children: React.ReactNode}) => {
    return(
        <div className="border border-dawn-orange rounded-lg lg:rounded-2xl p-4 lg:p-8">{children}</div>
    )
}

type CertificationProps = {
    title: string;
    instructor: string;
    platform: string;
    date: string;
    image?: string;
}
type EducationProps = {
    title: string;
    institution: string;
    duration: string;
}


const CertificationCard = ({data}: {data: CertificationProps[]}) => {
    return(
        <Card>
            {data.map((item, index) => (
                <div key={item.title} className="uppercase">
                    <p className="text-gray-400 text-xs lg:text-base">{item.date}</p>
                    <h3 className="lg:text-xl font-medium text-dawn-orange">{item.title}</h3>
                    <p className="text-gray-300 font-semibold text-xs lg:text-base">{item.platform}</p>
                    {item.image && (
                        <Image src={item.image} alt={item.title} width={600} height={350} className="mt-4 w-full" />
                    )}
                    {index < data.length - 1 && (
                        <div className="w-[100px] h-1 bg-dawn-orange my-[25px] lg:my-[50px]"></div>
                    )}
                </div>
            ))}
        </Card>
    )
}
const EducationCard = ({data}: {data: EducationProps[]}) => {
    return(
        <Card>
            {data.map((item, index) => (
                <div key={item.title} className="uppercase">
                    <p className="text-gray-400 text-xs lg:text-base">{item.duration}</p>
                    <h3 className="lg:text-xl font-medium text-dawn-orange">{item.title}</h3>
                    <p className="text-gray-300 font-semibold text-xs lg:text-base">{item.institution}</p>
                    {index < data.length - 1 && (
                        <div className="w-[100px] h-1 bg-dawn-orange my-[25px] lg:my-[50px]"></div>
                    )}
                </div>
            ))}
        </Card>
    )
}

const CertificationsAndEducation = () => {
    return (
        <div className="mt-12">
            <div className="grid grid-cols-2 items-start gap-4 lg:gap-8">
                <CertificationCard data={CERTIFICATIONS}/>
                <EducationCard data={EDUCATION}/>
            </div>
        </div>
    );
}
 
export default CertificationsAndEducation;