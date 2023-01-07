import './IconHeader.scss';
import { CircleIcon } from '../CircleIcon';
import { Icon } from '../../../shared/types/types';

interface IconHeaderProps {
  headerText: string;
  icon?: Icon;
}

function IconHeader(props: IconHeaderProps) {
  const { headerText, icon } = props;
  return (
    <div className='o-payment-terms-header-wrapper disp-flex align-center'>
      <CircleIcon className='o-payment-terms-circle-icon' icon={icon} />
      <h3 className='o-payment-terms-header'>{headerText}</h3>
    </div>
  );
}

export default IconHeader;
