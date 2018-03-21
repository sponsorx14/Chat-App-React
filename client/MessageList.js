import React from 'react';
import styles from './MessageList.css';

const Message = props => (
  <div>
    <p className={styles.Message}>
      <strong><span className={styles.UserName}>{props.from}: </span></strong>
      <span>{props.text}</span>
    </p>
  </div>
);

const MessageList = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, i) => {
        return (
          <Message
            className={styles.Message}
            key={i}
            from={message.from}
            text={message.text}
          />
        );
      })
    }
  </div>
);

export default MessageList;
