import Image from "next/image";

const PerspectiveGrid = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/svgs/perspective-grid.svg"
          alt="Banner wave"
          width={500}
          height={500}
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-trasparent to-background"></div>
      </div>
    </>
  );
};

export default PerspectiveGrid;
