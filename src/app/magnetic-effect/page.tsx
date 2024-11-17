import React from "react";
import GsapMagnetic from "@/components/magnetc-effect/GsapMagnetic";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="text-white text-sm">
        <p className="text-sm mx-10">Made with GSAP</p>
        <GsapMagnetic>
          <Link
            href="#"
            className="px-6 py-3 rounded-full bg-teal-500 text-center m-10 inline-block"
          >
            Hover Me
          </Link>
        </GsapMagnetic>
      </div>
    </div>
  );
};

export default page;
