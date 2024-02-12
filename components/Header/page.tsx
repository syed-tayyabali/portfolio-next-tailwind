import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-transparent text-white flex justify-center items-center m-4">
      <div className="w-4/6 flex justify-between">
        <Link href="/">
          <span className="text-xl font-bold">Tayyab</span>
        </Link>

        {/* <div>
          <button className="bg-zinc-950 font-bold text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all">
            Your Button
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
