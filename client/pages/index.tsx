import React,{useState} from "react";
import Faq from "./faq";
import "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { LuSmartphone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import 'react-phone-number-input/style.css';
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
import PhoneInput from 'react-phone-number-input';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {

  const [val, setVal] = useState('');
  return (
    <>
      <div className="@apply w-[1179px] h-[92px] gap-20 opacity-[0px] bg-white z-[58] fixed ml-20 mt-6 px-6 py-4 rounded-[12px_12px_12px_12px]">
        <img
          className="@apply w-[174px] h-[170px] gap-0 opacity-[0px] absolute -top-10"
          src="https://s3-alpha-sig.figma.com/img/7fd8/7fd6/6706ff5bce5a4d719332ce26f46a5267?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QkV-t1MQXTlDwhcx~TtdKJbdB9~OgvhqlmuRc~EYq~yXVcXzufADYctJpgegTQHcmv8gkp0X7eNAIWsyq0vVe0fNrn6aA5gorl8SnZeetavNFyejtBjhT~iDe~Cc~CopF5MZdhPIEunZFgMM~0Eonc21A4j2SR3NtcgnzZ8~lrFZ3wGkNoWpKOgRTIGtItHfRjvJrIM~Yu-3LeAeWOIXvqaau0aNkcuHooc9RkTOOGgFVtETJ4x8NiSldHFYf4Oz7Ul5b-qFPF3iBqcs4fkhCibmZ~~-R9wSCnDl1qP0QhofgwrGEyiX2gUGYtRUC4-ymwvpnFY6ESBeRTpeoShZSA__"
          alt="logo"
        ></img>
        <div className="@apply mt-[10px]">
          <a href="#" className="no-underline">
            <span className="@apply w-[57px] h-[18px] gap-0 opacity-[0px] text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[250px]">
              Services
            </span>
          </a>
          <a href="#" className="no-underline">
            <span className="@apply w-[41px] h-[18px] gap-0 opacity-[0px] text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[25px]">
              Media
            </span>
          </a>
          <a href="#" className="no-underline">
            <span className="@apply w-[41px] h-[18px] gap-0 opacity-[0px] text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[25px]">
              Cases
            </span>
          </a>
          <a href="#" className="no-underline">
            <span className="@apply w-[41px] h-[18px] gap-0 opacity-[0px] text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[25px]">
              FAQ
            </span>
          </a>
          <a href="#" className="no-underline">
            <span className="@apply w-[41px] h-[18px] gap-0 opacity-[0px] text-sm font-semibold leading-[18px] tracking-[0.2px] text-left text-[#101828] ml-[25px]">
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

      <div className="  @apply w-[650px] h-[260px] gap-8 opacity-[0px] bg-white absolute pt-6 pb-0 px-0 rounded-[12px_0px_0px_0px] left-20 top-[444px]">
        <span className="  @apply w-[600px] h-12 gap-0 opacity-[0px] text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute ml-5">
          Leave your contacts and we will call you back
        </span>
        <br />
        <span className="  @apply w-[600px] h-12 gap-0 opacity-[0px] text-xl font-bold leading-6 tracking-[0.3799999952316284px] text-left text-[#101828] absolute ml-5">
          {" "}
          within 30 minutes
        </span>
        <div className="a1">
        <div className="  @apply w-[472px] h-[132px] gap-6 opacity-[0px]">
        <form action="#">
        <div className="  @apply w-[472px] h-[54px] gap-6 opacity-[0px]">
        
        <div className="  @apply w-56 h-[54px] gap-2 opacity-[0px] border-b-[0.5px] border-b-[#D0D5DD] border-solid">
        <label><span className="  @apply w-56 h-4 gap-0 opacity-[0px] text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">Full name</span></label>
        <input type="text" name="fname" value="My Name"></input>
        </div>
        <div className="  @apply w-56 h-[54px] gap-2 opacity-[0px] absolute border-b-[0.5px] border-b-[#D0D5DD] border-solid left-[228.4px] top-0">
        <label><span className="  @apply w-56 h-4 gap-0 opacity-[0px] text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">Phone number</span></label>
        <PhoneInput
      placeholder="Enter phone number"
      value="+91 0000000000"
      onChange={(e) => {}}/>

        </div>
        
        </div>
        <div className="  @apply w-56 h-[54px] gap-2 opacity-[0px]">
        <div className="  @apply w-[226px] h-[54px] gap-2 opacity-[0px] absolute border-b-[0.7px] border-b-[#D0D5DD] border-solid top-20">
        <label><span className="  @apply w-56 h-4 gap-0 opacity-[0px] text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">Business name</span></label>
        <input type="text" name="bname" value="ABC Technologies PVT LTD"></input>
        </div>
        <div className="  @apply w-56 h-[54px] gap-2 opacity-[0px] absolute border-b-[0.7px] border-b-[#D0D5DD] border-solid left-[228.4px] top-20">
        <label><span className="  @apply w-56 h-4 gap-0 opacity-[0px] text-[13px] font-medium leading-4 tracking-[-0.07800000160932541px] text-left text-[#667085]">Business mail</span></label>
        <input type="email" name="fname" value="demoaccount@gmail.com"></input>


        </div>
        
        </div>

        </form>
        </div>
        <button className="a31">
        <span className="  @apply w-[84px] h-9 gap-0 opacity-[0px] text-white text-sm font-semibold leading-[18px] tracking-[-0.15399999916553497px] text-center absolute left-[25px] top-2.5">Get Cunsultation</span>
        </button>
        </div>
        
      </div>

      <div className="@apply w-[1440px] h-[900px] gap-0 opacity-[0px] overflow-hidden bg-myColor">
        <div>
          <div className="  @apply w-[600px] h-[141px] gap-0 opacity-[0px] text-[40px] font-semibold leading-[45.2px] tracking-[0.32645100355148315px] text-left absolute left-20 top-[140px]">
            <span>
              <span className="text-myColorss">User-Centric Excellence</span>:
              Our App Development services Tackles Your Pain Points
            </span>
          </div>
          <div className="@apply w-[600px] h-[63px] gap-0 opacity-[0px] text-[19px] font-medium leading-[21.48px] tracking-[-0.23999999463558197px] text-left absolute left-20 top-[300px]">
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

        <div className="@apply w-[624px] h-[1976.98px] gap-0 opacity-[0px] relative rounded-[24px_0px_0px_0px]">
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
        <div className="@apply w-[Fixed_(1,440px)px] h-[Hug_(312.06px)px] gap-2.5 opacity-[0px] absolute px-[55px] py-[60px] top-[900px]">
          <div className="logooo">
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0 opacity-[0px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo1"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0 opacity-[0px] ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo2"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0 opacity-[0px] ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo3"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0 opacity-[0px] ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo4"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0 opacity-[0px] ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo5"
                    ></img>
                  </td>
                  <td>
                    <img
                      className="  @apply w-[163.64px] h-[163.06px] gap-0 opacity-[0px] ml-[65px]"
                      src="https://s3-alpha-sig.figma.com/img/6db1/d7db/9b8eaa7eaa19cbaa4b4ed2d0a2758004?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrAwNokM72vVmS0JOUSI-727b81XvlWPweTSjX4~3y4PgKIVJTaCAfDPSDGrWYSfKyLUuXI3yIr~aSKlgRhAT7UNaZiYEd8wI7nJO5wDicwjwCWdIHSFJmTuT8x3crcHHrlNXS1KhcoNbZJjd8xK5zA3dWEi3ZQh6VtY6SPFvG0EJt8e8hanUOKonbf3s4qET8I3Ubm4p2Ek4CVVYWTw131NL0X-TrxsKEFulcRVA7lCFapCaz3jiucNd87rbORIiz9togjEHEUcxin1jAtA1crxE5IbBunSYLcaG~JEXofKmjbEzqsCAD4y7OEBs3~B7SIYf3532UsL75amFRKmmQ__"
                      alt="logooo6"
                    ></img>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div></>
  );
}
