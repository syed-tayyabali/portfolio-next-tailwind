"use client";
import { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  toggleModal: any;
  modalData:
    | {
        id: number;
        projectName: string;
        language: string;
        clientName: string;
        description: string;
      }
    | undefined;
};

export default function Modal({ isOpen, toggleModal, modalData }: Props) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current?.contains(event.target)) {
        toggleModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleModal]);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-70">
        <div
          ref={modalRef}
          className="w-2/5 bg-zinc-800 p-8 rounded shadow-lg rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Modal Title</h2>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold">
                Project: {modalData?.projectName}
              </h3>
              <h3 className="text-lg font-bold">
                Client: {modalData?.clientName}
              </h3>
            </div>
            <div>
              <h3 className="text-lg font-bold">
                Langages: {modalData?.language}
              </h3>
            </div>
          </div>
          <br />
          <p>{modalData?.description}</p>
        </div>
      </div>
    )
  );
}
