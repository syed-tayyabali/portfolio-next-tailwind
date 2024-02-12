type IMenuData = {
  icon: JSX.Element;
  text: string;
  renderValue: string;
};

type Props = {
  menuData: IMenuData[];
  renderData: any;
  active: string;
};

export default function Menu({ menuData, renderData, active }: Props) {
  return (
    <div className="w-3/5 rounded-2xl bg-zinc-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
      {menuData?.map((item: IMenuData, index: number) => (
        <button
          key={index}
          onClick={() => {
            renderData(item?.renderValue);
          }}
          className={`flex flex-col items-center w-full h-full text-white rounded-xl ${
            active === item.text
              ? "bg-gradient-to-r from-pink-500 to-yellow-500"
              : "bg-zinc-800"
          } bg-gradient-to-r hover:to-yellow-500 hover:from-pink-500 transition-all p-3 font-bold`}
        >
          {item.icon}
          {item.text}
        </button>
      ))}
    </div>
  );
}
