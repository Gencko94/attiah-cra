import React from 'react';
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { useIntl } from 'react-intl';
import Rating from 'react-rating';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Colors from '../SingleProduct/Colors';
// import Sizes from '../SingleProduct/Sizes';
import { scrollIntoView } from 'scroll-js';
import { DataProvider } from '../../contexts/DataContext';
import { MdLocationOn } from 'react-icons/md';
export default function ItemDescription({
  data,
  handleAddToCart,
  itemInCart,
  itemInWishList,
  quantity,
  setQuantity,
  addToCartButtonLoading,
  handleAddToWishList,
  userId,

  setDetailsTab,
  reviewsLoading,
  ratingCount,
  averageRating,
  handleRemoveFromWishList,
}) {
  const { formatMessage, locale } = useIntl();
  // const [snackBarOpen, setSnackBarOpen] = React.useState(false);
  const { deliveryCountry } = React.useContext(DataProvider);
  const resolvePlural = () => {
    switch (ratingCount) {
      case 1:
        return formatMessage({ id: 'one-rating' });

      case 2:
        return formatMessage({ id: 'two-ratings' });

      case ratingCount > 10:
        return formatMessage({ id: 'more-than-10-ratings' });

      default:
        return formatMessage({ id: 'ratings' });
    }
  };
  const formatDaysPlural = () => {
    switch (parseInt(deliveryCountry.delivery_time)) {
      case 1:
        return formatMessage({ id: 'one-day' });

      case 2:
        return formatMessage({ id: 'two-days' });

      case parseInt(deliveryCountry.delivery_time > 10):
        return formatMessage({ id: 'more-than-10-days' });

      default:
        return formatMessage({ id: 'days' });
    }
  };
  const addToWishList = () => {
    if (!userId) {
      return;
      // setTimeout(() => {
      //   setSnackBarOpen(false);
      // }, 5000);
      // return;
    }
    if (itemInWishList) {
      handleRemoveFromWishList(data.id);
    } else {
      handleAddToWishList();
    }
  };
  const handleSubstractQuantity = () => {
    if (parseInt(quantity) === 1) {
      return;
    }
    setQuantity(parseInt(quantity) - 1);
  };
  const handleAddQuantity = () => {
    setQuantity(parseInt(quantity) + 1);
  };
  const handleChangeQuantity = e => {
    if (e.target.value < 1) {
      return;
    } else {
      setQuantity(e.target.value);
    }
  };
  return (
    <div className="mb-3">
      <h1 className="font-semibold text-xl">
        {data.translation[locale].title}
      </h1>
      <div className="flex items-center ">
        <Rating
          initialRating={averageRating}
          emptySymbol={<AiOutlineStar className="text-red-700" />}
          fullSymbol={<AiFillStar className="text-red-700" />}
          className="pt-1"
          readonly
        />
        <div className="flex items-center mb-1">
          <div className="flex items-center text-gray-600 text-sm">
            <h1 className="text-gray-600 text-sm">
              {formatMessage({ id: 'model-number' })} :
            </h1>
            <h1 className="mx-1">{data.new_variation_addons.id}</h1>
          </div>
          {!reviewsLoading && ratingCount !== 0 && (
            <div
              onClick={() => {
                scrollIntoView(document.getElementById('details'));
                setDetailsTab(1);
              }}
              className="text-sm mx-2 flex items-center"
            >
              <div className="rounded p-1 text-xs bg-green-700 text-main-text cursor-pointer">
                {averageRating}
              </div>

              <div className="text-sm text-gray-600 flex items-center mx-1  hover:underline cursor-pointer">
                <h1 className="mx-1">
                  ({ratingCount > 2 && ratingCount} {resolvePlural()})
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>

      <h1 className=" font-semibold mb-1 text-green-600">
        {formatMessage({ id: 'in-stock' })}
      </h1>
      <h1 className="text-sm   mb-1 text-gray-700">
        {formatMessage({ id: 'model-number' })} : {data.simple_addons.sku}
      </h1>

      <hr />
      <div className=" mb-1 text-sm  font-bold">
        {data.simple_addons.promotion_price && (
          <div className="flex flex-wrap items-center">
            <h1 className=" ">{formatMessage({ id: 'price-before' })} :</h1>
            <h1 className=" text-base italic mx-2  line-through text-gray-700">
              {data.simple_addons.promotion_price} KD
            </h1>
          </div>
        )}
        <div className="flex flex-wrap items-center">
          <h1 className="">
            {data.simple_addons.promotion_price
              ? formatMessage({ id: 'price-now' })
              : formatMessage({ id: 'price' })}{' '}
            :
          </h1>
          <h1 className=" text-xl mx-2 text-red-700">
            {data.simple_addons.price} KD
          </h1>
          <h1 className=" font-normal  text-gray-700 uppercase">
            ({formatMessage({ id: 'vat-inclusive' })})
          </h1>
        </div>

        <h1 className="">
          {formatMessage({ id: 'you-save' })} :{' '}
          <span className=" text-xl  text-main-color">18%</span>{' '}
        </h1>
      </div>
      <div className="mb-2">
        <div className="flex justify-between items-center font-semibold  ">
          <div className="flex items-center ">
            <div className="flex items-center">
              <h1>{formatMessage({ id: 'deliver-to' })}</h1>
              <h1 className="uppercase mx-2 text-sm">
                {deliveryCountry?.translation[locale].name}
              </h1>
              <MdLocationOn className="w-5 h-5 text-main-color " />
            </div>
          </div>
          <button
            className={`px-2 text-xs uppercase bg-main-color text-main-text rounded`}
          >
            {formatMessage({ id: 'change' })}
          </button>
        </div>
        <div className="flex items-center">
          <h1 className="text-gray-700">
            {formatMessage({ id: 'estimated-delivery' })} :
          </h1>
          <h1 className="mx-1">
            {deliveryCountry?.delivery_time > 2 &&
              deliveryCountry.delivery_time}
            <span className="mx-1">{formatDaysPlural()}</span>
          </h1>
        </div>
      </div>

      <div className="relative flex items-center flex-wrap">
        <div className=" flex items-center justify-center mx-3">
          <button onClick={handleSubstractQuantity} className="p-1">
            <AiOutlineMinusCircle
              className={`w-6 h-6 ${
                quantity === 1 ? 'text-gray-700' : 'text-blue-700'
              }`}
            />
          </button>
          <input
            value={quantity}
            onChange={handleChangeQuantity}
            className="mx-1 px-2 py-1 border rounded"
            style={{ maxWidth: '40px', textAlign: 'center' }}
          />
          <button onClick={handleAddQuantity} className="p-1">
            <AiOutlinePlusCircle className={`w-6 h-6 text-blue-700`} />
          </button>
        </div>

        <button
          onClick={() => {
            if (itemInCart) {
              return;
            } else {
              handleAddToCart();
            }
          }}
          className={`${
            addToCartButtonLoading ? 'bg-gray-300' : 'bg-green-700'
          } text-main-text text-sm p-2 mx-1 rounded uppercase whitespace-no-wrap flex-1 flex items-center justify-center font-semibold`}
        >
          {addToCartButtonLoading ? (
            <Loader
              type="ThreeDots"
              color="#b72b2b"
              height={25}
              width={25}
              visible={addToCartButtonLoading}
            />
          ) : itemInCart ? (
            <>
              <span>
                <TiShoppingCart className="w-25p h-25p " />
              </span>
              <h1 className="mx-1 whitespace-no-wrap">
                {formatMessage({ id: 'added-to-cart' })}
              </h1>
            </>
          ) : (
            <>
              <span>
                <TiShoppingCart className="w-25p h-25p" />
              </span>
              <h1 className="mx-2">{formatMessage({ id: 'add-to-cart' })}</h1>
            </>
          )}
        </button>
        <button
          onClick={addToWishList}
          className={`
              border
            text-sm p-2 rounded-full uppercase bg-gray-100  flex items-center justify-center font-semibold`}
        >
          {itemInWishList ? (
            <AiFillHeart
              className={`w-25p h-25p hover:scale-125 text-main-color  transition-all duration-150 `}
            />
          ) : (
            <AiOutlineHeart
              className={`w-25p h-25p hover:scale-125 text-main-color  transition-all duration-150 `}
            />
          )}
        </button>
      </div>
    </div>
  );
}
