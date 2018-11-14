import React, { useCallback } from "react";
import { css } from "emotion";
import useAuthToken from "../hooks/useAuthToken";
import Navbar from "../core/Navbar";
import { Flex, FlexAuto, FlexItem } from "../core/Flex";
import ClickTarget from "../core/ClickTarget";
import NavHeader from "../core/NavHeader";
import UserDropdown from "../core/UserDropdown";

function SiteNavbar({ history }) {
  const [value] = useAuthToken();

  const goHome = useCallback(() => {
    return window.location.assign("/home");
  });

  return (
    <Navbar>
      <Flex className={css({ width: "97%" })}>
        <FlexItem align="center" className={css({ textAlign: "left" })}>
          <ClickTarget onClick={goHome}>
            <NavHeader className={css({ color: "#405dcf" })}>cliq</NavHeader>
          </ClickTarget>
        </FlexItem>
        {!!value && (
          <FlexAuto align="center" className={css({ textAlign: "right" })}>
            <UserDropdown />
          </FlexAuto>
        )}
      </Flex>
    </Navbar>
  );
}

export default SiteNavbar;
