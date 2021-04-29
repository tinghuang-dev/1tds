import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import cms, { MODAL } from '../../../../../../lib/cms';

const useCaptainByUserId = (users) => {
  const [captains, setCaptains] = useState();

  const requestListCaptains = useCallback(() => {
    setCaptains();

    const userIds = users.map((row) => row.id);

    cms.readOnly.items
      .all({
        filter: {
          type: MODAL.captain,
          fields: {
            userid: { in: userIds },
          },
        },
      })
      .then(setCaptains);
  }, [users]);

  const captainByUserId = useMemo(() => {
    if (!captains) {
      return null;
    }

    return captains.reduce((acc, cur) => ({
      ...acc,
      [cur.userId]: cur,
    }), {});
  }, [captains]);

  useEffect(() => {
    requestListCaptains();
  }, [requestListCaptains]);

  return captainByUserId;
};

export default useCaptainByUserId;
