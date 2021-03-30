import { useState } from 'react';

export default function useApi(onRequest, { onSuccess, onFail }) {
  const [requesting, setRequesting] = useState(false);

  const sendRequest = async (params) => {
    setRequesting(true);

    try {
      const response = await onRequest(params);

      setRequesting(false);

      onSuccess(response);
    } catch (error) {
      setRequesting(false);

      if (onFail) {
        onFail(error, params);
      }
    }
  };

  const api = {
    requesting,
    sendRequest,
  };

  return api;
}
