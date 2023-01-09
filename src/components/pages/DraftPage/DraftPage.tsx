import { IconButton } from '../../molecules/IconButton';
import { StatusTag } from '../../atoms/StatusTag';
import './DraftPage.scss';
import { LineItems } from '../../organisms/LineItems';
import { PaymentTerms } from '../../organisms/PaymentTerms';
import { Form } from 'react-final-form';
import { FormValues } from '../../../shared/types/types'
import { useState } from 'react';

function DraftPage() {

  const submit = () => {
    console.log('Submitted Succesfully')
  }


  return (
    <div className="p-draft">
      <Form onSubmit={submit} validate={values => {
        const errors: FormValues = {};
        if (!values['item-default']) {
          errors['item-default'] = 'Required'
        }
        if (!values['quantity-default']) {
          errors['quantity-default'] = 'Required'
        }
        // if (!values.password) {
        //   errors.password = 'Required'
        // }
        return errors
      }} render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className='disp-flex align-center justify-between'>
              <div className='disp-flex align-center'>
                <h1 className="p-draft-header">New draft</h1> <StatusTag isSaved={false} />
              </div>
              <IconButton text='Save' />
            </div>
            <PaymentTerms className="p-draft-payment-terms" />
            <LineItems className='p-draft-line-items' />
          </form>
        )
      }} />
    </div>
  );
}

export default DraftPage;
