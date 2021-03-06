import React from 'react';
import { useIntl } from 'react-intl';
import { NavLink, useRouteMatch } from 'react-router-dom';

export default function MobileTabs() {
  const { formatMessage } = useIntl();
  const { url } = useRouteMatch();
  const options = [
    { url: '', name: 'my-profile' },
    { url: '/addresses', name: 'my-addresses' },
    { url: '/orders', name: 'my-orders' },
  ];

  return (
    <div className="overflow-hidden">
      <ul className=" mobile-tabs overflow-x-scroll  whitespace-no-wrap bg-red-100 p-2">
        {options.map(option => {
          return (
            <li key={option.name} className="inline-block mx-1  ">
              <NavLink
                exact
                className="w-full font-semibold p-3 rounded inline-block text-center "
                activeClassName={`font-bold bg-main-color text-main-text `}
                to={`${url}${option.url}`}
              >
                {formatMessage({ id: option.name })}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
