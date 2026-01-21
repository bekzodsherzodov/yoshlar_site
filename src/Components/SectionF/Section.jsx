import React from "react";
import gravvv from "./../../assets/img/Image.png";

function SectionF() {
  return (
    <section className="w-full flex justify-center mt-12 md:mt-24 lg:mt-[150px] px-2">
      <img
        src={gravvv}
        alt=""
        className="
          w-full
          max-w-[95%]
          md:max-w-[90%]
          lg:max-w-[1100px]
          h-auto
          mx-auto
          rounded-2xl
        "
      />
    </section>
  );
}

export default SectionF;
