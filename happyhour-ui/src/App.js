import React from "react";
import { ApolloProvider } from "react-apollo";
import { css } from "emotion";
import Client from "./client";
import Card from "./core/Card";
import CardBody from "./core/CardBody";
import Navbar from "./core/Navbar";
import NavHeader from "./core/NavHeader";
import MaxWidth from "./core/MaxWidth";
import Header from "./core/Header";
import ListItem from "./core/ListItem";
import SubHeader from "./core/SubHeader";
import Paragraph from "./core/Paragraph";
import Link from "./core/Link";
import Autocomplete from './core/Autocomplete';
import { Flex, FlexItem, FlexColumn } from "./core/Flex";
import LocationSearch from './components/LocationSearch';
import Crew from "./icons/Hangout";
import FriendsGroup from "./icons/Friends";


const friends = [
  {
    name: "Jeannie Dang",
    email: "jeannie.b.dang@gmail.com",
    avatar:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/15966221_10207421909657030_8725275612281465727_n.jpg?_nc_cat=101&_nc_ht=scontent-lax3-1.xx&oh=1919e2851b09481e76ff955c64c43cf1&oe=5C752EC9"
  },
  {
    name: "Abhi Aiyer",
    email: "abhiaiyer91@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/2359375?s=460&v=4"
  },
  {
    name: "Rishaad Taraporewalla",
    email: "rishaadt@gmail.com",
    avatar:
      "https://www.facebook.com/search/async/profile_picture/?fbid=1112563969&width=72&height=72"
  },
  {
    name: "Rima Patel",
    email: "rimap@gmail.com",
    avatar:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-1/p200x200/40575739_1645442902245726_8249479711336431616_n.jpg?_nc_cat=104&_nc_ht=scontent-lax3-2.xx&oh=48b8fde9def98fe8e3b37a6d977d4e40&oe=5C48C203"
  },
  {
    name: "Ryan Hansen",
    email: "rphansen91@gmail.com",
    avatar:
      "https://www.facebook.com/search/async/profile_picture/?fbid=100000266166593&width=72&height=72"
  }
];

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
    <ApolloProvider client={Client}>
      <Navbar>
        <NavHeader>clique</NavHeader>
      </Navbar>
      <section className={css({ padding: "84px 0" })}>
        <FlexColumn justify="center" height="100%">
          <div>
            <MaxWidth margin="0 auto">
              <div className={css({ marginBottom: 24 })}>
                <Header className={css({ textAlign: "center" })}>
                  Setup a Happy Hour
                </Header>
              </div>
              <div className={css({ marginBottom: 32 })}>
                <SubHeader>Find a spot</SubHeader>
                <LocationCard />
              </div>
              <div className={css({ marginBottom: 32 })}>
                <SubHeader>Assemble the crew</SubHeader>
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
                          You can add friends below. Send them an invite to your
                          happy hour!
                        </Paragraph>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <SubHeader>Add friends</SubHeader>
              <Card>
                {friends.length === 0 ? (
                  <CardBody>
                    <FriendsGroup />
                    <h2
                      className={css({
                        fontSize: 16,
                        lineHeight: "18px",
                        textAlign: "center"
                      })}
                    >
                      You don't have any friends in your network
                    </h2>
                    <div className={css({ maxWidth: 240, margin: "0 auto" })}>
                      <Paragraph
                        className={css({
                          textAlign: "center"
                        })}
                      >
                        Click the add button below to invite friends.
                      </Paragraph>
                    </div>
                  </CardBody>
                ) : (
                  <div
                    className={css({
                      maxHeight: 350,
                      overflow: "hidden",
                      overflowY: "auto"
                    })}
                  >
                    {friends.map((friend, index, list) => {
                      return (
                        <ListItem
                          isFirst={index === 0}
                          isLast={index === list.length - 1}
                          {...friend}
                          subtitle={
                            <Link href={`mailto:${friend.email}`}>
                              {friend.email}
                            </Link>
                          }
                          title={friend.name}
                          key={friend.name}
                        />
                      );
                    })}
                  </div>
                )}
              </Card>
            </MaxWidth>
          </div>
        </FlexColumn>
      </section>
    </ApolloProvider>
  );
}
