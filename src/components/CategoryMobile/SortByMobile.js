import React from 'react';
import { CgRadioCheck, CgRadioChecked } from 'react-icons/cg';
import { useIntl } from 'react-intl';
import { motion } from 'framer-motion';

export default function SortByMobile({
  sortBy,
  handleSortByChange,
  handleClose,
}) {
  const { formatMessage } = useIntl();
  const sortByOptions = React.useMemo(
    () => [
      { value: 'newest', label: 'Newest' },
      { label: 'Price (Low to High)', value: 'price-asc' },
      { label: 'Price (High to Low)', value: 'price-desc' },
    ],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      {sortByOptions.map(option => {
        return (
          <button
            key={option.value}
            onClick={() => {
              handleSortByChange(option);
              handleClose();
            }}
            className={`px-3 py-2 font-semibold flex items-center justify-between ${
              sortBy.label === option.label && 'bg-gray-400'
            }  w-full`}
          >
            <span>{formatMessage({ id: option.label })}</span>
            {sortBy.label === option.label ? (
              <CgRadioChecked />
            ) : (
              <CgRadioCheck />
            )}
          </button>
        );
      })}
    </motion.div>
  );
}
