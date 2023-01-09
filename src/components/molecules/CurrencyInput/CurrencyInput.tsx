import classNames from 'classnames';
import { FieldRenderProps } from 'react-final-form';
import { NumericFormat } from 'react-number-format';
import './CurrencyInput.scss';

interface CurrencyInputProps extends FieldRenderProps<string, any> {
  className?: string;
  isWholeNumber?: boolean;
  prefix?: string;
  readOnly?: boolean;
  suffix?: string;
  customValue?: number;
}

function CurrencyInput(props: CurrencyInputProps) {
  const { className, customValue, isWholeNumber, prefix, meta, readOnly, suffix } = props;
  const hasError = (meta.error || meta.submitError) && meta.touched && !customValue;
  return (
    <div className={classNames(className, 'disp-flex flex-dir-column align-baseline')}>
      <NumericFormat
        className={classNames('m-currency-input', {
          'm-currency-input--error': hasError
        })}
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
        {...(prefix ? { prefix: prefix } : {})}
        {...(suffix ? { suffix: suffix } : {})}
        readOnly={readOnly}
        value={customValue || props.input.value}
      />
      {(hasError &&
        <span className='m-currency-input-error'>{meta.error || meta.submitError}</span>
      )}
    </div>
  );
}

export default CurrencyInput;
