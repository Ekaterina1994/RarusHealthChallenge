import {Header} from "src/component/header/Header";
import {Footer} from "src/component/footer/Footer";
import {MessageBlock} from "src/component/messageBlock/MessageBlock";
import styles from "src/App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <MessageBlock />
      <Footer />
    </div>
  );
}

export default App;
