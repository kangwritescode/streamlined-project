import './Card.scss';
import classNames from 'classnames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card(props: CardProps) {
  const {children, className} = props;
  return (
    <div className={classNames(className, "a-card")}>
      {children}
    </div>
  );
}

export default Card;
