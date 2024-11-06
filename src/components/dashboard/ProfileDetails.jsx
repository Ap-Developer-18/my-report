import React from "react";
import profileBg from "../../assets/images/png/dashboard/profile-bg.png";
import profileImg from "../../assets/images/png/dashboard/profile-img.png";
import { PencilIcon } from "./Icons";
const ProfileDetails = () => {
  return (
    <article className="shadow-custom rounded-[10px] overflow-hidden">
      <img
        loading="lazy"
        src={profileBg}
        alt="profileBg"
        className="w-full h-[110px] sm:h-auto object-cover sm:min-h-[203px] custom-2xl:min-h-[250px] min-[1920px]:min-h-[342px]"
      />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 custom-2xl:px-8 pb-4 sm:pb-0">
        <div className="flex items-end gap-4 md:gap-6 custom-2xl:gap-[42px] -mt-8 sm:mt-[-50px] custom-2xl:mt-[-84px] pb-4 sm:pb-6 custom-2xl:pb-8">
          <div className="w-[110px] sm:w-[150px] custom-2xl:w-[213px]">
            <img
              className="rounded-full object-cover w-full h-[110px] sm:h-[149px] custom-2xl:h-[211px]"
              src={profileImg}
              alt={profileImg}
            />
          </div>
          <div>
            <p className="text-base md:text-lg custom-2xl:mb-4">Welcome</p>
            <h5 className="text-xl md:text-[26px] font-semibold font-manrope">
              Jane Daniel
            </h5>
          </div>
        </div>
        <button className="profile_btn flex items-center justify-center gap-3 group">
          <PencilIcon />
          Edit Profile
        </button>
      </div>
    </article>
  );
};

export default ProfileDetails;
