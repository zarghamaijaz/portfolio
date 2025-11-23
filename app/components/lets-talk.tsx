import PositionAwareBgEffect from "./position-aware-bg-effect";
import ProfessionalCard from "./professional-card";
import StyledTitle from "./styled-title";

const LetsTalk = () => {
  return (
    <section className="pt-[150px] lg:pt-[300px] pb-[50px] relative isolate overflow-hidden">
      <PositionAwareBgEffect/>
      <div className="absolute inset-0 -z-10 flex justify-center items-end overflow-hidden">
        <div className="h-[70vw] w-[70vw] lg:h-[50vw] lg:w-[50vw] blur-[10vw] opacity-30 translate-y-[50%] bg-linear-to-r from-dawn-orange to-cyan-400 rounded-full"></div>
      </div>
      <div className="mb-[100px]">
        <StyledTitle>
          <span className="text-cyan-300">Let&apos;s Discuss Your Project</span>
        </StyledTitle>
      </div>
      <div className="flex justify-center">
        <ProfessionalCard />
      </div>
    </section>
  );
};

export default LetsTalk;
