import React, { useCallback, useEffect, useState } from "react";
import { css } from "emotion";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import useAuthToken from "../hooks/useAuthToken";
import Avatar from "./Avatar";
import ClickTarget from "./ClickTarget";

const itemClass = css({
  color: "#405dcf",
  fontWeight: 700,
  fontSize: 14
});

const itemContainerClass = css({
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  padding: 16,
  ":hover": {
    backgroundColor: "#f3f7f9"
  }
});

function UserDropdown({ avatar, name }) {
  const [value, setItem] = useAuthToken();

  const [dropdownState, setDropdownState] = useState(false);

  const logout = useCallback(() => {
    setItem();
    return window.location.assign("/login");
  });

  const openDropdown = useCallback(() => {
    return setDropdownState(!dropdownState);
  });

  const closeDropdown = useCallback(() => {
    return setDropdownState(false);
  });

  const goHome = useCallback(() => {
    return window.location.assign("/home");
  });

  useEffect(() => {
    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  });

  return (
    <section className={css({ position: "relative" })}>
      <ClickTarget onClick={openDropdown}>
        <Avatar size={24} avatar={avatar} title={name} />
        {dropdownState && (
          <ul
            className={css({
              position: "absolute",
              width: 282,
              right: 0,
              padding: 0,
              margin: 0,
              top: 40,
              backgroundColor: "white",
              listStyle: "none",
              border: "1px solid rgba(0, 0, 0, 0.12)"
            })}
          >
            <li className={itemContainerClass}>
              <ClickTarget onClick={goHome} className={itemClass}>
                Home
              </ClickTarget>
            </li>
            <li className={itemContainerClass}>
              <ClickTarget
                onClick={logout}
                className={css({
                  color: "#405dcf",
                  fontWeight: 700,
                  fontSize: 13
                })}
              >
                Log out
              </ClickTarget>
            </li>
          </ul>
        )}
      </ClickTarget>
    </section>
  );
}

export default graphql(
  gql`
    query me {
      me {
        id
        name
        avatar
      }
    }
  `,
  {
    options: {
      fetchPolicy: "cache-only"
    },
    props: ({ data, ...rest }) => {
      return {
        ...data.me,
        ...rest
      };
    }
  }
)(UserDropdown);
