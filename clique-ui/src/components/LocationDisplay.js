import React from "react";
import { css } from "emotion";
import Paragraph from "../core/Paragraph";
import Link from "../core/Link";
import { Flex } from "../core/Flex";
import ListItem from "../core/ListItem";
import ClickTarget from "../core/ClickTarget";
import RatingsWidget from "./RatingsWidget";

export default function LocationDisplay({
  onEdit,
  editMode,
  location,
  noHover = false,
  onSelect = () => {}
}) {
  const subtitle = location && location.address && `${location.address.address1} ${location.address.address2 ||
    ""} ${location.address.city}, ${location.address.state} ${
    location.address.zipcode
  }`;
  return (
    <ListItem
      noHover={noHover}
      onSelect={onSelect}
      subtitle={subtitle}
      title={location && location.name}
      avatar={location && location.avatar}
      renderControls={
        onEdit && (
          <div className={css({ alignSelf: "center" })}>
            <ClickTarget
              className={css({ color: "#405dcf", textDecoration: "underline" })}
              onClick={onEdit}
            >
              {editMode ? "Cancel" : "Change"}
            </ClickTarget>
          </div>
        )
      }
    >
      <Flex className={css({ marginTop: 4 })}>
        {!!location && !!location.rating && (
          <div className={css({ alignSelf: "center" })}>
            <RatingsWidget currentRating={location.rating} />
          </div>
        )}
        {!!location && !!location.reviewCount && (
          <Paragraph
            className={css({
              alignSelf: "center",
              marginLeft: 10,
              fontSize: 11
            })}
          >
            <Link href={location.url} target="_blank">
              Reviews ({location.reviewCount})
            </Link>
          </Paragraph>
        )}
      </Flex>
    </ListItem>
  );
}
