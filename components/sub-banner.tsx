import type { NextPage } from "next";
import { useEffect } from "react";

const SubBanner: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="self-stretch max-w-full h-[220px] flex flex-col items-center justify-end bg-[url('/subbanner@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-normal text-center text-29xl text-bg-colors-white font-headings-headling-2">
      <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-5">
        <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
          <h1
            className="m-0 self-stretch h-12 relative text-inherit leading-[48px] font-bold font-inherit inline-block [&.animate]:animate-[0.3s_ease-in_0s_1_normal_forwards_fade-in-left] opacity-[0] sm:text-17xl sm:leading-[36px]"
            data-animate-on-scroll
          >
            학회 소개
          </h1>
          <div
            className="self-stretch h-4 relative text-base inline-block [&.animate]:animate-[0.2s_ease-in_0.5s_1_normal_forwards_fade-in] opacity-[0] sm:text-xs"
            data-animate-on-scroll
          >
            Cybercommunication Academic Society
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-4 text-left text-base text-text-colors-gray">
        <div className="w-[640px] flex flex-row flex-wrap items-start justify-center max-w-[640px]">
          <div className="flex-1 h-[50px] flex flex-col items-center justify-end min-w-[297px] max-w-[400px] sm:hidden">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-bg-colors-white box-border h-[50.7px] flex flex-row items-center justify-start p-3.5 gap-[14px] border-[0.7px] border-solid border-colors-slate-300">
                <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                  학회 소개
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icondown.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 h-[50px] flex flex-col items-center justify-end min-w-[297px] max-w-[400px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-bg-colors-white box-border h-[50.7px] flex flex-row items-center justify-start p-3.5 gap-[14px] border-[0.7px] border-solid border-colors-slate-300">
                <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                  회장인사말
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
