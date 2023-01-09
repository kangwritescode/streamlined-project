import classNames from 'classnames';
import { FieldRenderProps } from 'react-final-form';
import './TextFieldInput.scss';

interface TextFieldInputProps extends FieldRenderProps<string, any> {
  className?: string;
}

function TextFieldInput(props: TextFieldInputProps) {
  const { className, input, meta } = props;

  const hasError = (meta.error || meta.submitError) && meta.touched;
  return (
    <div className='disp-flex flex-dir-column align-baseline'>
      <input className={classNames(className, 'm-text-input', {
        'm-text-input--error': hasError
      })} {...input} />
      {(hasError &&
        <span className='m-text-input-error'>{meta.error || meta.submitError}</span>
      )}
    </div>
  );
}

export default TextFieldInput;
