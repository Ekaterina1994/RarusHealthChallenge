import {useState} from "react";
import {Header} from "src/component/header/Header";
import {MessageBlock} from "src/component/messageBlock/MessageBlock";
import {Footer} from "src/component/footer/Footer";
import {MessagesContext, MessagesType, messagesList} from "src/component/messageBlock/MessagesContext";
// import {messagesList} from "src/component/messageBlock/messageList/MessageList";
import styles from "src/App.module.scss";

function App() {
  const [messagesValues, setMessagesValues] = useState<MessagesType>(messagesList);

  return (
    <div className={styles.container}>
      <MessagesContext.Provider value={{messagesValues, setMessagesValues}}>
        <Header />
        <MessageBlock />
        <Footer />
      </MessagesContext.Provider>
    </div>
  );
}

export default App;
