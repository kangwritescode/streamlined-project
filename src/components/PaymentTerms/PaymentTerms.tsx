import './PaymentTerms.scss';
import { Card } from '../Card';
import { CircleIcon } from '../CircleIcon';
import classNames from 'classnames';
import { SelectDropdown } from '../SelectDropdown';
import { DatePicker } from '../DatePicker';
import { Term } from '../../shared/types/types';
import { useState } from 'react';

interface PaymentTermsProps {
  className?: string;
}

function PaymentTerms({ className }: PaymentTermsProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChangeTerm = (term: Term) => {
    const showDatePicker = term.name === "Custom date";
    setShowDatePicker(showDatePicker)
  }
  return (
    <Card className={classNames(className, 'disp-flex align-center justify-between')}>
      <div className='o-payment-terms-header-wrapper disp-flex align-center'>
        <CircleIcon className='o-payment-terms-circle-icon' />
        <h3 className='o-payment-terms-header'>Payment terms</h3>
      </div>
      <SelectDropdown className='o-payment-terms-select-dropdown' onChange={onChangeTerm} />
      {showDatePicker && <DatePicker />}
    </Card>
  );
}

export default PaymentTerms;
