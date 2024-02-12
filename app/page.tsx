"use client";
import Blogs from "@/components/Blogs/page";
import Contact from "@/components/Contact/page";
import ContactInfo from "@/components/ContactInfo/page";
import HomePage from "@/components/HomePage/page";
import Menu from "@/components/Menu/page";
import Resume from "@/components/Resume/page";
import SmallBox from "@/components/SmallBox/page";
import Works from "@/components/Works/page";
import { contactInfoData, menuData, smallboxData } from "@/constants";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [bodyName, setBodyName] = useState<string>("Home");

  const handleRenderData = (data: string) => {
    setBodyName(data);
  };

  const handleBodyRender: any = {
    Home: <HomePage />,
    Contact: <Contact />,
    Blogs: <Blogs />,
    Works: <Works />,
    Resume: <Resume />,
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="w-3/4 flex space-x-5 text-white">
        <div className="w-1/2 h-3/5 rounded-3xl bg-zinc-950 p-4 flex flex-col items-center">
          <Image
            className="relative rounded-2xl -top-20"
            width={250}
            height={150}
            src="/sample_image.jpg"
            alt="image description"
          />
          <h1 className="text-3xl font-bold">Syed Tayyab Ali</h1>
          <div className="bg-zinc-800 m-4 p-3 rounded-xl">
            <span>Ui/Ux Designer</span>
          </div>

          <SmallBox smBoxData={smallboxData} />

          <ContactInfo contactInfoData={contactInfoData} />

          <div className="flex w-full justify-center">
            <button className="flex justify-center w-3/5 h-full rounded-xl font-bold bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 transition-all">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0"
                />
              </svg>{" "}
              Download CV
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-end space-y-4">
          <Menu
            menuData={menuData}
            renderData={handleRenderData}
            active={bodyName}
          />

          <div className="w-full rounded-3xl bg-zinc-950">
            {handleBodyRender[bodyName]}
            <div className="container overflow-hidden rounded-b-2xl bg-zinc-900">
              <div className="container">
                <p className="text-center py-6 text-gray-lite dark:text-slate-400 ">
                  © 2024 All Rights Reserved by ib-themes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
