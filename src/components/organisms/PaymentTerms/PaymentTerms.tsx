import './PaymentTerms.scss';
import { Card } from '../../atoms/Card';
import classNames from 'classnames';
import { SelectDropdown } from '../SelectDropdown';
import { DatePicker } from '../../molecules/DatePicker';
import { TermOption } from '../../../shared/types/types';
import { useEffect, useState } from 'react';
import { IconHeader } from '../../molecules/IconHeader';
import { Field } from 'react-final-form';

interface PaymentTermsProps {
  className?: string;
  updateTerm?: (term: number) => void;
}

function PaymentTerms(props: PaymentTermsProps) {
  const { className, updateTerm } = props;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [term, setTerm] = useState<TermOption>()

  const getTermValue = (termString: TermOption) => {
    switch (termString.name) {
      case 'Net 7':
        return 7;
      case 'Net 15':
        return 15;
      case 'Net 30 (Default)':
        return 30;
      case 'Net 60':
        return 60;
      case 'Custom date':
        return 0;
      default:
        return 0;
    }
  }

  useEffect(() => {
    if (term && updateTerm) {
      setShowDatePicker(term.name === "Custom date")
      const termValue = getTermValue(term);
      updateTerm(termValue)
    }
  }, [term])

  return (
    <Card className={classNames(className, 'disp-flex align-center justify-between')}>
      <IconHeader headerText="Payment terms" />
      <SelectDropdown className='o-payment-terms-select-dropdown' onChange={(termOption: TermOption) => setTerm(termOption)} />
      {showDatePicker && <Field name='due-date' component={DatePicker} />}
    </Card>
  );
}

export default PaymentTerms;
