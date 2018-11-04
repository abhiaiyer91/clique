import React, { useCallback } from "react";
import { css } from "emotion";
import useAuthToken from "../hooks/useAuthToken";
import Navbar from "../core/Navbar";
import { Flex, FlexItem } from "../core/Flex";
import ClickTarget from "../core/ClickTarget";
import NavHeader from "../core/NavHeader";

function SiteNavbar({ history }) {
  const [value, setItem] = useAuthToken();

  const logout = useCallback(() => {
    setItem();
    return window.location.assign("/login");
  });

  return (
    <Navbar>
      <Flex className={css({ width: "97%" })}>
        <div>
          <NavHeader className={css({ color: "#405dcf" })}>clique</NavHeader>
        </div>
        {!!value && (
          <FlexItem className={css({ textAlign: "right" })}>
            <ClickTarget
              onClick={logout}
              className={css({
                color: "#405dcf",
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "underline"
              })}
            >
              Log out
            </ClickTarget>
          </FlexItem>
        )}
      </Flex>
    </Navbar>
  );
}

export default SiteNavbar;
