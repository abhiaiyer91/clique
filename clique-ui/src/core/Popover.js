import React, { Fragment, createContext, useState, useContext } from "react";
import styled from "react-emotion";
import Card from "./Card";
import Dismiss from "./Dismiss";
import ClickTarget from "./ClickTarget";

const DEFAULT_POPOVER_STATE = {
  isOpen: false,
  Component: () => null,
  popoverProps: {}
};

export const PopoverContext = createContext();

export function usePopover() {
  return useContext(PopoverContext);
}

const Scrim = styled("button")`
  position: fixed;
  width: 100%;
  z-index: 5;
  text-align: left;
  border: none;
  padding: 0;
  margin: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.56);
`;

const PopoverContainer = styled("div")`
  overflow: hidden;
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 11;
  flex-direction: column;
  justify-content: center;
  display: flex;
  transition: opacity 0.15s ease-in;
`;

export function Popover() {
  const { isOpen, Component, closePopover, popoverProps, containerStyle } = useContext(
    PopoverContext
  );

  return (
    <Fragment>
      <Scrim
        style={!isOpen ? { display: "none" } : {}}
        onClick={function() {
          return closePopover();
        }}
      />
      <PopoverContainer
        style={{
          ...containerStyle,
          opacity: isOpen ? 1 : 0
        }}
      >
        <Card noHover>
          <ClickTarget
            onClick={function() {
              return closePopover();
            }}
            style={{
              position: "absolute",
              right: 2,
              top: 4,
              padding: 16
            }}
          >
            <Dismiss />
          </ClickTarget>
          {Component && <Component {...popoverProps} />}
        </Card>
      </PopoverContainer>
    </Fragment>
  );
}

export function PopoverProvider({ children }) {
  const [popoverState, setPopoverState] = useState(DEFAULT_POPOVER_STATE);

  function showPopover({ Component, props, containerStyle }) {
    return setPopoverState({
      isOpen: true,
      Component,
      containerStyle,
      popoverProps: {
        ...props,
        isOpen: true
      }
    });
  }

  function closePopover() {
    return setPopoverState({
      isOpen: false,
      Component: null,
      popoverProps: {},
      containerStyle: {}
    });
  }

  const providerValue = {
    ...popoverState,
    showPopover,
    closePopover
  };

  return (
    <PopoverContext.Provider value={providerValue}>
      <Popover />
      {children}
    </PopoverContext.Provider>
  );
}
