import './LineItem.scss';
import classNames from 'classnames';
import { Field, useField } from 'react-final-form';
import { TextFieldInput } from '../../molecules/TextFieldInput';
import { CurrencyInput } from '../../molecules/CurrencyInput';
import xSvg from "./x.svg";
import { useEffect, useState } from 'react';

interface LineItemProps {
  uniqueID: string;
  onRemove?: (nthRow: string) => void;
  onAmountDidChange?: (uniqueId: string, number: number) => void;
};

function LineItem(props: LineItemProps) {
  const { onAmountDidChange, onRemove, uniqueID } = props;
  const [amountValue, setAmountValue] = useState(0);
  
  const quantityField = useField(`quantity-${uniqueID}`)
  const priceField = useField(`price-${uniqueID}`)

  useEffect(() => {
    if (priceField.input.value || quantityField.input.value) {
      const newAmount = (quantityField.input.value || 0) * (priceField.input.value || 0);
      setAmountValue(newAmount)
    }
  }, [quantityField.input.value, priceField.input.value])

  useEffect(() => {
    if (onAmountDidChange) {
      onAmountDidChange(uniqueID, amountValue)
    }
  }, [amountValue])

  return (
    <div className='o-line-item disp-flex align-baseline' key={uniqueID}>
      <Field className='o-line-item-field' name={`item-${uniqueID}`} render={TextFieldInput} />
      <Field className='o-line-item-field' name={`description-${uniqueID}`} render={TextFieldInput} />
      <Field className='o-line-item-field' name={`quantity-${uniqueID}`} component={CurrencyInput} isWholeNumber />
      <Field className='o-line-item-field' name={`price-${uniqueID}`} component={CurrencyInput} />
      <Field className='o-line-item-field' name={`amount-${uniqueID}`} component={CurrencyInput} customValue={amountValue} readOnly />
      {onRemove && (
        <button className='o-line-item-remove-btn' onClick={() => onRemove(uniqueID)}>
          <img height={8} src={xSvg} />
        </button>
      )}
    </div>
  );
}

export default LineItem;
