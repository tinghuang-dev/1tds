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

    const captainIdByProductId = captains.reduce((acc, cur) => {
      const curProducts = cur.products.reduce((accObj, curProduct) => ({
        ...accObj,
        [curProduct]: cur.id,
      }), {});

      return {
        ...acc,
        ...curProducts,
      };
    }, {});

    const productIds = Object.keys(captainIdByProductId);

    cms.readOnly
      .items
      .all({
        'filter[ids]': productIds.join(),
      })
      .then((products) => products.reduce((acc, cur) => {
        const curCaptainId = captainIdByProductId[cur.id];

        if (!acc[curCaptainId]) {
          return {
            ...acc,
            [curCaptainId]: [cur],
          };
        }

        const productsByCaptainId = [...acc[curCaptainId]];

        productsByCaptainId.push(cur);
        return {
          ...acc,
          [curCaptainId]: productsByCaptainId,
        };
      }, {}))
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
