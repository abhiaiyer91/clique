import React from "react";
import { css } from "emotion";

export default function Avatar({ size = 48, avatar, title }) {
  return (
    <div
      className={css({
        height: size,
        width: size,
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
  );
}
