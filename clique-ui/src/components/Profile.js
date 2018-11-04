import React from "react";
import { css } from "emotion";
import MaxWidth from "../core/MaxWidth";
import { Flex, FlexAuto, FlexItem } from "../core/Flex";

export default function Profile() {
  return (
    <section className={css({ textAlign: "center" })}>
      <div className={css({ borderRadius: "50%" })}>
        <img
          className={css({ height: 64, width: 64, borderRadius: "50%" })}
          src="https://randomuser.me/api/portraits/women/21.jpg"
          alt=""
        />
      </div>
      <div className={css({ marginTop: 14 })}>
        <h3 className={css({ margin: "0 0 8px" })}>Cait Genevieve</h3>
        <MaxWidth maxWidth="142">
          <Flex>
            <FlexAuto className={css({ marginRight: 4 })}>
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
            </FlexAuto>
            <FlexAuto className={css({ color: "rgba(0, 0, 0, 0.56)" })}>
              New York, NY
            </FlexAuto>
          </Flex>
        </MaxWidth>
      </div>
    </section>
  );
}
