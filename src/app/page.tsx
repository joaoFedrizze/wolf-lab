"use client";

import "./app.scss";

import HeaderCompnent from "./componets/header/component";
import MainSectionComponent from "./componets/mainSection/component";
import PatchSectionComponent from "./componets/patchSection/component";
import FooterComponent from "./componets/footer/component";

export default function Home() {
  return (
    <>
      <HeaderCompnent />
      <MainSectionComponent />
      <PatchSectionComponent isApresentation={true} />
      <FooterComponent />
    </>
  );
}
