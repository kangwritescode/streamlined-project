import { FieldRenderProps } from 'react-final-form';
import './TextFieldInput.scss';

interface TextFieldInputProps extends FieldRenderProps<string, any> { }

function TextFieldInput(props: TextFieldInputProps) {
  const { input, meta } = props;
  return (
    <input className='m-text-input' {...input} {...meta} />
  );
}

export default TextFieldInput;
