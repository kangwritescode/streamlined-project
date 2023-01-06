import './CircleIcon.scss';
import calendarSvg from './calendar.svg';
import shippingbox from './shippingbox.svg';
import classNames from 'classnames';

interface CircleIconProps {
  icon?: 'calendar' | 'icon';
  className?: string;
}

function CircleIcon(props: CircleIconProps) {
  const { className, icon = 'calendar' } = props;
  return (
    <div className={classNames(className, 'm-circle-icon')}>
      <img src={icon === 'calendar' ? calendarSvg : shippingbox} height={16} />
    </div>
  );
}

export default CircleIcon;
