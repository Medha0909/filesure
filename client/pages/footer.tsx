import React from "react";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { TbMail } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { LuFile } from "react-icons/lu";

function Footer() {
  return (
    <>
      <div className="  @apply w-[1224px] h-[311px] gap-10 bg-[#111111] shadow-[0px_2px_24px_0px_#00000014] absolute pt-6 pb-0 px-0 rounded-[12px_12px_12px_12px] left-[100px] top-[5380px]">
        <img
          className="@apply w-[290px] h-[290px] top-[-60px] absolute gap-0 left-[500px]"
          src="https://s3-alpha-sig.figma.com/img/0b29/5d18/447030ac981738d1de0668b277e646ce?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RJHTG36SihUChvsQGzAhReIaW9Mk23cD12OHiHVH371Pi8n3XUpv~D4Lk8liF~8O5p15naqgldM7CgAUmcQlCOtTTwnsOxa0e1EERny3LCLqIYYAIwwaPpNifANWvQlWAr-9NcUSt8zXcuUx-u6Te78hHWftBfigh5HNCwb8ZlL9kt4eAgReKHy4EEpPqxGGnQ5xh9fTtbQWwGmGrSJX-TnWHrFR1mK8518N-R7UhRBTQ27FZUZCxrKQ3ALVT51OrW8YZMGfLfAQDRF8xbiCuhvv91ky5~osfYMo8KB9uFrEJl-KeS5vnngJbUTF05TdTJeSZuexyQy3rXfTqfvyGg__"
          alt="footerlogo"
        ></img>
        <div className="  @apply w-[1176px] h-[54px] gap-0 absolute left-[25px] top-[200px]">
          <div className="  @apply w-[294px] h-[54px] gap-2">
            <div className=" text-myIcon">
              <span>
                <HiOutlineDeviceMobile size={24} />
              </span>
              <span className="  @apply w-[103px] h-[18px] gap-0 text-sm font-medium leading-[18px] tracking-[-0.15399999916553497px] text-left text-[#98A2B3] absolute left-[30px] top-0.5">
                Contact nums
              </span>
              <span className="  @apply text-[17px] font-semibold leading-[22px] tracking-[0.2px] absolute text-left text-white top-[30px]">
                +91 0000000000
              </span>
            </div>
          </div>
          <div className="  @apply w-[294px] h-[54px] gap-2 absolute left-[294px] top-0">
            <div className="text-myIcon">
              <span>
                <TbMail size={24} />
              </span>
              <span className="  @apply w-[103px] h-[18px] gap-0 text-sm font-medium leading-[18px] tracking-[-0.15399999916553497px] text-left text-[#98A2B3] absolute left-[30px] top-0.5">
                Gmail
              </span>
              <span className="  @apply text-[17px] font-semibold leading-[22px] tracking-[0.2px] absolute text-left text-white top-[30px]">
                demo@gmail.com
              </span>
            </div>
          </div>
          <div className="  @apply w-[294px] h-[54px] gap-2 absolute left-[589px] top-0">
            <div className="text-myIcon">
              <span>
                <GrLocation size={24} />
              </span>
              <span className="  @apply w-[103px] h-[18px] gap-0 text-sm font-medium leading-[18px] tracking-[-0.15399999916553497px] text-left text-[#98A2B3] absolute left-[30px] top-0.5">
                Address
              </span>
              <span className="  @apply text-[17px] font-semibold leading-[22px] tracking-[0.2px] absolute text-left text-white top-[30px]">
                Mumbai,India
              </span>
            </div>
          </div>
          <div className="  @apply w-[294px] h-[54px] gap-2 absolute left-[882px] top-0">
            <div className="text-myIcon">
              <span>
                <LuFile size={24} />
              </span>
              <span className="  @apply w-[103px] h-[18px] gap-0 text-sm font-medium leading-[18px] tracking-[-0.15399999916553497px] text-left text-[#98A2B3] absolute left-[30px] top-0.5">
                Leave a request
              </span>
              <span className="  @apply text-[17px] font-semibold leading-[22px] tracking-[0.2px] absolute text-left text-white top-[30px]">
                Leave a request
              </span>
            </div>
          </div>
        </div>
        <div className="  @apply w-[184px] h-4 gap-3 opacity-[0px] text-[13px] font-normal leading-4 tracking-[-0.07800000160932541px] text-left text-white absolute left-[550px] top-[280px]">
          We work throughout the world
        </div>
      </div>
    </>
  );
}

export default Footer;
