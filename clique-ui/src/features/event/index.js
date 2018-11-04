import React from "react";
import { css } from "emotion";
import Card from "../../core/Card";
import CardBody from "../../core/CardBody";
import Header from "../../core/Header";
import SubHeader from "../../core/SubHeader";
import Paragraph from "../../core/Paragraph";
import Autocomplete from "../../core/Autocomplete";
import { Flex, FlexItem } from "../../core/Flex";
import LocationSearch from "../../components/LocationSearch";
import Friends from "../../components/Friends";
import Crew from "../../icons/Hangout";

function LocationCard() {
  return (
    <Flex className={css({ marginBottom: 24 })}>
      <FlexItem>
        <Autocomplete
          Component={LocationSearch}
          placeholder="Search for a dope restaurant or bar..."
        />
      </FlexItem>
    </Flex>
  );
}

export default function App() {
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
            <SubHeader>Find a spot</SubHeader>
            <LocationCard />
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
                <Crew width="100%" />

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
                    You can add friends to the left. Send them an invite to your happy
                    hour!
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
