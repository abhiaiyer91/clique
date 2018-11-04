import React, { Fragment, createContext, useState, useContext } from "react";
import styled from "react-emotion";
import Card from "./Card";
import Dismiss from "./Dismiss";
import ClickTarget from "./ClickTarget";

const DEFAULT_MODAL_STATE = {
  isOpen: false,
  Component: () => null,
  modalProps: {}
};

export const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
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

const ModalContainer = styled("div")`
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

export function Modal() {
  const { isOpen, Component, closeModal, modalProps } = useContext(
    ModalContext
  );

  return (
    <Fragment>
      <Scrim
        style={!isOpen ? { display: "none" } : {}}
        onClick={function() {
          return closeModal();
        }}
      />
      <ModalContainer
        style={{ maxWidth: modalProps.width, opacity: isOpen ? 1 : 0 }}
      >
        <Card noHover>
          <ClickTarget
            onClick={function() {
              return closeModal();
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
          {Component && <Component {...modalProps} />}
        </Card>
      </ModalContainer>
    </Fragment>
  );
}

export function ModalProvider({ children }) {
  const [modalState, setModalState] = useState(DEFAULT_MODAL_STATE);

  function showModal({ Component, props }) {
    return setModalState({
      isOpen: true,
      Component,
      modalProps: {
        ...props,
        isOpen: true
      }
    });
  }

  function closeModal() {
    return setModalState({
      Component: null,
      isOpen: false,
      modalProps: {}
    });
  }

  const providerValue = {
    ...modalState,
    showModal,
    closeModal
  };

  return (
    <ModalContext.Provider value={providerValue}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
}
