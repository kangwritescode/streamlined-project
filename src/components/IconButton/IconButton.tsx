import './IconButton.scss';
import checkSvg from './check.svg';

interface IconButtonProps { }

function IconButton(props: IconButtonProps) {
  return (
    <button className="b-icon disp-flex align-center">
      <img className="b-icon-check" height={15} src={checkSvg} />
      Save
    </button>
  );
}

export default IconButton;
