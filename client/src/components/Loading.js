import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center w-full mt-10">
      <PulseLoader color="#1e40af" loading={true} size={20} />
    </div>
  );
};

export default Loading;
