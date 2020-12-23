import React from 'react';
import { motion } from 'framer-motion';
import PriceFilterMobile from './PriceFilterMobile';
import BrandsFilterMobile from './BrandsFilterMobile';
export default function FiltersMobile({
  handleClose,
  brandFilters,
  handleBrandChange,
  handlePriceChange,
  priceFilters,
  products,
  productsLoading,
  handleChangePriceInput,
  handleSubmitPrice,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      {!productsLoading && (
        <BrandsFilterMobile
          products={products}
          brandFilters={brandFilters}
          handleBrandChange={handleBrandChange}
          handleClose={handleClose}
        />
      )}
      {/* Price */}
      {!productsLoading && (
        <PriceFilterMobile
          products={products}
          priceFilters={priceFilters}
          handlePriceChange={handlePriceChange}
          handleChangePriceInput={handleChangePriceInput}
          handleSubmitPrice={handleSubmitPrice}
          handleClose={handleClose}
        />
      )}
    </motion.div>
  );
}
