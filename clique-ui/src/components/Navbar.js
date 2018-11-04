import React from "react";
import { css } from "emotion";
import Navbar from "../core/Navbar";
import NavHeader from "../core/NavHeader";

export default function SiteNavbar() {
  return (
    <Navbar>
      <NavHeader className={css({ color: "#405dcf" })}>clique</NavHeader>
    </Navbar>
  );
}
