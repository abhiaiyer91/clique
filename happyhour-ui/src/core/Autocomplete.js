import React from "react";
import { css } from "emotion";
import styled from "react-emotion";
import Downshift from "downshift";
import Input from "./Input";
import ListItem from "./ListItem";

const ListWrapper = styled("div")`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  position: absolute;
  width: 100%;
  top: 45px;
  box-shadow: 0 15px 35px 0 rgba(42, 51, 83, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.06);
  z-index: 5;
`;

export default function Autocomplete({ Component, placeholder }) {
  return (
    <Downshift
      onChange={selection => alert(`You selected ${selection.value}`)}
      itemToString={item => (item ? item.value : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => (
        <div className={css({ position: "relative" })}>
          <Input {...getInputProps()} placeholder={placeholder} />
          <ListWrapper>
            <Component
              listProps={getMenuProps()}
              isOpen={isOpen}
              selectedItem={selectedItem}
              highlightedIndex={highlightedIndex}
              inputValue={inputValue}
            />
          </ListWrapper>
        </div>
      )}
    </Downshift>
  );
}
