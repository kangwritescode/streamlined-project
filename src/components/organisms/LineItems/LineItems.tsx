import { Card } from '../../atoms/Card';
import { IconHeader } from '../../molecules/IconHeader';
import './LineItems.scss';
import { Icon } from '../../../shared/types/types';
import { useState } from 'react';
import LineItem from '../LineItem/LineItem';

interface LineItemsProps {
  className?: string;
}

const labels = ["ITEMS", "DESCRIPTION", "QUANTITY", "UNIT PRICE ($)", "AMOUNT ($)"];

function LineItems(props: LineItemsProps) {
  const { className } = props;
  const [rowCount, setRowCount] = useState(1);

  const rows = [];

  for (let i = 0; i < rowCount; i += 1) {
    rows.push(<LineItem row={i} />)
  }

  return (
    <Card className={className}>
      <IconHeader headerText='Line items' icon={Icon.PACKAGE} />
      <div className="o-line-items-grid">
        {labels.map(label => <div className="o-line-items-label">{label}</div>)}
        {rows}
      </div>
    </Card>
  );
}

export default LineItems;
