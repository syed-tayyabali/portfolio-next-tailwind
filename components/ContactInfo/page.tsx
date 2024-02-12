import React from "react";

type IContactInfoData = {
  icon: JSX.Element;
  heading: string;
  text: string;
};

type Props = {
  contactInfoData: IContactInfoData[];
};

export default function ContactInfo({ contactInfoData }: Props) {
  return (
    <div className="w-full bg-zinc-800 m-5 p-5 rounded-xl items-center">
      {contactInfoData?.map((item: IContactInfoData, index: number) => (
        <React.Fragment key={`reactFragment_${index}`}>
          <div key={index} className="flex space-x-4 m-3">
            <span
              key={`button_${index}`}
              className="w-12 h-12 bg-blue-500 text-white rounded-xl focus:outline-none bg-zinc-900 bg-gradient-to-r hover:to-yellow-500 hover:from-pink-500 transition-all p-3"
            >
              {item.icon}
            </span>

            <div key={`innerDiv_${index}`} className="flex flex-col">
              <span className="text-slate-400">{item.heading}</span>
              <span>{item.text}</span>
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}
