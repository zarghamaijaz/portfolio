import { MY_EMAIL, MY_NAME, MY_PHONE, MY_DESIGNATION, MY_PORTFOLIO, MY_ADDRESS } from "@/constants";
import { Code, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";


const ProfessionalCard = () => {
    return (
        <div className="relative isolate bg-[#151515] max-w-[500px] pt-[60px] p-[30px] rounded-2xl overflow-hidden">
            {/* background icons & effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute w-[220px] h-[220px] border-15 border-dawn-orange rounded-full right-0 top-0 translate-y-[-50%] p-[15px]">
                    <div className="h-full w-full border-15 border-dawn-orange rounded-full"></div>
                </div>
            </div>
            {/* Actial content */}
            <div className="grid grid-cols-2 items-end gap-4">
                <div>
                    <h4 className="text-dawn-orange text-xl">{MY_NAME}</h4>
                    <p className="text-gray-300 text-sm tracking-[3px]">{MY_DESIGNATION}</p>
                    <div className="h-1 bg-dawn-orange mt-4"></div>
                    <div className="mt-4 text-sm text-gray-300">
                        <div className="flex gap-3 items-center mb-2">
                            <div className="bg-dawn-orange text-foreground h-[25px] w-[25px] rounded-full flex items-center justify-center shrink-0">
                                <Phone size={14} />
                            </div>
                            <div>{MY_PHONE}</div>
                        </div>
                        <div className="flex gap-3 items-center mb-2">
                            <div className="bg-dawn-orange text-foreground h-[25px] w-[25px] rounded-full flex items-center justify-center shrink-0">
                                <Mail size={14} />
                            </div>
                            <div>{MY_EMAIL}</div>
                        </div>
                        <div className="flex gap-3 items-center mb-2">
                            <div className="bg-dawn-orange text-foreground h-[25px] w-[25px] rounded-full flex items-center justify-center shrink-0">
                                <MapPin size={14} />
                            </div>
                            <div>{MY_ADDRESS}</div>
                        </div>
                        <div className="flex gap-3 items-center mb-2">
                            <div className="bg-dawn-orange text-foreground h-[25px] w-[25px] rounded-full flex items-center justify-center shrink-0">
                                <Code size={14} />
                            </div>
                            <div>{MY_PORTFOLIO}</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Image src="/logo.svg" height={50} width={100} alt="Zargham" />
                </div>
            </div>
        </div>
    );
}
 
export default ProfessionalCard;