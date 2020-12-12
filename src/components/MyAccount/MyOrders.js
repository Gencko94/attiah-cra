import { motion } from 'framer-motion';
import React from 'react';
import { useQuery } from 'react-query';
import { BeatLoader } from 'react-spinners';

import { getUserOrders } from '../../Queries/Queries';
import NoOrders from './MyOrders/NoOrders';
import Orders from './MyOrders/Orders';

export default function MyOrders() {
  /**
   * Main Fetch
   */
  const { data, isLoading } = useQuery(
    'userOrders',
    async () => {
      const res = await getUserOrders();

      return res;
    },
    { retry: true }
  );
  if (isLoading)
    return (
      <div className="flex h-full justify-center items-center">
        <BeatLoader size={10} color={'#b72b2b'} />
      </div>
    );
  const containerVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: '-100%',
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-full"
    >
      {data.length === 0 && <NoOrders />}
      {data.length !== 0 && <Orders data={data} />}
    </motion.div>
  );
}
