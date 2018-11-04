import React, { useState } from "react";
import { css } from "emotion";
import withRouter from "react-router-dom/withRouter";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import queries from "@cliquelabs/types/lib/queries";
import Autocomplete from "../core/Autocomplete";
import { Flex, FlexItem } from "../core/Flex";
import LocationSearch from "../components/LocationSearch";

const { updateEventLocation, eventFragment } = queries;

function LocationCard({ mutate, onEdit, match }) {
  function onSelect(locationId) {
    return mutate({
      variables: {
        eventId: match.params.id,
        locationId
      }
    }).then(() => {
      return onEdit();
    });
  }
  return (
    <Flex className={css({ marginBottom: 24 })}>
      <FlexItem>
        <Autocomplete
          onSelect={onSelect}
          Component={LocationSearch}
          placeholder="Search for a dope restaurant or bar..."
        />
      </FlexItem>
    </Flex>
  );
}

export default compose(
  withRouter,
  graphql(gql(`${eventFragment}${updateEventLocation}`))
)(LocationCard);
