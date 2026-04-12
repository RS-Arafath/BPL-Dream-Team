import React from 'react';
import bannerImg from '../../../assets/banner-main.png';
import shadowImg from '../../../assets/bg-shadow.png';
const Banner = () => {
  return (
    <div className="mb-20 container mx-auto my-5">
      <div className="relative w-full rounded-2xl overflow-hidden bg-[#0d0d0d] min-h-[220px] flex items-center justify-center">
        <img
          src={shadowImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-10 gap-4 w-full">
          <img
            src={bannerImg}
            alt="Cricket"
            className="w-28 sm:w-36 md:w-44 lg:w-60"
          />

          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl leading-snug">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="text-white/70 text-lg sm:text-2xl">
            Beyond Boundaries Beyond Limits
          </p>

          <div className="border border-[#E3FA28] p-2 rounded-2xl">
            <button className="bg-[#E3FA28] text-black font-bold px-7 py-2.5 rounded-lg hover:scale-102 transition-transform">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
