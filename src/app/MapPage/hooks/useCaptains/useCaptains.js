import { useEffect, useState } from 'react';
import cms, { MODAL } from '../../../../lib/cms';

const useCaptains = () => {
  const [captains, setCaptains] = useState();
  const [enrichedCaptains, setEnrichedCaptains] = useState();

  useEffect(() => {
    cms.readOnly
      .items
      .all({
        filter: {
          type: MODAL.captain,
        },
      })
      .then(setCaptains);
  }, []);

  useEffect(() => {
    setEnrichedCaptains(captains);

    if (!captains) {
      return;
    }

    const captainIdByProductId = captains.reduce((acc, cur) => ({
      ...acc,
      [cur.products[0]]: cur.id,
    }), {});
    const productIds = Object.keys(captainIdByProductId);

    cms.readOnly
      .items
      .all({
        'filter[ids]': productIds.join(),
      })
      .then((products) => products.reduce((acc, cur) => ({
        ...acc,
        [captainIdByProductId[cur.id]]: cur,
      }), {}))
      .then((productByCaptainId) => {
        setEnrichedCaptains((cs) => cs.map((c) => ({
          ...c,
          leadingProduct: productByCaptainId[c.id],
        })));
      });
  }, [captains]);

  return enrichedCaptains;
};

export default useCaptains;
