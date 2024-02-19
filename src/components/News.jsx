import React from "react";
import { NewsLink } from "../data";

const News = () => {
  return (
    <div className="py-4">
      <div className="container">
        <div className="lg:grid grid-cols-3 gap-4">
          {NewsLink.map((data, index) => (
            <div className="flex lg:justify-between items-start gap-5 mb-5">
              <img src={data.imgUrl} alt="news-images" srcset="" />

              <div className="flex flex-col gap-4">
                <p className="text-2xl text-GrayishBlue font-bold ">
                  {data.numbering}
                </p>

                <p className="texx-base font-bold text-VerydarkBlue ">
                  {data.title}
                </p>

                <p className="text-sm font-normal text-DarkgrayishBlue">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
