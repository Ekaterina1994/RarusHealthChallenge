import {InputField} from "src/component/footer/inputField/InputField";
import {ButtonEnter} from "src/component/footer/button/ButtonEnter";
import styles from "src/component/footer/Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <InputField />
      <ButtonEnter />
    </div>
  );
};