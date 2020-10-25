import React from 'react';
import Address from '../components/Cart/GuestCheckout/Address';
import OrderPlaced from '../components/Cart/GuestCheckout/OrderPlaced';
import PersonalInformation from '../components/Cart/GuestCheckout/PersonalInformation';
import Stepper from '../components/Cart/Stepper';

export default function GuestCheckOutMobile() {
  const [selectedStep, setSelectedStep] = React.useState(2);
  const [stepDone, setStepDone] = React.useState({
    0: false,
    1: false,
    2: false,
  });
  const handleStepBack = () => {
    if (selectedStep === 0) {
      return;
    } else {
      setSelectedStep(selectedStep - 1);
      setStepDone({
        ...stepDone,
        [selectedStep - 1]: false,
      });
    }
  };
  const handleStepForward = () => {
    if (selectedStep === 2) {
      return;
    } else {
      setSelectedStep(selectedStep + 1);
      setStepDone({
        ...stepDone,
        [selectedStep]: true,
      });
    }
  };
  return (
    <div className="">
      <Stepper selectedStep={selectedStep} stepDone={stepDone} />
      <div className="mb-3" style={{ minHeight: 'calc(100vh - 180px)' }}>
        {selectedStep === 0 && (
          <Address handleStepForward={handleStepForward} />
        )}
        {selectedStep === 1 && (
          <PersonalInformation
            handleStepForward={handleStepForward}
            handleStepBack={handleStepBack}
          />
        )}
        {selectedStep === 2 && (
          <OrderPlaced
            handleStepForward={handleStepForward}
            handleStepBack={handleStepBack}
          />
        )}
      </div>
    </div>
  );
}