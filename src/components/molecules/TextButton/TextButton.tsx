import './TextButton.scss';
import classNames from 'classnames';

interface TextButtonProps {
  className?: string;
  onClick?: () => void
  text: string;
}

function TextButton(props: TextButtonProps) {
  const { className, onClick, text } = props;
  return (
    <button className={classNames(className, 'm-text-button')} onClick={onClick} type="button">
      {text}
    </button>
  );
}

export default TextButton;
