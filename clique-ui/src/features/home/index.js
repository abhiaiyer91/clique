import React, { useEffect, useCallback } from "react";
import { css } from "emotion";
import withRouter from "react-router-dom/withRouter";
import Profile from "../../components/Profile";
import useAuthToken from '../../hooks/useAuthToken';
import Chilling from "../../icons/Chilling";
import SubHeader from "../../core/SubHeader";
import Card from "../../core/Card";
import Button from "../../core/Button";
import Paragraph from "../../core/Paragraph";
import CardBody from "../../core/CardBody";
import { Flex, FlexAuto, FlexItem } from "../../core/Flex";

function Home({ history }) {
  const [value, setItem] = useAuthToken();

  useEffect(
    () => {
      if (!value) {
        history.replace("/login");
      }
    },
    []
  );

  const routeToEvent = useCallback(
    () => {
      return history.push("/new/event");
    },
    [history]
  );
  return (
    <Flex>
      <FlexItem>
        <SubHeader>Upcoming Events</SubHeader>
        <Card>
          <CardBody>
            <div
              className={css({
                maxWidth: 360,
                margin: "0 auto",
                padding: "16px 0 0"
              })}
            >
              <Chilling width="100%" />
            </div>
            <div
              className={css({
                maxWidth: 400,
                margin: "0 auto",
                textAlign: "center"
              })}
            >
              <h2 className={css({ marginBottom: 8 })}>
                You have no upcoming events!
              </h2>
              <Paragraph className={css({ fontSize: 16 })}>
                Click the button below to setup your event.
              </Paragraph>
              <div
                className={css({
                  maxWidth: 240,
                  margin: "0 auto"
                })}
              >
                <Button
                  onClick={routeToEvent}
                  className={css({ width: "100%", margin: "24px 0" })}
                >
                  Setup an Event
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </FlexItem>

      <FlexAuto className={css({ paddingLeft: 24, flexBasis: 320 })}>
        <Card>
          <CardBody>
            <Profile />
          </CardBody>
        </Card>
      </FlexAuto>
    </Flex>
  );
}

export default withRouter(Home);
