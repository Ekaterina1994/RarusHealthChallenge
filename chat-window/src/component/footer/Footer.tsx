import {useState} from "react";
import {InputField} from "src/component/footer/inputField/InputField";
import {ButtonEnter} from "src/component/footer/button/ButtonEnter";
import {InputValueContext} from "src/component/footer/FooterContext";
import styles from "src/component/footer/Footer.module.scss";

export const Footer = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={styles.wrapper}>
      <InputValueContext.Provider value={{inputValue, setInputValue}}>
        <InputField />
        <ButtonEnter />
      </InputValueContext.Provider>
    </div>
  );
};