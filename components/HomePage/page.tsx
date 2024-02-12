import { homeWhatIdoData } from "@/constants";

export default function HomePage() {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-4xl font-bold p-4">About Me</h1>
      <div className="text-slate-400 p-4">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>
        <br />
        <p>
          My aim is to bring across your message and identity in the most
          creative way. I created web design for many famous brand companies.
        </p>
      </div>

      <h1 className="text-3xl font-bold p-4">What I do!</h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        {homeWhatIdoData?.map((item: any, index: number) => (
          <div
            key={index}
            className="flex justify-between space-x-5 bg-zinc-950 p-5 shadow-2xl rounded-xl border border-zinc-800"
          >
            <span>{item.icon}</span>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{item.heading}</h1>
              <span className="text-slate-400">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
