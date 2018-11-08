import React, { Fragment, useCallback } from "react";
import { css } from "emotion";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import MaxWidth from "../core/MaxWidth";
import ListItem from "../core/ListItem";
import ClickTarget from "../core/ClickTarget";
import { Flex, FlexAuto } from "../core/Flex";
import { usePopover } from "../core/Popover";
import useAuthToken from "../hooks/useAuthToken";
import { avatarClass } from "./Avatar";

function User ({ user }) {

  const { isOpen, showPopover, closePopover } = usePopover()

  const openUserMenu = useCallback((ev) => {
    const { x, y, width, height } = ev.target.getBoundingClientRect()
    showPopover({
      containerStyle: {
        maxWidth: 300,
        left: x - 300,
        top: y + height + 20
      },
      props: {
        user
      },
      Component: UserMenu
    })
  }, [])

  return (
    <ClickTarget onClick={(ev) => openUserMenu(ev)}>{
      user && user.avatar ? (
        <img
          className={avatarClass}
          src={user.avatar}
          alt=""
        />
      ) : (<div className={avatarClass} />)
    }</ClickTarget>
  )
}

function UserMenu ({ user }) {

  const [value, setItem] = useAuthToken();

  const logout = useCallback(() => {
    setItem();
    return window.location.assign("/login");
  });


  return (
    <div>
      <ListItem isFirst title="Logout" onSelect={logout} />
    </div>
  )
}

export default graphql(
  gql`
    query me {
      me {
        avatar
      }
    }
  `,
  {
    props: ({ data, ...rest }) => {
      return {
        loading: data.loading,
        user: data.me,
        ...rest
      };
    }
  }
)(User);
