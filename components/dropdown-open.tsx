import type { NextPage } from "next";

const DropdownOpen: NextPage = () => {
  return (
    <div className="w-80 flex flex-col items-start justify-start text-left text-base text-text-colors-gray font-headings-headling-2">
      <div className="self-stretch bg-bg-colors-white box-border h-[50.7px] flex flex-row items-center justify-start p-3.5 gap-[14px] border-[0.7px] border-solid border-colors-slate-300">
        <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
          드롭다운 메뉴
        </div>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/iconup.svg"
        />
      </div>
      <div className="self-stretch bg-bg-colors-white flex flex-col items-start justify-center p-px text-sm font-body-text-small-text border-r-[0.7px] border-solid border-colors-slate-300 border-b-[0.7px] border-l-[0.7px]">
        <div className="self-stretch flex flex-row items-start justify-center py-3 px-3.5">
          <div className="flex-1 relative font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            드롭다운 메뉴
          </div>
        </div>
        <div className="self-stretch bg-colors-slate-50 flex flex-row items-start justify-center py-3 px-3.5">
          <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
            드롭다운 메뉴2
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-3 px-3.5">
          <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
            드롭다운 메뉴3
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownOpen;
