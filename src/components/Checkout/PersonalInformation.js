import React from 'react';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import { useIntl } from 'react-intl';
import knet from '../../assets/paymentLogos/knet.png';
import mastercard from '../../assets/paymentLogos/mastercard.png';
import visa from '../../assets/paymentLogos/visa.png';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
export default function PersonalInformation({
  handleStepBack,
  selectedAddress,
  personalInfo,
  setPersonalInfo,
  paymentMethod,
  setPaymentMethod,
  handleCheckout,
  checkoutLoading,
}) {
  const { formatMessage } = useIntl();

  const paymentMethodOptions = [
    { name: 'K-net', photo: knet },
    { name: 'Visa ', photo: visa },
    { name: 'Master Card', photo: mastercard },
  ];

  const handleInputChange = (e, type) => {
    setPersonalInfo({
      ...personalInfo,
      [type]: e.target.value,
    });
  };
  const handlePaymentChange = method => {
    setPaymentMethod(method);
  };
  return (
    <div className="h-full  ">
      <div className=" mb-2 border rounded-lg h-full  ">
        <div className="quick-checkout-personal-info__container p-2">
          <div className="flex flex-col justify-center font-semibold text-sm  ">
            <div className=" mb-4 relative  ">
              <h1>{formatMessage({ id: 'fullname-label' })}</h1>
              <input
                className=" mt-1 w-full rounded border   p-2"
                type="text"
                value={personalInfo.fullName}
                onChange={e => handleInputChange(e, 'fullName')}
              />
            </div>

            <div className="relative  mb-4 ">
              <h1>{formatMessage({ id: 'phone-label' })}</h1>
              <input
                className=" mt-1 w-full rounded border  p-2  "
                type="text"
                value={personalInfo.phoneNumber}
                onChange={e => handleInputChange(e, 'phoneNumber')}
              />
            </div>
            <div className="relative  mb-4 ">
              <h1>{formatMessage({ id: 'selected-address' })}</h1>
              <div className="my-1 p-2 border rounded-lg flex">
                <div className="flex-1">
                  <div className="">
                    <h1 className="text-gray-600">
                      {formatMessage({
                        id:
                          'maps-detailed-address-street_neighborhood_governate',
                      })}
                      :
                    </h1>
                    <h1>{selectedAddress.marked_address}</h1>
                  </div>
                  <div className="">
                    <h1 className="text-gray-600">
                      {formatMessage({
                        id: 'maps-detailed-address-apartment',
                      })}
                      :
                    </h1>
                    <h1>{selectedAddress.apartment_house_number}</h1>
                  </div>
                  <div className="">
                    <h1 className="text-gray-600">
                      {formatMessage({
                        id: 'maps-detailed-address-building',
                      })}{' '}
                      :{' '}
                    </h1>
                    <h1>{selectedAddress.building_tower_number}</h1>
                  </div>
                  <div className="">
                    <h1 className="text-gray-600">
                      {formatMessage({
                        id: 'maps-details-extra-details',
                      })}{' '}
                      :{' '}
                    </h1>
                    <h1>{selectedAddress.addition_direction || ' - '}</h1>
                  </div>
                </div>
                <div>
                  <img
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${selectedAddress.lat},${selectedAddress.lng}&zoom=15&size=200x200&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                    alt="thumbnail"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="font-semibold self-start">
            <div className=" mb-4 relative  ">
              <h1 className="">
                {formatMessage({ id: 'select-payment-method' })}
              </h1>
              <div className="mt-1">
                <div className="flex flex-col ">
                  {paymentMethodOptions.map((option, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => handlePaymentChange(option.name)}
                        className={` ${
                          paymentMethod === option.name &&
                          'bg-btn-primary-light text-btn-secondary-light border-btn-primary-light'
                        } mb-3 flex border items-center justify-start rounded p-2 font-semibold`}
                      >
                        <img
                          className=""
                          src={option.photo}
                          alt={option.name}
                        />
                        <div className="flex-1 mx-3 text-left">
                          {option.name}
                        </div>
                        <div>
                          {paymentMethod === option.name ? (
                            <BiRadioCircleMarked className="w-6 h-6 text-btn-secondary-light" />
                          ) : (
                            <BiRadioCircle className="w-6 h-6 text-btn-primary-light" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2" />

        <div className="flex justify-end items-center p-2">
          <button
            className="px-3 py-1 bg-main-color text-main-text rounded font-semibold"
            onClick={handleStepBack}
          >
            {formatMessage({ id: 'btn-back-to-addresses' })}
          </button>
          <button
            className={`
              
             flex items-center justify-center bg-main-color text-main-text px-3 py-1 mx-3  rounded font-semibold`}
            onClick={handleCheckout}
          >
            {checkoutLoading ? (
              <Loader
                type="ThreeDots"
                color="#fff"
                height={24}
                width={24}
                visible={true}
              />
            ) : (
              formatMessage({ id: 'checkout' })
            )}
          </button>
        </div>
      </div>
    </div>
  );
}