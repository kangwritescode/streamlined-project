import './PaymentTerms.scss';
import { Card } from '../../atoms/Card';
import classNames from 'classnames';
import { SelectDropdown } from '../SelectDropdown';
import { DatePicker } from '../../molecules/DatePicker';
import { Term } from '../../../shared/types/types';
import { useState } from 'react';
import { IconHeader } from '../../molecules/IconHeader';
import { Icon } from '../../../shared/types/types';

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
      <IconHeader headerText="Payment terms" />
      <SelectDropdown className='o-payment-terms-select-dropdown' onChange={onChangeTerm} />
      {showDatePicker && <DatePicker />}
    </Card>
  );
}

export default PaymentTerms;
