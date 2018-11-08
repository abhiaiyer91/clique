import React, { Fragment } from "react";
import { css } from "emotion";
import withRouter from "react-router-dom/withRouter";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import Button from "../../core/Button";
import MaxWidth from "../../core/MaxWidth";
import Card from "../../core/Card";
import Loading from "../../core/Loading";
import Avatar from "../../core/Avatar";
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

            <MaxWidth maxWidth="320" margin="24px auto 32px">
              <div
                className={css({ justifyContent: "center", display: "flex" })}
              >
                <Avatar
                  size={80}
                  avatar={invitationDetails.inviter.avatar}
                  title={invitationDetails.inviter.name}
                />
              </div>
            </MaxWidth>

            <p
              className={css({
                textAlign: "center",
                margin: "0 0 4px"
              })}
            >
              Hey <strong>{invitationDetails.name}</strong>! You have been
              invited by <strong>{invitationDetails.inviter.name}</strong> to
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
            <p className={css({ margin: "0 0 10px" })}>
              <strong>When:</strong>
            </p>
            <Card>
              <p>{invitationDetails.event.eventTime}</p>
            </Card>
            <p className={css({ margin: "0 0 10px" })}>
              <strong>Where:</strong>
            </p>
            <Card>
              <LocationDisplay location={invitationDetails.event.location} />
            </Card>
          </MaxWidth>

          <MaxWidth maxWidth="160" margin="24px auto">
            <Button
              className={css({
                padding: "15px 45px",
                width: "100%",
                height: "auto"
              })}
            >
              Join!
            </Button>
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
          inviter {
            name
            avatar
          }
          event {
            id
            # eventTime
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
