import React, { Fragment, createContext, useState, useContext } from "react";
import styled, { keyframes } from "react-emotion";
import { css } from "emotion";
import Card from "./Card";
import Dismiss from "./Dismiss";
import ClickTarget from "./ClickTarget";

const DEFAULT_MODAL_STATE = {
  isOpen: false,
  Component: () => null,
  modalProps: {}
};

export const PanelContext = createContext();

export function usePanel() {
  return useContext(PanelContext);
}

const FadeRight = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

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

const ModalContainer = styled("div")`
  overflow: hidden;
  position: fixed;
  top: 54px;
  padding: 16px;
  max-width: 560px;
  width: 100%;
  height: 100%;
  background-color: #f3f7f9;
  right: 0;
  margin: 0 auto;
  z-index: 11;
  animation: ${FadeRight};
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
`;

export function Panel() {
  const { isOpen, Component, closePanel, modalProps } = useContext(
    PanelContext
  );

  return (
    <Fragment>
      <Scrim
        style={!isOpen ? { display: "none" } : {}}
        onClick={function() {
          return closePanel();
        }}
      />
      <ModalContainer style={!isOpen ? { display: "none" } : {}}>
        <Card
          noHover
          className={css({
            borderRadius: 0,
            backgroundColor: "#f3f7f9",
            boxShadow: "none"
          })}
        >
          {isOpen && (
            <ClickTarget
              onClick={function() {
                return closePanel();
              }}
              style={{
                position: "absolute",
                right: 2,
                top: 4,
                padding: 16,
                backgroundColor: "#f3f7f9"
              }}
            >
              <Dismiss />
            </ClickTarget>
          )}

          {Component && <Component {...modalProps} />}
        </Card>
      </ModalContainer>
    </Fragment>
  );
}

export function PanelProvider({ children }) {
  const [modalState, setModalState] = useState(DEFAULT_MODAL_STATE);

  function showPanel({ Component, props }) {
    return setModalState({
      isOpen: true,
      Component,
      modalProps: {
        ...props,
        isOpen: true
      }
    });
  }

  function closePanel() {
    return setModalState({
      Component: null,
      isOpen: false,
      modalProps: {}
    });
  }

  const providerValue = {
    ...modalState,
    showPanel,
    closePanel
  };

  return (
    <PanelContext.Provider value={providerValue}>
      <Panel />
      {children}
    </PanelContext.Provider>
  );
}
