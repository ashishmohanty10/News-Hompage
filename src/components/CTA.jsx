import React from "react";

const CTA = ({ title }) => {
  return (
    <>
      <button className="text-OffWhite py-2 px-4 bg-SoftRed hover:bg-black duration-75">
        {title}
      </button>
    </>
  );
};

export default CTA;
