import type { NextPage } from "next";

export type DropdownCloseType = {
  prop?: string;
};

const DropdownClose: NextPage<DropdownCloseType> = ({ prop }) => {
  return (
    <div className="w-80 flex flex-col items-start justify-start text-left text-base text-text-colors-gray font-headings-headling-2">
      <div className="self-stretch bg-bg-colors-white box-border h-[50.7px] flex flex-row items-center justify-start p-3.5 gap-[14px] border-[0.7px] border-solid border-colors-slate-300">
        <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
          {prop}
        </div>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/icondown.svg"
        />
      </div>
    </div>
  );
};

export default DropdownClose;
