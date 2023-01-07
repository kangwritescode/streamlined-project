import { IconButton } from '../../molecules/IconButton';
import { StatusTag } from '../../atoms/StatusTag';
import './DraftPage.scss';
import { LineItems } from '../../organisms/LineItems';
import { PaymentTerms } from '../../organisms/PaymentTerms';
import { Form } from 'react-final-form';

function DraftPage() {
  return (
    <div className="p-draft">
      <div className='disp-flex align-center justify-between'>
        <div className='disp-flex align-center'>
          <h1 className="p-draft-header">New draft</h1> <StatusTag isSaved={false} />
        </div>
        <IconButton />
      </div>
      <Form onSubmit={() => undefined} render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <PaymentTerms className="p-draft-payment-terms" />
            <LineItems className='p-draft-line-items' />
          </form>
        )
      }} />
    </div>
  );
}

export default DraftPage;
