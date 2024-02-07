import React from "react";

const CTA = ({ title }) => {
  return (
    <>
      <button className="py-2 px-4 bg-SoftRed text-OffWhite font-normal tracking-widest text-sm hover:bg-VerydarkBlue duration-75">
        {title}
      </button>
    </>
  );
};

export default CTA;
