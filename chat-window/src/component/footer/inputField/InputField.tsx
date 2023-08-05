import {Input} from "antd";
import styles from "src/component/footer/inputField/InputField.module.scss";

export const InputField = () => {
  return (
    <Input
      placeholder="Enter text"
      className={styles.input}
    />
  );
};