import SectionInfo from "@/app/components/section-info";
import StyledTitle from "@/app/components/styled-title";
import Timeline from "@/app/components/timeline";
import Button from "@/app/components/ui/button";
import Image from "next/image";
import { CONTRIBUTION, FEATURES } from "@/constants";
import StyledList from "@/app/components/styled-list";
import LetsTalk from "@/app/components/lets-talk";
import BannerBg from "@/app/components/banner-bg";

const { ONEVIBE } = CONTRIBUTION;

export const metadata = {
    title: "Zargham | OneVibe API"
};

const OnevibePage = () => {
  return (
    <>
      <section className="relative">
        <BannerBg />
        <div className="container mx-auto">
            <div className="mt-[100px]">
                <SectionInfo
                    badge="API"
                    title={
                        <>
                        OneVibe
                        </>
                    }
                    description={
                        <>
                        Onevibe is a social media platform focused on connecting people together in a safe and secure environment.<br/>
                        The application provides a rubust way to connect with your family and friends.<br/>
                        all in a single application.
                        </>
                    }
                    />
                <div className="mt-8 flex gap-2">
                    <Button link="https://qaboolhai.com">Live Preview</Button>
                    <Button link="#my-contribution" variant="primary">My Contribution</Button>
                </div>
            </div>
        </div>
      </section>
      <section className="pt-[300px] relative isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute h-[500px] w-[500px] rounded-full right-0 top-[250px] bg-dawn-blue blur-[200px] opacity-80"></div>
          <div className="absolute h-[500px] w-[500px] rounded-full left-0 bottom-0 bg-dawn-orange blur-[200px] opacity-30"></div>
        </div>
        <div className="container mx-auto">
          <StyledTitle>Features &amp; Details</StyledTitle>
          <p className="text-gray-300 text-center mt-4">The following are the key features provided by the platform</p>
          <div className="mt-[100px]">
            <StyledList data={FEATURES.ONEVIBE} />
          </div>
        </div>
      </section>
      <section className="pt-[300px]" id="my-contribution">
        <div className="container mx-auto">
          <StyledTitle>My Contribution</StyledTitle>
          <p className="text-gray-300 text-center mt-4">I have developed APIs for chat modules and provided them to the mobile developers for integration.</p>
        </div>
        <div className="mt-[100px]">
          <Timeline data={ONEVIBE}/>
        </div>
      </section>
      <LetsTalk/>
    </>
  );
};

export default OnevibePage;
