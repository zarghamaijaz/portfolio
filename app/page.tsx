import { Metadata } from "next";
import Button from "@/app/components/ui/button";
import Image from "next/image";
import WorkedDomains from "@/app/components/worked-domains";
import TechnologiesMatter from "@/app/components/technologies-matter";
import SectionInfo from "./components/section-info";
import ToolsAndTechnologies from "./components/tools-and-technologies";
import BannerBg from "./components/banner-bg";
import ProjectsList from "./components/projects-list";
import WorkExperience from "./components/work-experience";
import WhyHireMe from "./components/why-hire-me";

export const metadata: Metadata = {
  title: "Zargham's Portfolio",
  description: "A modern portfolio made with Next.js and TailwindCSS",
}

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section className="relative">
        {/* Banner background effects and icons */}
        <BannerBg />
        <div className="container mx-auto">
          <div className="mt-[100px]">
            <SectionInfo
              badge="About me"
              title={
                <>Hi, I'm Zargham. <br/>I build Websites and Web Apps.</>
              }
              description={
                <>
                  I'm an engineer focusing on web development. <br/>
                  I started as a front-end developer. Later on, I became a full-stack developer by learning Node.js and Next.js.<br/>
                  Please take a look at my portfolio to see my web dev journey.
                </>
              }
            />
            <div className="mt-8">
              <Button>Contact</Button>
            </div>
          </div>
        </div>

      </section>
      <section className="pt-[300px] relative isolate">
        <div className="absolute inset-0 -z-10 flex justify-end">
          <div className="h-[30vw] w-[30vw] rounded-full bg-linear-to-r from-dawn-orange to-dawn-blue blur-[100px] opacity-35 translate-x-[-50%]"></div>
        </div>
        <div className="container mx-auto">
          <SectionInfo
            title="Years of experience in building websites for different domains."
            description={
              <>
                Ever since I started my professional career, I have worked on a wide range of projects, from small personal projects to large-scale enterprise applications. <br/>
                Here is a list of some domains I have worked on.
              </>
            }
          />
          <WorkedDomains/>
        </div>
      </section>
      <section className="pt-[300px]">
        <div className="container mx-auto">
          <SectionInfo
            title={<>
              Not just creating interfaces, <br/>
              Creating Experiences that Breathe Life.
            </>}
            description={
              <>
                By using my modern technologies and my design knowledge, I create interfaces that are not only functional but also visually stunning. <br/>
                Because user experience is everything. <br/><br/><br/>
                <span className="text-dawn-orange">Drag and throw the icons below to see the magic.</span>
                
              </>
            }
          />
          <TechnologiesMatter/>
        </div>
      </section>
      <section className="pt-[300px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionInfo
                title={
                  <>
                    Pixel Perfection <br/>
                    Like it is meant to be.
                  </>
                }
                description={
                  <>
                    Each pixel tells its own story. <br/>
                    With my advanced knowledge in CSS & layouts, I can create interfaces that are pixel perfect to match your design accurately.
                  </>
                }
              />
              <div className="mt-8">
                <Button>Hire me for your project</Button>
              </div>
            </div>
            <div>
              <Image src="/images/pixel-perfect.jpg" alt="Pixel perfection" width={500} height={500} sizes="100vw" className="w-full h-full object-contain rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[300px] relative">
        <div className="container mx-auto">
          <SectionInfo
            title="My Tech Stack"
            description={
              <>
                Over the years, I have worked with a wide range of technologies. Whether front-end or back-end.<br/>
                Here&apos;s a list of my favorite ones. <br/>
              </>
            }
          />
        </div>
        <ToolsAndTechnologies />
      </section>
      <section className="pt-[300px]">
        <div className="container mx-auto relative isolate">
          <div className="absolute inset-0 -z-10">
            <div className="h-[230px] w-[230px] absolute top-[-50px] left-[100px] rounded-full bg-linear-to-r from-dawn-orange to-dawn-blue blur-[50px] opacity-35"></div>
          </div>
          <SectionInfo
            title="My Projects"
            description={
              <>
                Here's a list of projects I have worked on.<br/>
              </>
            }
          />
          <ProjectsList/>
        </div>
      </section>
      <section className="pt-[300px] relative isolate">
        <div className="absolute inset-0 flex items-end">
          <Image src="/svgs/banner-wave-2.svg" alt="Banner wave" width={500} height={200} className="w-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto relative isolate">
          <SectionInfo
            title="Work Experience"
            description={
              <>
                I have worked professionally for following companies.<br/>
              </>
            }
          />
          <WorkExperience/>
        </div>
      </section>
      <section className="pt-[300px] relative isolate">
        <div className="absolute inset-0">

        </div>
        <div className="container mx-auto relative isolate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionInfo
                title="Why Hire Me?"
              />
            </div>
            <div>
              <WhyHireMe/>
            </div>
          </div>
          <div className="flex justify-center mt-[100px]">
            <Button large>Hire me for your project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
