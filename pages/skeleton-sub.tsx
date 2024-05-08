import type { NextPage } from "next";

const SkeletonSub: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start">
      <div className="w-full flex flex-col items-center justify-start h-[7.75rem] md:h-[4.375rem] bg-colors-red-300" />
      <div className="w-full flex flex-col items-center justify-start h-[13.75rem] sm:h-[10.625rem] bg-colors-blue-300" />
      <div className="w-full flex flex-col items-center justify-start min-h-[31.25rem] bg-bg-colors-white" />
      <div className="w-full flex flex-col items-center justify-start min-h-[13.125rem] bg-colors-green-300" />
    </div>
  );
};

export default SkeletonSub;
