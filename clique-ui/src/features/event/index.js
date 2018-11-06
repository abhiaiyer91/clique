import React, { Fragment, useCallback, useState } from "react";
import { css } from "emotion";
import { graphql, compose } from "react-apollo";
import withRouter from "react-router-dom/withRouter";
import gql from "graphql-tag";
import queries from "@cliquelabs/types/lib/queries";
import Loading from "../../core/Loading";
import Card from "../../core/Card";
import CardBody from "../../core/CardBody";
import Header from "../../core/Header";
import SubHeader from "../../core/SubHeader";
import Paragraph from "../../core/Paragraph";
import { Flex, FlexItem } from "../../core/Flex";
import LocationDisplay from "../../components/LocationDisplay";
import LocationCard from "../../components/LocationEventCard";
import Friends from "../../components/Friends";
import Crew from "../../icons/Hangout";

const { eventById, eventFragment } = queries;

function LoctionSection({ location }) {
  const [locationToggle, setToggle] = useState(!location);

  const setLocationToggle = useCallback(() => {
    return setToggle(!locationToggle);
  });

  return (
    <Fragment>
      <SubHeader>
        {locationToggle || !location ? "Find a spot" : "Get Ready"}
      </SubHeader>
      {(locationToggle || !location) && (
        <div className="animated fadeIn">
          <LocationCard onEdit={setLocationToggle} />
        </div>
      )}
      {!!location && (
        <LocationDisplay
          noHover
          location={location}
          editMode={locationToggle}
          onEdit={setLocationToggle}
        />
      )}
    </Fragment>
  );
}

function App({ event, loading }) {
  if (loading) {
    return (
      <div className={css({ height: "100%", padding: 100 })}>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className={css({ marginBottom: 24 })}>
        <Header className={css({ textAlign: "left" })}>
          Setup a Happy Hour
        </Header>
      </div>
      <Flex>
        <FlexItem>
          <div className={css({ marginBottom: 32 })}>
            <LoctionSection location={event.location} />
          </div>
          <SubHeader>Invite friends</SubHeader>
          <Card>
            <Friends />
          </Card>
        </FlexItem>
        <FlexItem className={css({ paddingLeft: 32 })}>
          <SubHeader>the crew</SubHeader>
          <Card>
            <CardBody>
              <div className={css({ maxWidth: 400, margin: "0 auto" })}>
                <div className={css({ maxWidth: 300, margin: "0 auto" })}>
                  <Crew width="100%" />
                </div>

                <h2
                  className={css({
                    fontSize: 16,
                    lineHeight: "18px",
                    textAlign: "center"
                  })}
                >
                  You haven't added anyone to your crew yet!
                </h2>
                <div className={css({ maxWidth: 240, margin: "0 auto" })}>
                  <Paragraph
                    className={css({
                      textAlign: "center"
                    })}
                  >
                    You can add friends to the left. Send them an invite to your
                    happy hour!
                  </Paragraph>
                </div>
              </div>
            </CardBody>
          </Card>
        </FlexItem>
      </Flex>
    </div>
  );
}

export default compose(
  withRouter,
  graphql(gql(`${eventById}${eventFragment}`), {
    options: ({ match }) => {
      return {
        variables: {
          id: match.params.id
        }
      };
    },
    props: ({ data, ...rest }) => {
      return {
        event: data.eventById,
        loading: data.loading,
        ...rest
      };
    }
  })
)(App);
