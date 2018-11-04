import React from "react";
import styled from "react-emotion";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import LocationDisplay from "./LocationDisplay";

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
  onSelect,
  inputValue,
  listProps,
  ...rest
}) {
  return (
    <List {...listProps}>
      {isOpen && inputValue
        ? items.map((item, index) => (
            <LocationDisplay
              onSelect={() => {
                console.log(item.id, 'YOYOOO')
                return onSelect(item.id);
              }}
              location={item}
            />
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
