import './PaymentTerms.scss';
import { Card } from '../Card';
import { CircleIcon } from '../CircleIcon';

interface PaymentTermsProps { }

function PaymentTerms(props: PaymentTermsProps) {
  return (
    <Card className='disp-flex align-center justify-between'>
      <div className='disp-flex align-center'>
        <CircleIcon className='o-payment-terms-circle-icon' />
        <h3 className='o-payment-terms-header'>Payment terms</h3>
      </div>
      <input value={"Net 30"} />
    </Card>
  );
}

export default PaymentTerms;
