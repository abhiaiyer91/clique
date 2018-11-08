import React, { useCallback } from "react";
import { cx, css } from "emotion";
import useAuthToken from "../hooks/useAuthToken";
import Navbar from "../core/Navbar";
import { Flex, FlexItem } from "../core/Flex";
import ClickTarget from "../core/ClickTarget";
import NavHeader from "../core/NavHeader";
import UserDropdownMenu from "./UserDropdownMenu";
import { avatarClass } from "./Avatar";

function SiteNavbar({ history }) {
  const [value, setItem] = useAuthToken();

  const goHome = useCallback(() => {
    return window.location.assign("/home");
  });

  return (
    <Navbar>
      <Flex className={css({ width: "97%" })}>
        <ClickTarget onClick={goHome}>
          <NavHeader className={css({ color: "#405dcf" })}>cliq</NavHeader>
        </ClickTarget>
        <FlexItem className={css({ textAlign: "right" })}>
          { !!value
          ? <UserDropdownMenu />
          : <div className={cx(avatarClass, css({ marginLeft: "auto" }))} />
          }
        </FlexItem>
      </Flex>
    </Navbar>
  );
}

export default SiteNavbar;
