import { worksData } from "@/constants";
import Image from "next/image";
import Modal from "../Modal/page";
import { useState } from "react";

type IModalData = {
  id: number;
  projectName: string;
  language: string;
  clientName: string;
  description: string;
};

const projectDetailsData: IModalData[] = [
  {
    id: 1,
    projectName: "Lorem Ipsum",
    language: "Lorem Ipsum",
    clientName: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
  },
  {
    id: 2,
    projectName: "Lorem Ipsum",
    language: "Lorem Ipsum",
    clientName: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
  },
  {
    id: 3,
    projectName: "Lorem Ipsum",
    language: "Lorem Ipsum",
    clientName: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
  },
  {
    id: 4,
    projectName: "Lorem Ipsum",
    language: "Lorem Ipsum",
    clientName: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
  },
  {
    id: 5,
    projectName: "Lorem Ipsum",
    language: "Lorem Ipsum",
    clientName: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
  },
];

export default function Blogs() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<IModalData>();

  const toggleModal = (id: number) => {
    const data: IModalData = projectDetailsData?.filter(
      (data) => data.id === id
    )[0];
    setModalData(data);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col p-5">
        <h1 className="text-4xl font-bold p-4">Blogs</h1>
        <div className="flex">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-3">
            {worksData?.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-col h-min items-center border border-zinc-800 rounded-2xl cursor-pointer p-5 mb-5"
                onClick={() => toggleModal(item.id)}
              >
                <div className="flex flex-col space-y-3">
                  <Image
                    className="rounded-2xl"
                    width={300}
                    height={200}
                    src={item.img}
                    alt="image description"
                  />
                  <span className="text-slate-400">{item.text}</span>
                  <h1 className="text-2xl font-bold">{item.heading}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal modalData={modalData} isOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
}
