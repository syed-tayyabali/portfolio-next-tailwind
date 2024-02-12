import {
  educationData,
  experienceData,
  knowledgeData,
  progressData,
} from "@/constants";

export default function Resume() {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-4xl font-bold p-4">Resume</h1>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="container mx-auto grid grid-cols-1 gap-8 h-min p-4">
          <h1 className="text-2xl font-bold">Education</h1>
          {educationData?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-zinc-950 p-5 shadow-2xl rounded-xl border border-zinc-800"
            >
              <span>{item.year}</span>
              <div className="flex flex-col">
                <h1 className="text-xl">{item.heading}</h1>
                <span className="text-slate-400">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 h-min p-4">
          <h1 className="text-2xl font-bold">Experience</h1>
          {experienceData?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-zinc-950 p-5 shadow-2xl rounded-xl border border-zinc-800"
            >
              <span>{item.year}</span>
              <div className="flex flex-col">
                <h1 className="text-xl">{item.heading}</h1>
                <span className="text-slate-400">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-neutral-900 rounded-xl container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        <div className="container mx-auto grid grid-cols-1 gap-8 h-min p-4">
          <h1 className="text-2xl font-bold">Working Skills</h1>
          {progressData?.map((item: any, index: number) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-between text-slate-400">
                <span>{item.name}</span>
                <span>{item.perc}</span>
              </div>
              <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                <div
                  className={`h-1 ${item.color}`}
                  style={{ width: item.perc }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-8 h-min p-4">
          <h1 className="text-2xl font-bold">Knowledges</h1>
          <div className="container mx-auto grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-4 h-min p-4">
            {knowledgeData?.map((item: string, index: number) => (
              <span
                key={index}
                className="text-center text-slate-400 w-32 h-min bg-blue-500 rounded-xl focus:outline-none bg-zinc-950 p-3"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
