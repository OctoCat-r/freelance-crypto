import React from "react";

import RotateLoader from "react-spinners/RotateLoader";

type Props = {};
function Loading({}: Props) {
  return (
    <div className="flex justify-center items-center h-full">
      <RotateLoader color="#65dce6" loading />
    </div>
  );
}

export default Loading;
