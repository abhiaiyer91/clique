import React, { Fragment } from "react";
import { css } from "emotion";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import MaxWidth from "../core/MaxWidth";
import ClickTarget from "../core/ClickTarget";
import { Flex, FlexAuto } from "../core/Flex";

function Profile({ user }) {
  return (
    <section className={css({ textAlign: "center" })}>
      <div className={css({ borderRadius: "50%" })}>
        {user && user.avatar ? (
          <img
            className={css({ height: 64, width: 64, borderRadius: "50%" })}
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt=""
          />
        ) : (
          <div
            className={css({
              height: 64,
              width: 64,
              margin: '0 auto',
              borderRadius: "50%",
              backgroundColor: "#F5F5F5"
            })}
          />
        )}
      </div>
      <div className={css({ marginTop: 14 })}>
        {user &&
          user.name && (
            <h3 className={css({ margin: "0 0 4px" })}>{user.name}</h3>
          )}
        {user && user.location ? (
          <MaxWidth maxWidth="142">
            <Flex>
              <FlexAuto className={css({ color: "rgba(0, 0, 0, 0.56)" })}>
                <Fragment>
                  <FlexAuto className={css({ marginRight: 4 })}>
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        class="heroicon-ui"
                        d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      />
                    </svg>
                  </FlexAuto>
                  `$
                  {user.location.city}, ${user.location.state}`
                </Fragment>
              </FlexAuto>
            </Flex>
          </MaxWidth>
        ) : (
          <ClickTarget
            className={css({
              color: "#405dcf",
              fontWeight: 700,
              fontSize: 13,
              "&:hover": {
                textDecoration: "underline"
              }
            })}
          >
            Edit your Address
          </ClickTarget>
        )}
      </div>
    </section>
  );
}

export default graphql(
  gql`
    query me {
      me {
        id
        name
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
)(Profile);
