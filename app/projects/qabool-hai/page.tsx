import SectionInfo from "@/app/components/section-info";
import StyledTitle from "@/app/components/styled-title";
import Timeline from "@/app/components/timeline";
import Button from "@/app/components/ui/button";
import Image from "next/image";
import { CONTRIBUTION, FEATURES } from "@/constants";
import StyledList from "@/app/components/styled-list";
import LetsTalk from "@/app/components/lets-talk";

const { QABOOL_HAI } = CONTRIBUTION;

const QaboolHaiPage = () => {
  return (
    <>
      <section className="pt-[100px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionInfo
                title={
                  <>
                    QaboolHai
                  </>
                }
                description={
                  <>
                    QaboolHai is a Halal Matchmaking Platform where millions of young Muslim men and women, can find right Match.
                  </>
                }
              />
              <div className="mt-8 flex gap-2">
                <Button link="https://qaboolhai.com">Live Preview</Button>
                <Button link="#my-contribution" variant="primary">My Contribution</Button>
              </div>
            </div>
            <div>
              <Image
                src="/images/projects/qaboolhai/main.png"
                alt="Pixel perfection"
                width={500}
                height={500}
                sizes="100vw"
                className="w-full h-full object-contain rounded-2xl"
              />
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
          <p className="text-gray-300 text-center mt-4">The following are the key features provided by QaboolHai</p>
          <div className="mt-[100px]">
            <StyledList data={FEATURES.QABOOL_HAI} />
          </div>
        </div>
      </section>
      <section className="pt-[300px]" id="my-contribution">
        <div className="container mx-auto">
          <StyledTitle>My Contribution</StyledTitle>
          <p className="text-gray-300 text-center mt-4">I have worked on the frontend of the project. From architecturing the UI to implementing the features. As the requirements grew, I scaled the application accordingly. </p>
        </div>
        <div className="mt-[100px]">
          <Timeline data={QABOOL_HAI}/>
        </div>
      </section>
      <LetsTalk/>
    </>
  );
};

export default QaboolHaiPage;
