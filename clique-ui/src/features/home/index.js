import React from "react";
import { css } from "emotion";
import Profile from "../../components/Profile";
import SubHeader from "../../core/SubHeader";
import Card from "../../core/Card";
import CardBody from "../../core/CardBody";
import { Flex, FlexAuto, FlexItem } from "../../core/Flex";

export default function Home() {
  return (
    <Flex>
      <FlexItem>
        <SubHeader>Upcoming Events</SubHeader>
        <Card>
          <CardBody />
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
