import React, { useState } from "react";
import Faq from "./faq";
import Footer from "./footer";
import Media from "./media";
import "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { LuSmartphone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import "react-phone-number-input/style.css";
import c1img from "../public/1.jpg";
import c1log from "../public/planing.jpg";
import c2img from "../public/2.jpg";
import c2log from "../public/design.jpg";
import c3img from "../public/3.jpg";
import c3log from "../public/coding-language.jpg";
import c4img from "../public/4.jpg";
import c4log from "../public/security.jpg";
import c5img from "../public/5.jpg";
import c5log from "../public/hosting 1.jpg";
import c6img from "../public/6.jpg";
import c6log from "../public/application.jpg";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [val, setVal] = useState("");
  return (
    <>
      <div className="@apply w-[1179px] h-[92px] gap-20  bg-white z-[58] fixed ml-20 mt-6 px-6 py-4 rounded-[12px_12px_12px_12px]">
        <img
          className="@apply w-[174px] h-[170px] gap-0  absolute -top-10"
          src="https://s3-alpha-sig.figma.com/img/7fd8/7fd6/6706ff5bce5a4d719332ce26f46a5267?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QkV-t1MQXTlDwhcx~TtdKJbdB9~OgvhqlmuRc~EYq~yXVcXzufADYctJpgegTQHcmv8gkp0X7eNAIWsyq0vVe0fNrn6aA5gorl8SnZeetavNFyejtBjhT~iDe~Cc~CopF5MZdhPIEunZFgMM~0Eonc21A4j2SR3NtcgnzZ8~lrFZ3wGkNoWpKOgRTIGtItHfRjvJrIM~Yu-3LeAeWOIXvqaau0aNkcuHooc9RkTOOGgFVtETJ4x8NiSldHFYf4Oz7Ul5b-qFPF3iBqcs4fkhCibmZ~~-R9wSCnDl1qP0QhofgwrGEyiX2gUGYtRUC4-ymwvpnFY6ESBeRTpeoShZSA__"
          alt="logo"
        ></img>
        <div className="@apply mt-[10px]">
          <a href="#Services" className="no-underline">
            <span className="@apply w-[57px] h-[18px] gap-0  text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[250px]">
              Services
            </span>
          </a>
          <a href="#Media" className="no-underline">
            <span className="@apply w-[41px] h-[18px] gap-0  text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[25px]">
              Media
            </span>
          </a>
          <a href="#Cases" className="no-underline">
            <span className="@apply w-[41px] h-[18px] gap-0  text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[25px]">
              Cases
            </span>
          </a>
          <a href="#faq" className="no-underline">
            <span className="@apply w-[41px] h-[18px] gap-0  text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[25px]">
              FAQ
            </span>
          </a>
          <a href="#footer" className="no-underline">
            <span className="@apply w-[41px] h-[18px] gap-0  text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[25px]">
              Contacts
            </span>
          </a>
          <div className="@apply text-sm font-semibold leading-[18px] tracking-[0.2px] text-left absolute left-[800px] top-[37px] text-myColors">
            <table>
              <tbody>
                <tr>
                  <td>
                    <LuSmartphone size={22} />
                  </td>
                  <td>
                    <span className="@apply pl-2.5 pr-5">+91</span>
                  </td>
                  <td>000000000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="@apply text-sm font-semibold leading-[18px] tracking-[0.2px] text-left absolute left-[1000px] top-[37px] text-myColors">
            <table>
              <tbody>
                <tr>
                  <td>
                    <MdMailOutline size={22} />
                  </td>
                  <td>
                    <span className="@apply pl-2.5 pr-5">
                      <a className="no-underline" href="mailto:demo@gmail.com">
                        <span className="text-myColors">demo@gmail.com</span>
                      </a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="  @apply w-[650px] h-[260px] gap-8  bg-white absolute pt-6 pb-0 px-0 rounded-[12px_0px_0px_0px] left-20 top-[444px]">
        <span className="  @apply w-[600px] h-12 gap-0  text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute ml-5">
          Leave your contacts and we will call you back
        </span>
        <br />
        <span className="  @apply w-[600px] h-12 gap-0  text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute ml-5">
          {" "}
          within 30 minutes
        </span>
        <div className="a1">
          <div className="  @apply w-[472px] h-[132px] gap-6 ">
            <form action="#">
              <div className="  @apply w-[472px] h-[54px] gap-6 ">
                <div className="  @apply w-56 h-[54px] gap-2  border-b-[0.5px] border-b-[#D0D5DD] border-solid">
                  <label>
                    <span className="  @apply w-56 h-4 gap-0  text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">
                      Full name
                    </span>
                  </label>
                  <input type="text" name="fname" value="My Name"></input>
                </div>
                <div className="  @apply w-56 h-[54px] gap-2  absolute border-b-[0.5px] border-b-[#D0D5DD] border-solid left-[228.4px] top-0">
                  <label>
                    <span className="  @apply w-56 h-4 gap-0  text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">
                      Phone number
                    </span>
                  </label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value="+91 0000000000"
                    onChange={(e) => {}}
                  />
                </div>
              </div>
              <div className="  @apply w-56 h-[54px] gap-2 ">
                <div className="  @apply w-[226px] h-[54px] gap-2  absolute border-b-[0.7px] border-b-[#D0D5DD] border-solid top-20">
                  <label>
                    <span className="  @apply w-56 h-4 gap-0  text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">
                      Business name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="bname"
                    value="ABC Technologies PVT LTD"
                  ></input>
                </div>
                <div className="  @apply w-56 h-[54px] gap-2  absolute border-b-[0.7px] border-b-[#D0D5DD] border-solid left-[228.4px] top-20">
                  <label>
                    <span className="  @apply w-56 h-4 gap-0  text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">
                      Business mail
                    </span>
                  </label>
                  <input
                    type="email"
                    name="fname"
                    value="demoaccount@gmail.com"
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <button className="a31">
            <span className="  @apply w-[84px] h-9 gap-0  text-white text-sm font-semibold leading-[18px] tracking-[-0.15399999916553497px] text-center absolute left-[25px] top-2.5">
              Get Cunsultation
            </span>
          </button>
        </div>
      </div>

      <div className="@apply w-[1440px] h-[900px] gap-0  overflow-hidden bg-myColor">
        <div>
          <div className="  @apply w-[600px] h-[141px] gap-0  text-[40px] font-semibold leading-[45.2px] tracking-[0.32645100355148315px] text-left absolute left-20 top-[140px]">
            <span>
              <span className="text-myColorss">User-Centric Excellence</span>:
              Our App Development services Tackles Your Pain Points
            </span>
          </div>
          <div className="@apply w-[600px] h-[63px] gap-0  text-[19px] font-medium leading-[21.48px] tracking-[-0.23999999463558197px] text-left absolute left-20 top-[300px]">
            <span>
              Experience a Seamless Digital Journey with{" "}
              <span className="text-myColors">Desun</span> - Where Every Line of
              Code Resolves Your Challenges and{" "}
              <span className="text-myColorss">
                Elevates Your App Experience
              </span>{" "}
              to Unparalleled Heights.
            </span>
          </div>
        </div>

        <div className="@apply w-[624px] h-[1976.98px] gap-0  relative rounded-[24px_0px_0px_0px]">
          <img
            className="img1"
            src="https://s3-alpha-sig.figma.com/img/79de/403c/4f8b01884a6dc3d15cd1243eb90d916c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hoXNN9IbnOqWcJMj6FK9f6wpVrz9or10sftHawJoBNPpl893BRj00iY-mTbX~hBK8afVf3Re5V9~OPer7crckbOBmE4NmhaL2R0oGnE18pOie56gdG54zCiolA7dkpgamAn2BbQURtooMWo3MoJmNPLQmXJ2d3xrhCNPoJuEmXs0t7yX8NiNhMvS5~HiOmxcTa5c2~57pWwVojJicKIGOJs4lNCR1vrE29JeQdySHKUaz6bsFLE5LZbywwv47ekbpUQFp3POnHmqk9zfZSl3QI7IUFP7BEaHvZCS7ACf1v5Sn25~nDDMwXHEFaA9Varlu88vxnj6~-LTsl6x-CQB2A__"
            alt="img1"
          ></img>
          <img
            className="img2"
            src="https://s3-alpha-sig.figma.com/img/cd58/b301/dc5f38f3f43e1ab95ba0d024ff9492fd?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3XPcxkGuxVSlIhCA70Y6vjNgtuBAWCaDCzJYtfYwR9XGa~2EUDDnMuwi2IyLU43ZRCgd4XhMxOOxcKDXpdv1fXDu3na1KJUsX7unVc9YDnQPieDbfUIaYfAuXgt5cjf-TI0sz2t8roguLGEv6LHErb-tmWp9moW5xFuP0hLuF4qOvT6C8GYntJoYPOWxcPPRXH2B3~qFtXB0hK~KoWw4WoeOpf9tPOz1ny9kJKIlBGpC0~sw7tGaj9PxMI~krZZTdn0aQN3-mkhtQ0JckbeMahhZTHHfPni9hx1hCkK4HFPesbUKPR49ZQiyvkAnVI5i9MaRCszGJDylxLHMNTmIg__"
            alt="img2"
          ></img>
          <img
            className="img3"
            src="https://s3-alpha-sig.figma.com/img/e1c1/a0a8/20c5ac161ce9cf498cb4424c62367725?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B0ZjFUjYzqj2ng6osuulVZVetR4C-JHb7MOsoj9o8SrLU6FibCa0ogna3yWCBZ6n7jBGs52~yxO~rZe8SbeoNXyzs5TdsXf7C2Kf0RrUiY45RHl-FbkCdFt7kfpjNS91HxtElcFIQ6ebQdesxvN1HVNefrSjkuq~hLLNXJgZemZG0gqmCkrE2wRw4ahkUyROm5~S-fp6EzQlAnkorcw5hLoc0~i4lurG78aEc~8jIn6oN0eANVqF46TzFoLJ-StpSVbH9ersFylRRbR9oESGqxCx3OiOD1nb13DZrWU3LzQ7PKEklju7TDQ4rmD00Zucy39m-Py2297cUUl9nVfYWA__"
            alt="img3"
          ></img>
          <img
            className="img4"
            src="https://s3-alpha-sig.figma.com/img/1e5a/9875/8d3e8f60cb7154b40b7e9574aa3943f4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~1zQ-m9v6DUqAnnX79Ub9SLyF2-~YOCyxS-8YMZwCvjzHuB-htJ3e0hct8v~59airldSfVP60UfqMxjWAYY~gi1hN0MJ53v4TvGyLSdwHPKmD2VLu9yCJCsLBiVteQphbSthqA27ygcwTXLRX7wSN84lcBq~NbtpPSXXIatGnDJ2A~jhrfQUt~rYYfiobdmvBwOPwLEgqUk~OlN78Y9kV7vjZs8tcqBoWGTYc~5Ca00vEGfkrBDCSPc9dEzxsRG1uQoM8-qwJ1dnO3hn5GeV8IytAq0O12CtKJiQGebjAqbcbUmlmJLY~fAOj~11gXvxgJdcJbA2y-eLmN~Vac5AQ__"
            alt="img4"
          ></img>
          <img
            className="img5"
            src="https://s3-alpha-sig.figma.com/img/5abd/11fd/39e11af175707d5a31caffa40d2a51e0?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oY6r3fWdDNJeN~HnkFx2tR~U-wP3jbuST2FF2wsUnXlxsNzCCckpyF-NmzQb1tEKZe4Ve0rF4OpBqoIjJWy2h8eS-zRJjQYS1CQDnfgaELF1MGrx5HvSyc3qVlbH8DbXQC0PUycosdy3kEvcolJI2o2KoCXeXU4MtlSEOLGXJkzShbKpo10pvzhZ2lqqZNnF6IWyaT4jluIb3NfquXl5urpWr7ViI7YabLlpC8HS--ZXr173mGsIUy3SNUEgl7Sau7YHf9xevaC9omFzXlrauTMvOvzfSbHyoG8kusHvPCN93w0P7n1DVfDrFB7X-jR3nB5DJJTizug8L6oXUbLqUw__"
            alt="img5"
          ></img>
          <img
            className="img6"
            src="https://s3-alpha-sig.figma.com/img/9eb5/0887/fbc231627dd24c764990817126cf7eb1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JPhyAZVtGwmadARs1BaQ6QLIl~6Sn8MvUQOuS5uFUD-9Ru2aFjd-BVCXb5pxGXwqBoRn9iYgdNHr79h38P~KOEJsc7TfBnYo-u7aX9H6pwez5UMx8~75K9IbkhbAv8vqudzHjNzYOyjQhT8EoMl7~8mhdbcYIqB97ayTIfmjWQUPijhd3J6F7uEzIL883rZaF79uO0~NNzdMFPR~3W1C~vcNkONO07fmlw1ooHr6W-Rie9tdkxhcf5k8a00JDiG6bSnTmIjBjlIPezKpOCTHuFpYbNvbqus7dZsVQi1-W2NfG5JJzeFs8h1m9KZNyQvG8NuwhtsUWsQX-euIjJf1DQ__"
            alt="img6"
          ></img>
        </div>
      </div>

      <div className="@apply border-[#D8D8D8]">
        <div className="@apply w-[Fixed_(1,440px)px] h-[Hug_(312.06px)px] gap-2.5  absolute px-[55px] py-[60px] top-[900px]">
          <div className="logooo">
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0 "
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo1"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0  ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo2"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0  ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo3"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0  ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo4"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0  ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo5"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0  ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo6"
                    ></img>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          id="Services"
          className="  @apply w-[961px] h-[340px] gap-0  absolute left-[108px] top-[1179.17px]"
        >
          <div className="  @apply w-[600px] h-[52px] gap-0 ">
            <div className="  @apply w-[600px] h-[52px] gap-0  text-4xl font-bold leading-[51.84px] tracking-[0.32645100355148315px] text-left">
              <span>Full development cycle</span>
            </div>
            <br />
            <div className="  @apply w-[600px] h-5 gap-0  text-[15px] font-medium leading-5 tracking-[-0.23999999463558197px] text-left top-[600px]">
              <span>We use proven technologies</span>
            </div>
          </div>
        </div>
        <div className="  @apply w-[496px] h-[200px] gap-8  absolute left-[108px] top-[1317.17px]">
          <div className="  @apply w-[496px] h-[84px] gap-4 ">
            <div className="  @apply w-[496px] h-6 gap-0  text-xl font-semibold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828]">
              <span>Web</span>
            </div>
            <div className="  @apply w-[496px] h-11 gap-0  text-[17px] font-normal leading-[22px] tracking-[-0.40799999237060547px] text-left absolute top-[50px]">
              <span>
                PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/
                Nuxt / MySQL / Laravel / GO lang / django / Python
              </span>
            </div>
          </div>
          <div className="  @apply w-[496px] h-[84px] gap-4  absolute top-[120px]">
            <div className="  @apply w-[496px] h-6 gap-0  text-xl font-semibold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828]">
              <span>Mobile</span>
            </div>
            <div className="  @apply w-[496px] h-11 gap-0  text-[17px] font-normal leading-[22px] tracking-[-0.40799999237060547px] text-left absolute top-[50px]">
              <span>
                Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm
                / Coroutine / RxJava / RxSwift / Unit Test / Navigation
              </span>
            </div>
          </div>
          <div className="  @apply w-[233px] h-[340px] top-[-130.17px] gap-0  absolute left-[736px]">
            <div className="  @apply w-[Hug_(190px)px] h-[Hug_(48px)px] gap-3  px-0 py-3">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="  @apply w-[154px] h-6 gap-0  text-xl font-normal leading-6 tracking-[0.3799999952316284px] text-left text-[#1D2939] mr-2.5 hover:text-[black] hover:font-semibold hover:border-b-[#80A948] hover:border-b hover:border-solid">
                        iOS development
                      </span>
                    </td>
                    <td>
                      <span className="text-myColors">
                        <MdKeyboardArrowRight />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="  @apply w-[Hug_(190px)px] h-[Hug_(48px)px] gap-3  px-0 py-3">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="  @apply w-[230px] h-[Hug_(28px)px] gap-1 ">
                        <span className="  @apply w-[154px] h-6 gap-0  text-xl font-normal leading-6 tracking-[0.3799999952316284px] text-left text-[#1D2939] mr-2.5 hover:text-[black] hover:font-semibold hover:border-b-[#80A948] hover:border-b hover:border-solid">
                          Android development
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="text-myColors">
                        <MdKeyboardArrowRight />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="  @apply w-[Hug_(194px)px] h-[Hug_(48px)px] gap-3  px-0 py-3">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="  @apply w-[154px] h-6 gap-0  text-xl font-normal leading-6 tracking-[0.3799999952316284px] text-left text-[#1D2939] mr-2.5 hover:text-[black] hover:font-semibold hover:border-b-[#80A948] hover:border-b hover:border-solid">
                        web development
                      </span>
                    </td>
                    <td>
                      <span className="text-myColors">
                        <MdKeyboardArrowRight />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="  @apply w-[Hug_(153px)px] h-[Hug_(48px)px] gap-3  px-0 py-3">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="  @apply w-[154px] h-6 gap-0  text-xl font-normal leading-6 tracking-[0.3799999952316284px] text-left text-[#1D2939] mr-2.5 hover:text-[black] hover:font-semibold hover:border-b-[#80A948] hover:border-b hover:border-solid">
                        UI/UX design
                      </span>
                    </td>
                    <td>
                      <span className="text-myColors">
                        <MdKeyboardArrowRight />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="  @apply w-[Hug_(99px)px] h-[Hug_(48px)px] gap-3  px-0 py-3">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="  @apply w-[154px] h-6 gap-0  text-xl font-normal leading-6 tracking-[0.3799999952316284px] text-left text-[#1D2939] mr-2.5 hover:text-[black] hover:font-semibold hover:border-b-[#80A948] hover:border-b hover:border-solid">
                        testing
                      </span>
                    </td>
                    <td>
                      <span className="text-myColors">
                        <MdKeyboardArrowRight />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="  @apply w-[Hug_(101px)px] h-[Hug_(48px)px] gap-3  px-0 py-3">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="  @apply w-[154px] h-6 gap-0  text-xl font-normal leading-6 tracking-[0.3799999952316284px] text-left text-[#1D2939] mr-2.5 hover:text-[black] hover:font-semibold hover:border-b-[#80A948] hover:border-b hover:border-solid">
                        launch
                      </span>
                    </td>
                    <td>
                      <span className="text-myColors">
                        <MdKeyboardArrowRight />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="  @apply w-[Hug_(148px)px] h-[Hug_(48px)px] gap-3  px-0 py-3;">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="  @apply w-[154px] h-6 gap-0  text-xl font-normal leading-6 tracking-[0.3799999952316284px] text-left text-[#1D2939] mr-2.5 hover:text-[black] hover:font-semibold hover:border-b-[#80A948] hover:border-b hover:border-solid">
                        IT consulting
                      </span>
                    </td>
                    <td>
                      <span className="text-myColors">
                        <MdKeyboardArrowRight />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="Media">
        <Media />
      </div>

      <div
        className="  @apply w-[1440px] h-[344px] gap-0  absolute top-[3040px]"
        style={{
          background: "linear-gradient(90deg, #fabc1f 0%, #7ca546 100%)",
        }}
      >
        <div className="@apply w-[701px] h-[168px] gap-6 ">
          <div className="  @apply w-[600px] h-[104px] gap-0  text-4xl font-bold leading-[51.84px] tracking-[0.32645100355148315px] text-left absolute text-white mt-[60px] left-[100px]">
            Let's discuss
          </div>
          <div className="  @apply w-[600px] h-[104px] gap-0  text-4xl font-bold leading-[51.84px] tracking-[0.32645100355148315px] text-left absolute text-white left-[100px] top-[110px]">
            Your project
          </div>

          <div className="  @apply w-[600px] h-10 gap-0  text-[15px] font-medium leading-5 text-left text-white absolute text-white left-[100px] top-[190px]">
            Let's figure out how to create an effective application,
          </div>
          <div className="  @apply w-[600px] h-10 gap-0  text-[15px] font-medium leading-5 text-left text-white absolute text-white mt-[210px] left-[100px]">
            its cost and terms of its development
          </div>
        </div>
        <div className="  @apply w-[520px] h-[244px] absolute gap-6  bg-white shadow-[0px_0px_24px_0px_#00000029] shadow-[0px_0px_2px_0px_#00000014] pt-6 pb-0 px-0 rounded-[12px_12px_12px_12px] left-[790px] top-[50px]"></div>
        <div className="a1 p">
          <div className="  @apply w-[472px] h-[132px] gap-6 ">
            <form action="#">
              <div className="  @apply w-[472px] h-[54px] gap-6 ">
                <div className="  @apply w-56 h-[54px] gap-2  border-b-[0.5px] border-b-[#D0D5DD] border-solid">
                  <label>
                    <span className="@apply w-56 h-4 gap-0  text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">
                      Full name
                    </span>
                  </label>
                  <input type="text" name="fname" value="My Name"></input>
                </div>
                <div className="  @apply w-56 h-[54px] gap-2  absolute border-b-[0.5px] border-b-[#D0D5DD] border-solid left-[224.4px] top-0">
                  <label>
                    <span className="@apply w-56 h-4 gap-0  text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">
                      Phone number
                    </span>
                  </label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value="+91 0000000000"
                    onChange={(e) => {}}
                  />
                </div>
              </div>
              <div className="  @apply w-[472px] h-[54px] gap-6 ">
                <div className="  @apply w-[226px] h-[54px] gap-2  absolute border-b-[0.7px] border-b-[#D0D5DD] border-solid top-20">
                  <label>
                    <span className="@apply w-56 h-4 gap-0  text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">
                      Business name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="bname"
                    value="ABC Technologies PVT LTD"
                  ></input>
                </div>
                <div className="  @apply w-56 h-[54px] gap-2  absolute border-b-[0.7px] border-b-[#D0D5DD] border-solid left-[224.4px] top-20">
                  <label>
                    <span className="@apply w-56 h-4 gap-0  text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">
                      Business mail
                    </span>
                  </label>
                  <input
                    type="email"
                    name="fname"
                    value="demoaccount@gmail.com"
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <button className="  @apply w-[178px] h-10 gap-2.5  absolute px-6 py-[11px] rounded-[8px_8px_8px_8px] left-[270px] top-40 bg-myCol">
            <span className="  @apply w-[130px] h-[18px] gap-0  text-white text-sm font-semibold leading-[18px] tracking-[-0.15399999916553497px] text-center absolute left-[25px] top-2.5">
              Discuss the project
            </span>
          </button>
        </div>
      </div>

      <div
        id="Cases"
        className="  @apply w-[1440px] h-[810px] gap-10  bg-white absolute top-[3385px]"
      >
        <div className="  @apply w-[Hug_(600px)px] h-[Hug_(52px)px] gap-8  absolute left-[108px] top-20">
          <span className="@apply w-[600px] h-[52px] gap-0  text-4xl font-bold leading-[51.84px] tracking-[0.32645100355148315px] text-left text-[#101828]">
            Application Development Stages
          </span>
        </div>
        <img
          className="  @apply w-[440px] h-[764px] gap-0  absolute left-[500px] top-[76px]"
          src="https://s3-alpha-sig.figma.com/img/ad8c/bbf4/2fe0abf10a9dbe09a8119211ba203571?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F1W5tKyyMlt32lz2aLEZsu6jLcUNd93Dtom54DHJoI1Sp2SGkIIp-51wZJHCcQ9aavP95RH0gmuQtsrDDS8wO5Lpz524PSsxF9g9ua0Mc9IMXTPqXay~QXhXdy1Nqzas-PK7KWxJUPqG~xTJLIim3QkRCwtahgrlTZCq5B~F1KQdxn6n4f92MwhnUR3E6UZBAFgX8Htqr84kzXPPMiPzTJ8BBligh7HlYVhqZz5-AGVFzVDsifbwf8xrXLAHUr13B-boYIBjgepOGvX~T-2rShryr6Dtvtdr9FPDNmhc5MhiTpZ2DGbMa3HD3clp3-VkIRi8M8PalCwyp9N8HtI0OA__"
          alt="phone"
        ></img>

        <div className="  @apply w-[1224px] h-[564px] gap-[440px]  absolute left-[108px] top-[166px]">
          <div className="  @apply w-[392px] h-[564px] gap-6 ">
            <div className="c1">
              <Card className="  @apply w-[392px] h-[172px] gap-4  bg-white shadow-[0px_2px_24px_0px_#00000014] shadow-[0px_0px_2px_0px_#00000014] pt-6 pb-0 px-0 rounded-[12px_12px_12px_12px] border-[none]">
                <CardHeader>
                  <CardTitle>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              className="  @apply absolute w-[57px] h-[45px] top-5"
                              src={c1log}
                              alt="c1log"
                            ></Image>
                          </td>
                          <td>
                            <span className="  @apply w-[78px] h-6 gap-0  text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left absolute pl-5 left-20 top-[30px]">
                              Analysis
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardTitle>
                </CardHeader>
                <CardContent className="  @apply w-[344px] h-[60px] gap-0  text-[15px] font-normal leading-5 tracking-[-0.23999999463558197px] text-left text-[#101828]">
                  <Image className="c1img" src={c1img} alt="c1img"></Image>
                  <p>
                    We craft precise technical specs, aligning with your
                    business, technology, and user requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="c2">
              <Card className="  @apply w-[392px] h-[172px] gap-4  bg-white shadow-[0px_2px_24px_0px_#00000014] shadow-[0px_0px_2px_0px_#00000014] pt-6 pb-0 px-0 rounded-[12px_12px_12px_12px] border-[none]">
                <CardHeader>
                  <CardTitle>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              className="@apply absolute w-[57px] h-[45px] top-[210px]"
                              src={c2log}
                              alt="c2log"
                            ></Image>
                          </td>
                          <td>
                            <span className="  @apply w-[78px] h-6 gap-0  text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left absolute pl-5 left-20 top-[220px]">
                              Design
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardTitle>
                </CardHeader>
                <CardContent className="  @apply w-[344px] h-[60px] gap-0  text-[15px] font-normal leading-5 tracking-[-0.23999999463558197px] text-left text-[#101828]">
                  <Image
                    className="  @apply w-[85.9px] h-[172px] gap-0  absolute text-[black] left-[305px] top-[194px]"
                    src={c2img}
                    alt="c2img"
                  ></Image>
                  <p>
                    We adapt the customer's corporate identity to the platform
                    guidelines. We draw convenient and understandable
                    interfaces.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="c2">
              <Card className="  @apply w-[392px] h-[172px] gap-4  bg-white shadow-[0px_2px_24px_0px_#00000014] shadow-[0px_0px_2px_0px_#00000014] pt-6 pb-0 px-0 rounded-[12px_12px_12px_12px] border-[none]">
                <CardHeader>
                  <CardTitle>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              className="  @apply absolute w-[57px] h-[45px] top-[410px]"
                              src={c3log}
                              alt="c3log"
                            ></Image>
                          </td>
                          <td>
                            <span className="  @apply w-[78px] h-6 gap-0  text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left absolute pl-5 left-20 top-[420px]">
                              Development
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardTitle>
                </CardHeader>
                <CardContent className="@apply w-[344px] h-[60px] gap-0  text-[15px] font-normal leading-5 tracking-[-0.23999999463558197px] text-left text-[#101828]">
                  <Image
                    className="  @apply w-[85.9px] h-[172px] gap-0  absolute text-[black] left-[305px] top-[386px]"
                    src={c3img}
                    alt="c3img"
                  ></Image>
                  <p>
                    We create an extensible architecture, write clean and stable
                    code. We integrate with customer technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="  @apply w-[392px] h-[564px] gap-6 top-[-5px] absolute  left-[825px]">
            <div className="c1">
              <Card className="  @apply w-[392px] h-[172px] gap-4  bg-white shadow-[0px_2px_24px_0px_#00000014] shadow-[0px_0px_2px_0px_#00000014] pt-6 pb-0 px-0 rounded-[12px_12px_12px_12px] border-[none]">
                <CardHeader>
                  <CardTitle>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              className="@apply absolute w-[57px] h-[45px] top-5"
                              src={c4log}
                              alt="c4log"
                            ></Image>
                          </td>
                          <td>
                            <span className="  @apply w-[78px] h-6 gap-0  text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left absolute pl-5 left-20 top-[30px]">
                              Testing
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardTitle>
                </CardHeader>
                <CardContent className="  @apply w-[344px] h-[60px] gap-0  text-[15px] font-normal leading-5 tracking-[-0.23999999463558197px] text-left text-[#101828]">
                  <Image className="c1img" src={c4img} alt="c4img"></Image>
                  <p>
                    We carry out functional testing and do bug fixes. We adapt
                    the application to different phone resolutions
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="c2">
              <Card className="  @apply w-[392px] h-[172px] gap-4  bg-white shadow-[0px_2px_24px_0px_#00000014] shadow-[0px_0px_2px_0px_#00000014] pt-6 pb-0 px-0 rounded-[12px_12px_12px_12px] border-[none]">
                <CardHeader>
                  <CardTitle>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              className="  @apply absolute w-[57px] h-[45px] top-[210px]"
                              src={c5log}
                              alt="c5log"
                            ></Image>
                          </td>
                          <td>
                            <span className="  @apply w-[78px] h-6 gap-0  text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left absolute pl-5 left-20 top-[220px]">
                              Launching
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardTitle>
                </CardHeader>
                <CardContent className="  @apply w-[344px] h-[60px] gap-0  text-[15px] font-normal leading-5 tracking-[-0.23999999463558197px] text-left text-[#101828]">
                  <Image
                    className="  @apply w-[85.9px] h-[172px] gap-0  absolute text-[black] left-[305px] top-[194px]"
                    src={c5img}
                    alt="c5img"
                  ></Image>
                  <p>
                    We design the application page and publish it in the App
                    Store and Google Play stores.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="c2">
              <Card className="  @apply w-[392px] h-[172px] gap-4  bg-white shadow-[0px_2px_24px_0px_#00000014] shadow-[0px_0px_2px_0px_#00000014] pt-6 pb-0 px-0 rounded-[12px_12px_12px_12px] border-[none]">
                <CardHeader>
                  <CardTitle>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              className="  @apply absolute w-[57px] h-[45px] top-[410px]"
                              src={c6log}
                              alt="c6log"
                            ></Image>
                          </td>
                          <td>
                            <span className="  @apply w-[78px] h-6 gap-0  text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left absolute pl-5 left-20 top-[420px]">
                              support
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardTitle>
                </CardHeader>
                <CardContent className="  @apply w-[344px] h-[60px] gap-0  text-[15px] font-normal leading-5 tracking-[-0.23999999463558197px] text-left text-[#101828]">
                  <Image
                    className="  @apply w-[85.9px] h-[172px] gap-0  absolute text-[black] left-[305px] top-[386px]"
                    src={c6img}
                    alt="c6img"
                  ></Image>
                  <p>
                    We monitor the stability of the application, update it for
                    new devices and versions of iOS and Android.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="@apply w-[1440px] h-[568px] gap-6  absolute px-[108px] py-20 top-[4170px] bg-myColor">
        <div className="  @apply w-[600px] h-[408px] gap-8 ">
          <div className="  @apply w-[600px] h-[52px] gap-0  text-4xl font-bold leading-[51.84px] tracking-[0.32645100355148315px] text-left text-[#101828]">
            <span>Our team</span>
          </div>
          <div className="  @apply w-[600px] h-10 gap-0  text-[15px] font-medium leading-5 tracking-[-0.23999999463558197px] text-left text-[#101828] my-[30px]">
            <span>
              Thousand is a full-cycle digital production company with its own
              product analytics, design, web and mobile development.
            </span>
          </div>
          <div className="  @apply w-[584px] h-[113px] gap-4  px-0 py-2">
            <div className="  @apply w-[184px] h-[97px] gap-2 ;">
              <div className="  @apply w-[163px] h-[69px] gap-0  text-5xl font-bold leading-[69.12px] tracking-[0.32645100355148315px] text-left text-[#101828]">
                <span>28</span>
              </div>
              <div className="  @apply w-[184px] h-5 gap-0  text-[15px] font-medium leading-5 tracking-[-0.23999999463558197px] text-left text-[#667085] mt-2.5">
                <span>team members</span>
              </div>
            </div>
            <div className="  @apply w-[184px] h-[97px] gap-2  absolute left-[292px] top-60">
              <div className="  @apply w-[163px] h-[69px] gap-0  text-5xl font-bold leading-[69.12px] tracking-[0.32645100355148315px] text-left text-[#101828]">
                <span>+100</span>
              </div>
              <div className="  @apply w-[184px] h-5 gap-0  text-[15px] font-medium leading-5 tracking-[-0.23999999463558197px] text-left text-[#667085] mt-2.5">
                <span>projects</span>
              </div>
            </div>
            <div className="  @apply w-[184px] h-[97px] absolute gap-2  left-[476px] top-60">
              <div className="  @apply w-[163px] h-[69px] gap-0  text-5xl font-bold leading-[69.12px] tracking-[0.32645100355148315px] text-left text-[#101828]">
                <span>7 years</span>
              </div>
              <div className="  @apply w-[184px] h-5 gap-0  text-[15px] font-medium leading-5 tracking-[-0.23999999463558197px] text-left text-[#667085] mt-2.5">
                <span>in IT sphere</span>
              </div>
            </div>
            <div className="  @apply w-[600px] h-10 gap-0  text-[15px] font-medium leading-5 tracking-[-0.23999999463558197px] text-left text-[#101828] mt-[50px]">
              <span>
                All the necessary specialists - from a designer to a tester -
                are on our staff. We hire the best specialists in the market.
                It's expensive but worth it
              </span>
            </div>
          </div>
        </div>
        <div className="  @apply w-[600px] h-[400px] gap-0  absolute left-[732px] top-20">
          <img
            className="  @apply w-[600px] h-[400px] gap-0  rounded-[12px_12px_12px_12px]"
            src="https://s3-alpha-sig.figma.com/img/6208/80bf/5e83a8ecb37adc3c547562b3daeded65?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dOSA~KZJBSTmN~9W108m9znbOOyybabFPeNcRiMogP3pIxo2o4WPfIIi493gzIFx48KhLvI2OYNroHaZRaX7ya30v4lK7x2zBhw98lF5LvCs8N-akiWc8AjWOO~pcQYek3jbhRxV3e1gu7Ax6or0WtkXKiMZYr7HhC5tHBzbQXQwb~S9X9SZpvGuBguiBY3nHye4KFP5iGGt6pQzWusqL3MVrGMLUgKWee35fFn8DjbkI8s~y9aS4mJxK5CjEmipo6T4dPvL7iBePxzv7wER1Rk64UJuTqekP1lpaIKoT0bVLG1tbqdO0FCi5rePgwkEzHWjgmkg6Y3cmV3YfDvu7w__"
            alt="team"
          ></img>
        </div>
      </div>

      <div id="faq">
        <Faq />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
