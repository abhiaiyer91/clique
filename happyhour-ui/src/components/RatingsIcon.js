import React from "react";
import { css, cx } from "emotion";

import RatingActiveIcon from "../icons/RatingActiveIcon";
import RatingInActiveIcon from "../icons/RatingStarInActiveIcon";
import RatingStarHalfActiveIcon from "../icons/RatingHalf";

const stylesheet = {
  canInteract: {
    cursor: "pointer"
  },
  xl: {
    height: 32,
    width: 32
  },
  lg: {
    height: 24,
    width: 24
  },
  sm: {
    height: 18,
    width: 18
  },
  baseRating: {
    marginRight: 6,
    "&:last-of-type": {
      marginRight: 0
    }
  }
};

export default function RatingsIcon({ iconSize, type }) {
  let ratingClass;

  let RatingIcon = null;

  if (type === "full") {
    RatingIcon = <RatingActiveIcon />;
  } else if (type === "empty") {
    RatingIcon = <RatingInActiveIcon />;
  } else if (type === "half") {
    RatingIcon = <RatingStarHalfActiveIcon />;
  } else {
    RatingIcon = <RatingInActiveIcon />;
    ratingClass = cx(css(stylesheet.canInteract));
  }

  const ratingSizeClass = iconSize;

  return (
    <div
      className={cx(
        css(stylesheet.baseRating),
        css(ratingSizeClass),
        ratingClass
      )}
    >
      {RatingIcon}
    </div>
  );
}
