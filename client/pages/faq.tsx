import React from "react";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

function Faq() {
  return (
    <div className="  @apply w-[1440px] h-[972px] gap-10 relative px-[108px] py-20 top-[3840px]">
      <div className="  @apply w-[600px] h-[52px] gap-8">
        <span className="  @apply w-[600px] h-[52px] gap-0 text-4xl font-bold leading-[51.84px] tracking-[0.32645100355148315px] text-left text-[#101828] absolute top-10">
          FAQ
        </span>
      </div>
      <div className="  @apply w-[1224px] h-[420px] gap-6 absolute top-[150px]">
        <div className="  @apply w-[600px] h-[232px] gap-4 border-t-[0.5px] border-t-[#D0D5DD] border-solid">
          <div className="  @apply w-[600px] h-[84px] gap-4 text-xl font-semibold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute px-0 py-3 border-b-[0.5px] border-b-[#D0D5DD] border-solid top-5">
            <span className="  @apply w-[524px] h-6 gap-0 text-lg font-bold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute top-5">
              What is the cost of a mobile application?
            </span>
            <button className="  @apply w-[60px] h-[60px] gap-2.5 absolute shadow-[0px_2px_4px_0px_#00000014] pt-3 pb-0 px-0 rounded-[50px] left-[525px] top-0 text-myColors">
              <GoPlus className="@apply ml-[13px] mb-2.5" size={34} />
            </button>
          </div>
          <div className="  @apply w-[600px] h-[84px] gap-4 text-xl font-semibold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute px-0 py-3 border-b-[0.5px] border-b-[#D0D5DD] border-solid top-[120px]">
            <span className="  @apply w-[524px] h-6 gap-0 text-lg font-bold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute top-5">
              Do you provide a guarantee for the mobile application?
            </span>
            <button className="@apply w-[60px] h-[60px] gap-2.5 absolute shadow-[0px_2px_4px_0px_#00000014] pt-3 pb-0 px-0 rounded-[50px] left-[525px] top-0 text-myColors">
              <GoPlus className="  @apply ml-[13px] mb-2.5" size={34} />
            </button>
          </div>
        </div>

        <div className="  @apply w-[600px] h-[420px] gap-4 absolute border-t-[0.5px] border-t-[#D0D5DD] border-solid left-[630px] top-0">
          <div className="  @apply w-[600px] h-[272px] gap-4 text-xl font-semibold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute px-0 py-3 border-b-[0.5px] border-b-[#D0D5DD] border-solid top-5">
            <span className="  @apply w-[524px] h-6 gap-0 text-lg font-bold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute top-5">
              How long will development take?
            </span>
            <div className="  @apply absolute top-[60px]">
              <div className="  @apply w-[524px] h-20 gap-0 text-base font-semibold leading-5 tracking-[-0.3199999928474426px] text-left">
                Development terms directly depend on the requirements for the
                mobile application, the characteristics of the company, as well
                as the wishes of the customer.
              </div>
              <div className="  @apply w-[524px] h-20 gap-0 text-base font-semibold leading-5 tracking-[-0.3199999928474426px] text-left">
                Average development time from start to finished application:
                Medium projects up to 3 months. Large projects about 4-6 months.
                To get a more accurate estimate of the project completion time,
                it is necessary to determine the main task of the application,
                think over its logic and functionality.
              </div>
            </div>
            <button className="@apply w-[60px] h-[60px] gap-2.5 absolute shadow-[0px_2px_4px_0px_#00000014] pt-3 pb-0 px-0 rounded-[50px] left-[525px] top-0 text-myColorssss">
              <RxCross2 className="  @apply ml-[13px] mb-2.5" size={30} />
            </button>
          </div>
          <div className="  @apply w-[600px] h-[84px] gap-4 text-xl font-semibold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute px-0 py-3 border-b-[0.5px] border-b-[#D0D5DD] border-solid top-[310px]">
            <span className="  @apply w-[524px] h-6 gap-0 text-lg font-bold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute top-5">
              I will not tell my idea, do you guarantee confidentiality?
            </span>
            <button className="@apply w-[60px] h-[60px] gap-2.5 absolute shadow-[0px_2px_4px_0px_#00000014] pt-3 pb-0 px-0 rounded-[50px] left-[525px] top-0 text-myColors">
              <GoPlus className="  @apply ml-[13px] mb-2.5" size={34} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
