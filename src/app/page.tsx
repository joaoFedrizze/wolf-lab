"use client";

import "./app.scss";
import Link from "next/link";

import HeaderCompnent from "./componets/header/component";
import MainSectionComponent from "./componets/mainSection/component";
import PatchSectionComponent from "./componets/patchSection/component";

export default function Home() {
  return (
    <>
      <HeaderCompnent />
      <MainSectionComponent />
      <PatchSectionComponent />
    </>
  );
}
