import './CircleIcon.scss';
import calendarSvg from './calendar.svg';
import shippingbox from './shippingbox.svg';
import classNames from 'classnames';
import { Icon } from '../../../shared/types/types';

interface CircleIconProps {
  icon?: Icon;
  className?: string;
}

function CircleIcon(props: CircleIconProps) {
  const { className, icon = 'CALENDAR' } = props;
  return (
    <div className={classNames(className, 'm-circle-icon')}>
      <img src={icon === 'CALENDAR' ? calendarSvg : shippingbox} height={16} />
    </div>
  );
}

export default CircleIcon;
