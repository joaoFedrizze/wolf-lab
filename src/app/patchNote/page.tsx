"use client";
import "./style.scss";

import FooterComponent from "../componets/footer/component";

import HeaderCompnent from "../componets/header/component";
import PatchSectionComponent from "../componets/patchSection/component";

export default function patchNote() {
  return (
    <>
      <HeaderCompnent />
      <PatchSectionComponent isApresentation={false} />
      <FooterComponent />
    </>
  );
}
