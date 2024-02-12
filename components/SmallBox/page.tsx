type IsmData = {
  icon: JSX.Element;
  text: string;
  url: string;
};

type Props = {
  smBoxData: IsmData[];
};

export default function SmallBox({ smBoxData }: Props) {
  return (
    <div className="flex space-x-2">
      {smBoxData?.map((item: IsmData, index: number) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          data-te-toggle="tooltip"
          title={item.text}
          className="w-12 h-12 bg-blue-500 text-white rounded-xl focus:outline-none bg-zinc-800 bg-gradient-to-r hover:to-yellow-500 hover:from-pink-500 transition-all p-3"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
