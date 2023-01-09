import { IconButton } from '../../molecules/IconButton';
import { StatusTag } from '../../atoms/StatusTag';
import './DraftPage.scss';
import { LineItems } from '../../organisms/LineItems';
import { PaymentTerms } from '../../organisms/PaymentTerms';
import { Form } from 'react-final-form';
import { FormValues } from '../../../shared/types/types'
import { useCallback, useState } from 'react';

function DraftPage() {
  const [items, setItems] = useState<Array<string>>([]);
  const [term, setTerm] = useState(7)

  const submit = (values: FormValues) => {

    let submissionData: any = {}
    submissionData['line_items'] = Object.values(items)
    let discountPercentage = 0;
    let isPercentage = values.discount && values.discount.slice(-1) === '%';
    if (isPercentage) {
      discountPercentage = Number(values.discount.slice(0, -2)) * .01;
    }
    submissionData["discount_type"] = values.discount ? isPercentage ? 'percent' : 'dollar' : null;
    submissionData["discount_percentage"] = isPercentage ? discountPercentage : null;
    submissionData["discount_amount"] = isPercentage ? null : values.discount;
    submissionData["shipping_amount"] = values.shipping || null
    submissionData["tax_amount"] = values.tax || null
    submissionData["payment_terms"] = term || null;
    submissionData["due_date"] = values['due-date'] || null;

    alert(JSON.stringify(submissionData, null, 2))
  }

  const validate = useCallback((values: FormValues) => {
    const errors: FormValues = {};
    for (let ID of Object.keys(items)) {
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
      if (!term && !values['due-date']) {
        errors['due-date'] = 'Required'
      }
    }
    return errors
  }, [items, term])

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
            <PaymentTerms className="p-draft-payment-terms" updateTerm={(term: number) => setTerm(term)} />
            <LineItems className='p-draft-line-items' lineItemsDidUpdate={(items: any) => setItems(items)} />
          </form>
        )
      }} />
    </div>
  );
}

export default DraftPage;
