import {
  UploadCloud,
  Users,
  Target,
  Sun
} from 'lucide-react';



export default function StatsSection () {
  const iconClassName = "w-24 h-24 text-primary mx-auto "

  const stats = [
    {
      id: 0,
      text: "25K EGP",
      icon: <UploadCloud className={iconClassName} />,
    },
    {
      id: 1,
      text: `Total attendees  300+`,
      icon: <Users className={iconClassName} />,
    },
    {
      id: 2,
      text: "Target reach",
      icon: <Target className={iconClassName} />,
    },
    {
      id: 3,
      text: "Speeches  10+",
      icon: <Sun className={iconClassName} />,
    },
  ]

  return (
    <div className="container mx-auto px-4  my-25">
      <div className=" rounded-lg p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-20 md:gap-y-8  items-start justify-center ">
          {stats.map((state) => (
            <div key={state.id} className="flex flex-col gap-6 items-start text-center  mx-auto cursor-pointer">
              {state.icon}
              <div className="mt-2  font-bold text-3xl text-secondary">{state.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8 text-2xl font-medium text-secondary">
        Forem ipsum dolor sit amet consectetur
      </div>
    </div>
  );
}
