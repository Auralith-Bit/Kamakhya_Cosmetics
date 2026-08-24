import React from 'react';
import BusinessContactCard from './BusinessContactCard';
import DeliveryDetailsCard from './DeliveryDetailsCard';
import OrderSummaryCard from './OrderSummaryCard';

const CheckoutBody = () => {
  return (
    <section className="w-full bg-[#FAF6F1] px-[125px] py-[60px] max-lg:px-8 max-lg:py-10 max-sm:px-5 max-sm:py-8">
      <div className="mx-auto max-w-[1280px] grid grid-cols-[3fr_2fr] gap-8 items-start max-lg:grid-cols-1">
        <div className="flex flex-col gap-6">
          <BusinessContactCard />
          <DeliveryDetailsCard />
        </div>

        <div className="max-lg:order-first lg:sticky lg:top-28">
          <OrderSummaryCard />
        </div>
      </div>
    </section>
  );
};

export default CheckoutBody;
