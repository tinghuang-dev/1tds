import React, { useState } from 'react';
import MessageContext from '../MessageContext';
import Message from './components/Message';

export default function MessageProvider({ children }) {
  const [message, setMessage] = useState();

  const createMessageSetter = (status) => (content) => {
    setMessage({
      status,
      content,
    });

    setTimeout(setMessage, 4000);
  };

  const success = createMessageSetter('success');

  const error = createMessageSetter('error');

  const messageAPI = {
    success,
    error,
  };

  return (
    <MessageContext.Provider value={messageAPI}>
      {children}
      {message && (
        <Message variant={message.status}>
          {message.content}
        </Message>
      )}
    </MessageContext.Provider>
  );
}
