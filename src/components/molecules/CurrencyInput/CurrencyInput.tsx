import { FieldRenderProps } from 'react-final-form';
import { NumericFormat } from 'react-number-format';
import './CurrencyInput.scss';

interface CurrencyInputProps extends FieldRenderProps<string, any> {
  isWholeNumber?: boolean;
}

function CurrencyInput(props: CurrencyInputProps) {
  const { isWholeNumber } = props;
  return (
    <NumericFormat
      className='m-currency-input'
      thousandSeparator=","
      {...(isWholeNumber ? undefined : { decimalScale: 2 })}
      fixedDecimalScale={true}
      allowNegative={false}
      autoComplete="off"
      onBlur={props.input.onBlur}
      onFocus={props.input.onFocus}
      onChange={value => props.input.onChange(value)}
      onValueChange={({ formattedValue }) =>
        props.input.onChange(formattedValue)
      }
      value={props.input.value}
    />
  );
}

export default CurrencyInput;
