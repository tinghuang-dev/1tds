import { useContext } from 'react';
import MessageContext from '../../app/MessageContext/MessageContext';

export default function useMessage() {
  const messageAPI = useContext(MessageContext);

  return messageAPI;
}
