"use client";
import "./style.scss";

import Link from "next/link";
import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import HeaderCompnent from "../componets/header/component";
import PatchSectionComponent from "../componets/patchSection/component";

export default function patchNote() {
  return (
    <>
      <HeaderCompnent />
      <PatchSectionComponent isApresentation={false} />
    </>
  );
}
