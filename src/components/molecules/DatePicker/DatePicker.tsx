import './DatePicker.scss';
import { FieldRenderProps } from 'react-final-form';
import classNames from 'classnames';

interface DatePickerProps extends FieldRenderProps<string, any> { }

function DatePicker(props: DatePickerProps) {
  const { input, meta } = props;
  const hasError = (meta.error || meta.submitError) && meta.touched;
  return (
    <div className={classNames('m-date-picker-container disp-flex flex-dir-column align-baseline')}>
      <input className={classNames('m-date-picker', {
        "m-date-picker--error": hasError
      })} {...input} type="date" />
      {(hasError &&
        <span className='m-date-picker-error'>{meta.error || meta.submitError}</span>
      )}
    </div>
  );
}

export default DatePicker;
