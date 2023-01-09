import { Card } from '../../atoms/Card';
import { IconHeader } from '../../molecules/IconHeader';
import './LineItems.scss';
import { Icon } from '../../../shared/types/types';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import LineItem from '../LineItem/LineItem';
import classNames from 'classnames';
import uuid from 'react-uuid'
import { PriceCalculator } from '../PriceCalculator';
import { TextButton } from '../../molecules/TextButton';

interface LineItemsProps {
  className?: string;
}

const labels = [
  { label: "ITEMS", className: 'o-line-items-label-item' },
  { label: "DESCRIPTION", className: 'o-line-items-label-description' },
  { label: "QUANTITY", className: 'o-line-items-label-quantity' },
  { label: "UNIT PRICE ($)", className: 'o-line-items-label-price' },
  { label: "AMOUNT ($)", className: 'o-line-items-label-item-amount' }
];

function LineItems(props: LineItemsProps) {
  const { className } = props;
  const DEFAULT_ID = 'default';
  const [items, setItems] = useState(['default'])

  const addItem = () => {
    const uniqueID = uuid();
    const newItems = [...items, uniqueID]
    setItems(newItems)
  }

  const removeItem = ((uniqueID: string) => {
    const removeIndex = items.indexOf(uniqueID);
    const newItems = [...items]
    newItems.splice(removeIndex, 1)
    setItems(newItems)
  })

  return (
    <Card className={classNames(className, 'disp-flex flex-dir-column')}>
      <IconHeader headerText='Line items' icon={'package'} />
      <div className='o-line-items-header'>
        {labels.map(label => (
          <span key={label.label} className={classNames(label.className, "o-line-items-label")}>
            {label.label}
          </span>
        ))}
      </div>
      {items.map(uniqueID => (
        <LineItem key={uniqueID} uniqueID={uniqueID} {...(uniqueID !== DEFAULT_ID ? { onRemove: removeItem } : {})} />
      ))}
      <TextButton className='o-line-items-new-line-btn' onClick={addItem} text="+ Add new line" />
      <PriceCalculator className='o-line-items-price-calculator' />
    </Card>
  );
}

export default LineItems;
