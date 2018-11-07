import React from "react";
import { graphql } from "react-apollo";
import queries from "@cliquelabs/types/lib/queries";
import gql from "graphql-tag";
import Link from "../core/Link";
import Loading from "../core/Loading";
import SubHeader from "../core/SubHeader";
import ListItem from "../core/ListItem";

const { invitationsForEvent } = queries;

function InvitationsList({ loading, invitations = [] }) {
  if (loading) {
    return <Loading />;
  }

  if (invitations && invitations.length === 0) {
    return null;
  }

  return (
    <div>
      <SubHeader>Invited Friends</SubHeader>
      {invitations.map(({ id, name, email }) => {
        return (
          <ListItem
            key={id}
            noHover
            title={name}
            subtitle={<Link href={`mailto:${email}`}>{email}</Link>}
          />
        );
      })}
    </div>
  );
}

export default graphql(gql(invitationsForEvent), {
  options: ({ eventId }) => {
    return {
      variables: {
        eventId
      }
    };
  },
  props: ({ data, ...rest }) => {
    return {
      loading: data.loading,
      invitations: data.invitationsForEvent,
      ...rest
    };
  }
})(InvitationsList);
