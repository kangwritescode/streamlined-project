import './LineItem.scss';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import { TextFieldInput } from '../../molecules/TextFieldInput';
import { CurrencyInput } from '../../molecules/CurrencyInput';

interface LineItemProps {
  row: number;
};

function LineItem(props: LineItemProps) {
  const { row } = props;
  return (
    <>
      <Field name={`item-${row}`} render={TextFieldInput} />
      <Field name={`description-${row}`} render={TextFieldInput} />
      <Field name={`quantity-${row}`} component={CurrencyInput} isWholeNumber />
      <Field name={`price-${row}`} component={CurrencyInput} />
      <Field name={`amount-${row}`} component={CurrencyInput} />
    </>
  );
}

export default LineItem;
