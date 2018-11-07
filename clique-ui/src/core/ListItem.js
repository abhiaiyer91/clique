import React from "react";
import { css } from "emotion";
import ClickTarget from "./ClickTarget";
import Paragraph from "./Paragraph";
import { Flex, FlexAuto, FlexItem } from "./Flex";

export default function ListItem({
  onSelect,
  title,
  avatar,
  children,
  renderControls,
  subtitle,
  isFirst,
  noHover = false,
  isLast
}) {
  let border = {};

  if (isFirst) {
    border = {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    };
  } else if (isLast) {
    border = {
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4
    };
  }
  return (
    <ClickTarget onClick={onSelect} className={css({ width: "100%" })}>
      <Flex
        className={css({
          cursor: "pointer",
          padding: "16px",
          backgroundColor: "white",
          borderBottom: isLast ? "none" : "1px solid rgba(42, 51, 83, 0.12)",
          ":hover": {
            backgroundColor: noHover ? "white" : "#dfe4e7"
          },
          ...border
        })}
      >
        <FlexAuto align="center">
          <div
            className={css({
              height: 48,
              width: 48,
              display: "flex",
              borderRadius: 4,
              overflow: "hidden",
              textAlign: "center",
              background: "linear-gradient(to bottom, #7bc6cc, #be93c5)"
            })}
          >
            {avatar ? (
              <img
                alt="user profile"
                className={css({
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 4
                })}
                src={avatar}
              />
            ) : (
              <p
                className={css({
                  alignSelf: "center",
                  color: "white",
                  fontSize: 24,
                  flex: "1 0 0px",
                  fontWeight: 700,
                  margin: 0
                })}
              >
                {title && title[0]}
              </p>
            )}
          </div>
        </FlexAuto>
        <FlexItem align="center">
          <div className={css({ padding: "0 16px" })}>
            <h3 className={css({ margin: "0 0 4px", fontSize: 16 })}>
              {title}
            </h3>
            {subtitle && <Paragraph>{subtitle}</Paragraph>}
            {children}
          </div>
        </FlexItem>
        {renderControls}
      </Flex>
    </ClickTarget>
  );
}
