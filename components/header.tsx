import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="self-stretch bg-text-colors-dark-gray max-w-full h-[124px] flex flex-row items-center justify-center p-2.5 box-border text-left text-17xl text-text-colors-amber font-headings-headling-2">
      <div className="w-[1300px] flex flex-row flex-wrap items-center justify-between max-w-[1300px]">
        <b className="w-[200px] relative text-29xl leading-[48px] flex items-center shrink-0 md:text-17xl">
          LOGO
        </b>
        <div className="flex-1 flex flex-row items-center justify-between text-center">
          <b className="w-[120px] relative leading-[40px] flex items-center justify-center shrink-0 md:hidden">
            menu
          </b>
          <b className="w-[120px] relative leading-[40px] flex items-center justify-center shrink-0 md:hidden">
            menu
          </b>
          <b className="w-[120px] relative leading-[40px] flex items-center justify-center shrink-0 md:hidden">
            menu
          </b>
          <b className="w-[120px] relative leading-[40px] flex items-center justify-center shrink-0 md:hidden">
            menu
          </b>
          <b className="w-[120px] relative leading-[40px] flex items-center justify-center shrink-0 md:hidden">
            menu
          </b>
          <b className="w-[120px] relative leading-[40px] flex items-center justify-center shrink-0 md:hidden">
            menu
          </b>
        </div>
        <b className="w-[34px] relative leading-[40px] hidden text-right md:flex">
          ☰
        </b>
      </div>
    </div>
  );
};

export default Header;
