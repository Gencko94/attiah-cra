import React from 'react';
import Helmet from 'react-helmet';
import SideTabs from '../components/MyAccount/SideTabs';
import MyProfile from '../components/MyAccount/MyProfile';
import MyAddresses from '../components/MyAccount/MyAddresses';
import MyOrders from '../components/MyAccount/MyOrders';
import PaymentDetails from '../components/MyAccount/PaymentDetails';
import { DataProvider } from '../contexts/DataContext';
import Layout from '../components/Layout';

export default function MyAccount({
  match: {
    params: { page },
  },
}) {
  const { isLightTheme } = React.useContext(DataProvider);
  const mapPageToIndex = {
    profile: 0,
    addresses: 1,
    orders: 2,
    payment: 3,
    order_history: 4,
  };
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  React.useEffect(() => {
    setSelectedIndex(() => {
      if (page) {
        return mapPageToIndex[page];
      } else {
        return 0;
      }
    });
  }, [mapPageToIndex, page]);
  return (
    <Layout>
      <Helmet>
        <title>My Account | MRG</title>
      </Helmet>
      <div
        className={`mb-4 pt-2 px-8 ${
          isLightTheme
            ? 'bg-nav-cat-light text-body-text-light'
            : 'bg-body-dark text-body-text-dark'
        }`}
      >
        <div className="myaccount__grid ">
          <SideTabs
            isLightTheme={isLightTheme}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          {selectedIndex === 0 && <MyProfile isLightTheme={isLightTheme} />}
          {selectedIndex === 1 && <MyAddresses isLightTheme={isLightTheme} />}
          {selectedIndex === 2 && <MyOrders isLightTheme={isLightTheme} />}
          {selectedIndex === 3 && (
            <PaymentDetails isLightTheme={isLightTheme} />
          )}
        </div>
      </div>
    </Layout>
  );
}
