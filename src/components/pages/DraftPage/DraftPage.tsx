import { IconButton } from '../../molecules/IconButton';
import { StatusTag } from '../../atoms/StatusTag';
import './DraftPage.scss';
import { LineItems } from '../../organisms/LineItems';
import { PaymentTerms } from '../../organisms/PaymentTerms';
import { Form } from 'react-final-form';
import { FormValues } from '../../../shared/types/types'
import { useCallback, useState } from 'react';

function DraftPage() {
  const [lineItemIDs, setLineItemIDs] = useState<Array<string>>([]);

  const submit = () => {
    console.log('Submitted Succesfully')
  }

  const validate = useCallback((values: FormValues) => {
    const errors: FormValues = {};
    for (let ID of lineItemIDs) {
      const itemFieldID = `item-${ID}`
      if (!values[itemFieldID]) {
        errors[itemFieldID] = 'Required'
      }
      const quantityFieldID = `quantity-${ID}`
      if (!values[quantityFieldID]) {
        errors[quantityFieldID] = 'Required'
      }
      const priceFieldID = `price-${ID}`
      if (!values[priceFieldID]) {
        errors[priceFieldID] = 'Required'
      }
      const amountFieldID = `amount-${ID}`
      if (!values[amountFieldID]) {
        errors[amountFieldID] = 'Required'
      }
    }
    return errors
  }, [lineItemIDs])


  return (
    <div className="p-draft">
      <Form onSubmit={submit} validate={validate} render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className='disp-flex align-center justify-between'>
              <div className='disp-flex align-center'>
                <h1 className="p-draft-header">New draft</h1> <StatusTag isSaved={false} />
              </div>
              <IconButton text='Save' />
            </div>
            <PaymentTerms className="p-draft-payment-terms" />
            <LineItems className='p-draft-line-items' lineItemsDidUpdate={(IDs: Array<string>) => setLineItemIDs(IDs)} />
          </form>
        )
      }} />
    </div>
  );
}

export default DraftPage;
