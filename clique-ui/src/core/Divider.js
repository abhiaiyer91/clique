import React from "react";
import { css, cx } from "emotion";

type DividerType = {
  margin: number,
  style: Object,
  type: "thin" | "thick",
  className: string | Object
};

const thickStyle = {
  borderStyle: "solid",
  borderColor: "rgba(0, 0, 0, 0.12)"
};

const thinStyle = {
  border: "none",
  borderTop: `1px solid rgba(0, 0, 0, 0.12)`
};

export default function Divider({
  type = "thick",
  margin = 20,
  style = {},
  className
}: DividerType): React$Node {
  const isThin = type === "thin";
  return (
    <hr
      className={cx(
        css({
          margin: `${margin}px 0`
        }),
        { [css(thickStyle)]: !isThin, [css(thinStyle)]: !!isThin },
        className
      )}
      style={style}
    />
  );
}
