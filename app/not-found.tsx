"use client";
import Lottie from "lottie-react";

import animationData from "@/public/lottie/404.json";
export default function NotFound() {
  return (
    <div className="min-h-dvh  flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="lg:text-6xl text-4xl font-bold text-center mb-4">
          {" "}
          You @re Lo$t!
        </h1>
        <Lottie
          animationData={animationData}
          autoplay={true}
          loop={true}
          style={{ maxHeight: "70vh", width: "auto" }}
        />
      </div>
    </div>
  );
}
