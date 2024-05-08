import type { NextPage } from "next";
import Header from "../components/header";
import SubBanner from "../components/sub-banner";
import Footer from "../components/footer";

const SkeletonSubExample: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start">
      <div className="w-full flex flex-col items-center justify-start h-[7.75rem] md:h-[4.375rem] bg-colors-red-300">
        <Header />
      </div>
      <div className="w-full flex flex-col items-center justify-start h-[13.75rem] sm:h-[10.625rem] bg-colors-blue-300">
        <SubBanner />
      </div>
      <div className="w-full flex flex-col items-center justify-start min-h-[31.25rem] bg-bg-colors-white">
        <div className="w-full text-left text-[1.875rem] text-black font-headings-headling-2">
          <div className="w-full flex flex-col items-center justify-start py-[1.25rem] px-[0rem]">
            <div className="w-full flex flex-col items-start justify-start p-[0.625rem] box-border max-w-[81.25rem]">
              <b className="w-full relative leading-[2.25rem]">
                content, content, content, content, content, content, content,
                content, content, content, content, content, content, content,
                content, content, content, content, content, content, content,
                content
              </b>
            </div>
          </div>
          <div className="w-full bg-colors-gray-300 flex flex-col items-center justify-start py-[1.25rem] px-[0rem]">
            <div className="w-full flex flex-col items-start justify-start p-[0.625rem] box-border max-w-[81.25rem]">
              <b className="w-full relative leading-[2.25rem]">
                content, content, content, content, content, content, content,
                content, content, content, content, content, content, content,
                content, content, content, content, content, content, content,
                content
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-start min-h-[13.125rem] bg-colors-green-300">
        <Footer />
      </div>
    </div>
  );
};

export default SkeletonSubExample;
