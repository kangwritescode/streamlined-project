import './DiscountButton.scss';
import { CircleIcon } from '../CircleIcon';
import { DiscountType, Icon } from '../../../shared/types/types';
import classNames from 'classnames';

interface DiscountButtonProps {
  className?: string;
  discountType: DiscountType;
  onClickDiscountType: (discountType: DiscountType) => void;
}

function DiscountButton(props: DiscountButtonProps) {
  const { className, discountType, onClickDiscountType } = props;


  return (
    <div className={classNames(className, 'm-discount-button-container disp-flex')}>
      <button className={classNames('m-discount-button-btn', {
        'm-discount-button-btn--selected': discountType === 'dollar'
      })} onClick={() => onClickDiscountType('dollar')}
        type='button'>
        $
      </button>
      <button className={classNames('m-discount-button-btn', {
        'm-discount-button-btn--selected': discountType === 'percentage'
      })} onClick={() => onClickDiscountType('percentage')}
        type='button'>
        %
      </button>
    </div>
  );
}

export default DiscountButton;
