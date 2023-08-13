"use client";

import { Icons } from "@/design-system";

const Library: React.FC = () => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <Icons.listMusic className="text-white/60" size={26} />
          <p className=" font-medium text-md text-white/60 transition-all hover:text-white">
            Añadir cancion
          </p>
        </div>
        <Icons.plus
          onClick={onClick}
          size={20}
          className="
          text-white/60
            cursor-pointer 
            hover:text-white 
            transition
          "
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
    </div>
  );
};

export default Library;
