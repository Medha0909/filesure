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
          </div>    </>
  );
}
