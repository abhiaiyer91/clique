import React, { Fragment } from "react";
import { css } from "emotion";
import { graphql } from "react-apollo";
import queries from "@cliquelabs/types/lib/queries";
import gql from "graphql-tag";
import { usePanel } from "../core/Panel";
import Button from "../core/Button";
import Link from "../core/Link";
import Loading from "../core/Loading";
import CardBody from "../core/CardBody";
import ListItem from "../core/ListItem";
import Paragraph from "../core/Paragraph";
import FriendsGroup from "../icons/Friends";
import InviteFriends from "./InviteFriends";

const { friends } = queries;

function FriendsZeroState() {
  const { showPanel } = usePanel();
  return (
    <CardBody>
      <div className={css({ maxWidth: 240, margin: "0 auto" })}>
        <FriendsGroup />
      </div>
      <h2
        className={css({
          fontSize: 16,
          lineHeight: "18px",
          textAlign: "center"
        })}
      >
        You don't have any friends in your network
      </h2>
      <div className={css({ maxWidth: 260, margin: "0 auto" })}>
        <Paragraph
          className={css({
            textAlign: "center"
          })}
        >
          Click the button below to invite friends.
        </Paragraph>

        <div className={css({ maxWidth: 160, margin: "16px auto" })}>
          <Button
            onClick={() => {
              return showPanel({
                Component: InviteFriends
              });
            }}
            className={css({ width: "100%" })}
          >
            Invite Friends
          </Button>
        </div>
      </div>
    </CardBody>
  );
}

function Friends({ friendsList = [], loading }) {
  if (loading) {
    return (
      <div className={css({ padding: 16 })}>
        <Loading />
      </div>
    );
  }
  return (
    <Fragment>
      {friendsList.length === 0 ? (
        <FriendsZeroState />
      ) : (
        <div
          className={css({
            maxHeight: 350,
            overflow: "hidden",
            overflowY: "auto"
          })}
        >
          {friendsList.map((friend, index, list) => {
            return (
              <ListItem
                isFirst={index === 0}
                isLast={index === list.length - 1}
                {...friend}
                subtitle={
                  <Link href={`mailto:${friend.email}`}>{friend.email}</Link>
                }
                title={friend.name}
                key={friend.name}
              />
            );
          })}
        </div>
      )}
    </Fragment>
  );
}

export default graphql(gql(friends), {
  props: ({ data, ...rest }) => {
    return {
      friendsList: data.friends || [],
      loading: data.loading,
      ...rest
    };
  }
})(Friends);
