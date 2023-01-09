import './IconButton.scss';
import checkSvg from './check.svg';

interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
}

function IconButton(props: IconButtonProps) {
  const { text, ...otherProps } = props;
  return (
    <button className="b-icon disp-flex align-center" {...otherProps} type='submit'>
      <img className="b-icon-check" height={15} src={checkSvg} />
      {text}
    </button>
  );
}

export default IconButton;
