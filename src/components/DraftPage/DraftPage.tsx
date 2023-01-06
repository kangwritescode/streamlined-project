import { IconButton } from '../IconButton';
import { PaymentTerms } from '../PaymentTerms';
import { StatusTag } from '../StatusTag';
import './DraftPage.scss';

function DraftPage() {
  return (
    <div className="p-draft">
      <div className='disp-flex align-center justify-between'>
        <div className='disp-flex align-center'>
          <h1 className="p-draft-header">New draft</h1> <StatusTag isSaved={false} />
        </div>
        <IconButton />
      </div>
      <PaymentTerms />
    </div>
  );
}

export default DraftPage;
