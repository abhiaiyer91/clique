import React from "react";
import { css } from "emotion";
import styled from "react-emotion";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import ListItem from "../core/ListItem";
import { Flex } from "../core/Flex";
import Link from "../core/Link";
import Paragraph from "../core/Paragraph";
import RatingsWidget from "./RatingsWidget";

const List = styled("ul")`
  padding: 0;
  margin: 0;
  list-style: none;
  max-height: 400px;
  overflow: hidden;
  overflow-y: scroll;
`;

function LocationSearch({
  items = [],
  isOpen,
  inputValue,
  listProps,
  ...rest
}) {
  return (
    <List {...listProps}>
      {isOpen && inputValue
        ? items.map((item, index) => (
            <ListItem {...item}>
              <Flex className={css({ marginTop: 4 })}>
                {!!item.rating && (
                  <div className={css({ alignSelf: "center" })}>
                    <RatingsWidget currentRating={item.rating} />
                  </div>
                )}
                {!!item.reviewCount && (
                  <Paragraph
                    className={css({ alignSelf: "center", marginLeft: 10, fontSize: 11 })}
                  >
                    <Link href={item.url} target="_blank">
                      Reviews ({item.reviewCount})
                    </Link>
                  </Paragraph>
                )}
              </Flex>
            </ListItem>
          ))
        : null}
    </List>
  );
}

const search = gql`
  query searchLocations($searchText: String!) {
    locations(searchText: $searchText) {
      id
      name
      avatar
      rating
      reviewCount
      url
      address {
        address1
        address2
        city
        country
        zipcode
        state
      }
    }
  }
`;

export default compose(
  graphql(search, {
    options: ({ inputValue }) => {
      return {
        variables: {
          searchText: inputValue
        }
      };
    },
    props: ({ data, ...rest }) => {
      const locations = (data && data.locations) || [];
      const items = locations.map(location => {
        const { address1, address2, city, state, zipcode } = location.address;
        return {
          ...location,
          title: location.name,
          subtitle: `${address1} ${address2 || ""} ${city}, ${state} ${zipcode}`
        };
      });

      return {
        items,
        loading: data.loading,
        ...rest
      };
    }
  })
)(LocationSearch);
