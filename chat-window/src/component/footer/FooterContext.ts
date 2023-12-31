import {createContext, useContext} from "react";

const STUB_SET_INPUT_VALUE = () => undefined;
const STUB_INPUT_VALUE = "";

export type InputValue = {
  inputValue: string,
  setInputValue: (inputValue: string) => void,
  updatedValue: string,
  setUpdatedValue: (updatedValue: string) => void,
}

export const InputValueContext: React.Context<InputValue> = createContext<InputValue>({
  inputValue: STUB_INPUT_VALUE,
  setInputValue: STUB_SET_INPUT_VALUE,
  updatedValue: STUB_INPUT_VALUE,
  setUpdatedValue: STUB_SET_INPUT_VALUE,
});

export const useInputValue = () => useContext(InputValueContext);