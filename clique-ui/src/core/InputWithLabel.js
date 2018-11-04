import React from "react";
import { css } from "emotion";
import Input from "./Input";

export default function InputWithLabel({ label, ...props }) {
  return (
    <section className={css({ marginBottom: 10 })}>
      <label className={css({ fontSize: 12, fontWeight: 700 })}>{label}</label>
      <Input {...props} />
    </section>
  );
}
