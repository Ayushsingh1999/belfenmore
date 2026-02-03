// EnvisionSection.jsx
import React from "react";
import images from "../assets/images.png"; // sea image
import Envision from "../assets/Envision.png"; // logo

const EnvisionSection = () => {
  return (
    <div className="w-full ">
      {/* Envision logo/full-width section */}
      <div className="w-full">
        <img
          src={Envision}
          alt="Envision"
          className="w-full object-cover"
        />
      </div>

      {/* Sea background image with gradient overlay */}
      <div className="w-full relative">
        <img
          src={images}
          alt="Sea"
          className="w-full h-64 md:h-100 lg:h-196 object-cover"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute bottom-0 left-0 w-full h-[50%] z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fdf9ed 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default EnvisionSection;
