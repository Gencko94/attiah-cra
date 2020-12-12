import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import { queryCache, useQuery } from 'react-query';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import LayoutMobile from '../components/LayoutMobile';
import NoViewedItems from '../components/ViewedItems/NoViewedItems';
import ViewedItemMobile from '../components/ViewedItems/ViewedItemMobile';
import { getVisitedItems } from '../Queries/Queries';

export default function ViewedItemsMobile() {
  const { formatMessage } = useIntl();

  /**
   * Main Fetch
   */
  const { data, isLoading } = useQuery('viewedItems', getVisitedItems, {
    retry: true,
    refetchOnWindowFocus: false,
  });

  const handleRemoveItem = id => {
    let localVisited = localStorage.getItem('visitedItems');
    let parsed = JSON.parse(localVisited);
    localVisited = parsed.filter(i => {
      return i.id !== id.toString();
    });
    console.log(
      parsed.filter(i => {
        console.log(i.id, 'i', id, 'id');
        return i.id !== id;
      })
    );
    localStorage.setItem('visitedItems', JSON.stringify(localVisited));

    queryCache.setQueryData('viewedItems', prev => {
      return prev.filter(i => i.id !== id.toString());
    });
  };

  return (
    <LayoutMobile>
      <Helmet>
        <title>Viewed Items | MRG</title>
      </Helmet>

      {isLoading && (
        <div className="min-h-screen flex items-center justify-center">
          <Loader
            type="ThreeDots"
            color="#b72b2b"
            height={40}
            width={40}
            visible={isLoading}
          />
        </div>
      )}
      {!isLoading && (
        <div className=" p-2 min-h-screen">
          <h1 className=" text-xl font-semibold">
            {formatMessage({ id: 'your-viewed-items' })}
          </h1>
          <hr className="my-2" />
          <AnimateSharedLayout>
            <motion.div layout className="viewed-items-grid__mobile">
              <AnimatePresence>
                {data.length !== 0 &&
                  data.map(item => {
                    return (
                      <ViewedItemMobile
                        key={item.id}
                        item={item}
                        handleRemoveItem={handleRemoveItem}
                      />
                    );
                  })}
                {data.length === 0 && <NoViewedItems key="No Viewed Items" />}
              </AnimatePresence>
            </motion.div>
          </AnimateSharedLayout>
        </div>
      )}
    </LayoutMobile>
  );
}
