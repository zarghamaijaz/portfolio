type TimelineData = {
    title: string,
    description: string,
    date?: string,
}

type TimelineRowProps = TimelineData & {index: number}


const TimelineRow = ({title, description, date, index}: TimelineRowProps) => {
    const isEven = index % 2 !== 0
  return (
    <div className={`flex ${isEven && "flex-row-reverse"}`}>
      <div className="flex-1">
        <div className="bg-elements p-3 lg:p-6 border border-gray-700 rounded">
          <h3 className="text-sm lg:text-lg font-medium mb-4">{title}</h3>
          <p className="text-gray-300 text-xs lg:text-sm">{description}</p>
        </div>
      </div>
      <div className="w-[50px] lg:w-[100px] shrink-0 relative">
        <div className="w-1 bg-slate-500 h-full mx-auto"></div>
        <div className="w-[30px] h-[30px] p-1 rounded-full bg-dawn-orange absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="h-full w-full rounded-full bg-background"></div>
        </div>
      </div>
      <div className="flex-1 self-center">
        {date && (
        <div className={`${isEven && "ml-auto"} bg-foreground px-4 py-2 text-xs lg:text-sm text-background w-fit rounded-md`}>{date}</div>
        )}
      </div>
    </div>
  );
};

const Timeline = ({data}: {data: TimelineData[]}) => {
  return (
    <div className="relative">
      <div className="container mx-auto">
        {data.map((item, index) =>(
            <TimelineRow key={item.title} {...item} index={index} /> 
        ))}
      </div>
    </div>
  );
};

export default Timeline;
