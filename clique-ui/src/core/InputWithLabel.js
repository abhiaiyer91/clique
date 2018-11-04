import React from "react";
import { css } from "emotion";
import Input from "./Input";
import Paragraph from "./Paragraph";

export default function InputWithLabel({
  label,
  required = true,
  errorMessage,
  ...props
}) {
  return (
    <section className={css({ marginBottom: 10 })}>
      <label
        className={css({
          fontSize: 12,
          fontWeight: 700,
          color: !!errorMessage ? "#F50057" : "black"
        })}
      >
        {label}
        {required && " *"}
      </label>
      <Input className={css({ marginTop: 8 })} {...props} />
      <Paragraph className={css({ color: "#F50057", marginTop: 8 })}>
        {errorMessage}
      </Paragraph>
    </section>
  );
}
