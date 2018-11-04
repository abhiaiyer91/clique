import React from "react";
import { css } from "emotion";
import times from "lodash.times";
import RatingsIcon from "./RatingsIcon";

// http://phrogz.net/round-to-nearest-via-modulus-division
function roundToNearest(number: number, multiple: number): number {
  const half = multiple / 2;
  return (number + half - (number + half)) % multiple;
}

export default function RatingsWidget({
  currentRating,
  className,
  iconSize,
  size = 5
}) {
  const ratingSteps = [];
  let rating = currentRating;

  const roundRating = Math.round(roundToNearest(rating, 0.5));
  const ceilRating = Math.ceil(roundRating);

  times(size, (val: number) => {
    const indexVal = val + 1;
    let type = "empty";
    if (indexVal <= rating) {
      type = "full";
    } else if (roundRating === indexVal && ceilRating) {
      type = "half";
    }

    ratingSteps.push(
      <RatingsIcon
        iconSize={iconSize}
        size={size}
        readOnly
        step={indexVal}
        type={type}
        key={`rating-step-${indexVal}`}
      />
    );
  });

  return <section className={css({ display: "flex" })}>{ratingSteps}</section>;
}
