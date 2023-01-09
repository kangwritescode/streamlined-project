import './LineItem.scss';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import { TextFieldInput } from '../../molecules/TextFieldInput';
import { CurrencyInput } from '../../molecules/CurrencyInput';
import xSvg from "./x.svg";

interface LineItemProps {
  uniqueID: string;
  onRemove?: (nthRow: string) => void;
};

function LineItem(props: LineItemProps) {
  const { onRemove, uniqueID } = props;
  return (
    <div className='o-line-item disp-flex align-baseline'>
      <Field className='o-line-item-field' name={`item-${uniqueID}`} render={TextFieldInput} required />
      <Field className='o-line-item-field' name={`description-${uniqueID}`} render={TextFieldInput} />
      <Field className='o-line-item-field' name={`quantity-${uniqueID}`} component={CurrencyInput} isWholeNumber required />
      <Field className='o-line-item-field' name={`price-${uniqueID}`} component={CurrencyInput} required />
      <Field className='o-line-item-field' name={`amount-${uniqueID}`} component={CurrencyInput} required />
      {onRemove && (
        <button className='o-line-item-remove-btn' onClick={() => onRemove(uniqueID)}>
          <img height={8} src={xSvg} />
        </button>
      )}
    </div>
  );
}

export default LineItem;
