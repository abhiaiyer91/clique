import React, { Fragment } from "react";
import { css } from "emotion";
import withRouter from "react-router-dom/withRouter";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import MaxWidth from "../../core/MaxWidth";
import Card from "../../core/Card";
import Loading from "../../core/Loading";
import LocationDisplay from "../../components/LocationDisplay";

function AcceptInvitation({ invitationDetails, loading }) {
  return (
    <MaxWidth maxWidth="640">
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <section className={css({ marginBottom: 24 })}>
            <h2
              className={css({
                fontSize: 32,
                lineHeight: "48px",
                textAlign: "center",
                margin: "0 0 8px"
              })}
            >
              Join my Cliq!
            </h2>

            <p
              className={css({
                textAlign: "center",
                margin: "0"
              })}
            >
              Hey <strong>{invitationDetails.name}</strong>! You have been
              invited by <strong>{invitationDetails.inviterName}</strong> to
              join a <strong>Cliq</strong>!
            </p>

            <p
              className={css({
                textAlign: "center",
                margin: "0"
              })}
            >
              Review the event details below and press the{" "}
              <strong>"Join"</strong> button below.
            </p>
          </section>
          <MaxWidth maxWidth="560">
            <Card>
              <LocationDisplay location={invitationDetails.event.location} />
            </Card>
          </MaxWidth>
        </Fragment>
      )}
    </MaxWidth>
  );
}

export default compose(
  withRouter,
  graphql(
    gql`
      query invitationDetails($invitationId: ID!) {
        invitationDetails(invitationId: $invitationId) {
          id
          name
          inviterName
          event {
            id
            location {
              id
              name
              url
              avatar
              rating
              reviewCount
              address {
                address1
                address2
                city
                state
                zipcode
              }
            }
          }
        }
      }
    `,
    {
      options: ({ match }) => {
        return {
          variables: {
            invitationId: match.params.id
          }
        };
      },
      props: ({ data, ...rest }) => {
        return {
          loading: data.loading,
          invitationDetails: data && data.invitationDetails,
          ...rest
        };
      }
    }
  )
)(AcceptInvitation);
