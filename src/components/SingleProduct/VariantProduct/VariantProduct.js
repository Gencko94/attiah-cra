import React from 'react';
import { useParams } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext';
import { CartAndWishlistProvider } from '../../../contexts/CartAndWishlistContext';
import { DataProvider } from '../../../contexts/DataContext';
import VariantImageZoom from './VariantImageZoom';
import VariantMiddleSection from './VariantMiddleSection';
import VariantRightSection from './VariantRightSection';

export default function VariantProduct({
  data,
  reviews,
  reviewsLoading,
  setSideMenuOpen,
  setDetailsTab,
}) {
  const { addons } = useParams();
  const {
    addToCartMutation,
    addToWishListMutation,
    addToGuestCartMutation,
  } = React.useContext(CartAndWishlistProvider);
  const { deliveryCountry } = React.useContext(DataProvider);
  const { userId } = React.useContext(AuthProvider);
  const [addToCartButtonLoading, setAddToCartButtonLoading] = React.useState(
    false
  );
  const [itemInCart, setItemInCart] = React.useState(false);
  const [itemInWishList, setItemInWishList] = React.useState(false);
  const [
    addToWishListButtonLoading,
    setAddToWishListButtonLoading,
  ] = React.useState(false);

  const [selectedVariation, setSelectedVariant] = React.useState(() => {
    if (!addons) {
      return Object.keys(data.new_variation_addons)[0];
    } else {
      return addons;
    }
  });
  const [selectedOption, setSelectedOption] = React.useState(() => {
    let keys = {};
    Object.keys(data.new_variation_addons).forEach(variation => {
      keys[variation] = 0;
    });
    return keys;
  });
  const handleAddToCart = async quantity => {
    setAddToCartButtonLoading(true);
    if (userId) {
      try {
        const newItem = {
          id: data.id,
          quantity,
          variation: {
            id: data.new_variation_addons?.[selectedVariation].id,
            item_id:
              data.new_variation_addons?.[selectedVariation].addon_item_id,
          },
          option: {
            id:
              data.new_variation_addons?.[selectedVariation].options?.[
                selectedOption[selectedVariation]
              ].id,
            item_id:
              data.new_variation_addons?.[selectedVariation].options?.[
                selectedOption[selectedVariation]
              ].addon_item_id,
          },
        };
        await addToCartMutation({ newItem, userId, deliveryCountry });
        setAddToCartButtonLoading(false);
        setSideMenuOpen(true);
        setItemInCart(true);
      } catch (error) {
        // console.clear();

        console.log(error);
        console.log(error.response);
        // if (error.response.data.message === 'Item founded on the Cart') {
        //   setItemInCart(true);
        // }
        setAddToCartButtonLoading(false);
      }
    } else {
      try {
        const price = data.new_variation_addons[selectedVariation].options
          ? data.new_variation_addons[selectedVariation].options[
              selectedOption[selectedVariation]
            ].promotion_price
            ? data.new_variation_addons[selectedVariation].options[
                selectedOption[selectedVariation]
              ].promotion_price
            : data.new_variation_addons[selectedVariation].options[
                selectedOption[selectedVariation]
              ].price
          : data.new_variation_addons[selectedVariation].promotion_price
          ? data.new_variation_addons[selectedVariation].promotion_price
          : data.new_variation_addons[selectedVariation].price;
        const sku = data.new_variation_addons[selectedVariation].options
          ? data.new_variation_addons[selectedVariation].options[
              selectedOption[selectedVariation]
            ].sku
          : data.new_variation_addons[selectedVariation].sku;
        const newItem = {
          id: data.id,
          quantity,
          variation: {
            id: data.new_variation_addons?.[selectedVariation].id,
            item_id:
              data.new_variation_addons?.[selectedVariation].addon_item_id,
          },
          option: {
            id:
              data.new_variation_addons?.[selectedVariation].options?.[
                selectedOption[selectedVariation]
              ].id,
            item_id:
              data.new_variation_addons?.[selectedVariation].options?.[
                selectedOption[selectedVariation]
              ].addon_item_id,
          },
          price,
          sku,
        };

        await addToGuestCartMutation({ newItem, deliveryCountry });
        setAddToCartButtonLoading(false);
        setSideMenuOpen(true);
        setItemInCart(true);
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  const handleAddToWishList = async () => {
    setAddToWishListButtonLoading(true);
    try {
      await addToWishListMutation({ id: data.id, userId });
      setAddToWishListButtonLoading(false);
      setItemInWishList(true);
    } catch (error) {
      console.clear();
      if (error.response.data.message === 'Item founded on the Wishlist') {
        setItemInWishList(true);
      }
      setAddToWishListButtonLoading(false);
      console.log(error.response);
    }
  };

  return (
    <div className="single-product__container-desktop">
      <div>
        <VariantImageZoom
          data={data}
          selectedVariation={selectedVariation}
          selectedOption={selectedOption}
        />
      </div>

      <VariantMiddleSection
        selectedVariation={selectedVariation}
        data={data}
        deliveryCountry={deliveryCountry}
        setSelectedVariant={setSelectedVariant}
        reviewsLoading={reviewsLoading}
        ratingCount={reviews?.ratingCount}
        averageRating={reviews?.averageRating}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        setDetailsTab={setDetailsTab}
      />
      <VariantRightSection
        handleAddToCart={handleAddToCart}
        handleAddToWishList={handleAddToWishList}
        addToCartButtonLoading={addToCartButtonLoading}
        addToWishListButtonLoading={addToWishListButtonLoading}
        itemInCart={itemInCart}
        itemInWishList={itemInWishList}
        userId={userId}
      />
    </div>
  );
}