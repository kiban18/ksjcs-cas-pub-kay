import type { NextPage } from "next";
import Header1 from "./header1";
import SubBanner from "./sub-banner";
import Footer from "./footer";

const SkeletonSubExample: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start text-left text-[1.875rem] text-black font-headings-headling-2">
      <div className="self-stretch bg-colors-red-300 h-[7.75rem] flex flex-col items-center justify-start md:h-[4.375rem]">
        <Header1 />
      </div>
      <div className="self-stretch bg-colors-blue-300 h-[13.75rem] flex flex-col items-center justify-start sm:h-[10.625rem]">
        <SubBanner />
      </div>
      <div className="self-stretch bg-bg-colors-white flex flex-col items-center justify-start min-h-[31.25rem]">
        <div className="self-stretch flex flex-col items-center justify-start py-[1.25rem] px-[0rem]">
          <div className="w-full flex flex-col items-start justify-start p-[0.625rem] box-border max-w-[81.25rem]">
            <b className="self-stretch relative leading-[2.25rem]">
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content
            </b>
          </div>
        </div>
        <div className="self-stretch bg-colors-gray-300 flex flex-col items-center justify-start py-[1.25rem] px-[0rem]">
          <div className="w-full flex flex-col items-start justify-start p-[0.625rem] box-border max-w-[81.25rem]">
            <b className="self-stretch relative leading-[2.25rem]">
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content, content, content, content, content, content, content,
              content
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-colors-green-300 flex flex-col items-center justify-start">
        <Footer />
      </div>
    </div>
  );
};

export default SkeletonSubExample;
