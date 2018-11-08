import React from "react";
import { css } from "emotion";
import MaxWidth from "../../core/MaxWidth";
import Card from "../../core/Card";

export default function AcceptInvitation({
  inviterName = "Abhi",
  name = "Gavin"
}) {
  return (
    <MaxWidth maxWidth="560">
      <section className={css({ marginBottom: 24 })}>
        <h2
          className={css({
            fontSize: 32,
            lineHeight: "48px",
            textAlign: "center",
            margin: "0 0 8px"
          })}
        >
          Join my Cliq!
        </h2>

        <p
          className={css({
            textAlign: "center",
            margin: "0"
          })}
        >
          Hey <strong>{name}</strong>! You have been invited by{" "}
          <strong>{inviterName}</strong> to join a <strong>Cliq</strong>!
        </p>

        <p
          className={css({
            textAlign: "center",
            margin: "0"
          })}
        >
          Review the event details below and press the <strong>"Join"</strong> button below.
        </p>
      </section>
      <Card>Yoooo</Card>
    </MaxWidth>
  );
}
