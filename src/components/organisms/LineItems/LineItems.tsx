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
import { useField } from 'react-final-form';

interface LineItemsProps {
  className?: string;
  lineItemsDidUpdate?: (lineItems: any) => void;
}

const labels = [
  { label: "ITEMS", className: 'o-line-items-label-item' },
  { label: "DESCRIPTION", className: 'o-line-items-label-description' },
  { label: "QUANTITY", className: 'o-line-items-label-quantity' },
  { label: "UNIT PRICE ($)", className: 'o-line-items-label-price' },
  { label: "AMOUNT ($)", className: 'o-line-items-label-item-amount' }
];

function LineItems(props: LineItemsProps) {
  const { className, lineItemsDidUpdate } = props;

  const DEFAULT_ID = 'default';
  const [itemIds, setItemIds] = useState(['default'])
  const [amounts, setAmounts] = useState({})
  const [items, setItems] = useState({})
  const [subtotal, setSubtotal] = useState(0);

  const addItem = () => {
    const uniqueID = uuid();
    const newItems = [...itemIds, uniqueID]
    setItemIds(newItems)
  }

  const removeItem = ((uniqueID: string) => {
    const removeIndex = itemIds.indexOf(uniqueID);
    const newItems = [...itemIds]
    newItems.splice(removeIndex, 1)
    setItemIds(newItems)
  })

  useEffect(() => {
    if (lineItemsDidUpdate) {
      lineItemsDidUpdate(items)
    }
  }, [items])

  // delete amount from amounts state if line deleted
  useEffect(() => {
    for (let oldID of Object.keys(amounts)) {
      if (!itemIds.includes(oldID)) {
        const newAmounts: any = { ...amounts }
        delete newAmounts[oldID]
        setAmounts(newAmounts)
      }
    }
  }, [itemIds])

  // delete item from items state if item deleted
  useEffect(() => {
    for (let oldID of Object.keys(items)) {
      if (!itemIds.includes(oldID)) {
        const newItems: any = { ...items }
        delete newItems[oldID]
        setItems(newItems)
      }
    }
  }, [itemIds])

  // when a row's amount changes, update the amounts state
  const updateAmounts = (uniqueID: string, amount: number) => {
    const newAmounts = {
      ...amounts,
      [uniqueID]: amount
    }
    setAmounts(newAmounts)
  }

  // when a row's items data changes, update the items state
  const updateItems = (uniqueID: string, updatedItem: any) => {
    const newItems: any = {
      ...items,
      [uniqueID]: updatedItem
    }
    setItems(newItems)
  }

  // recalculate subtotal when any amount changes
  useEffect(() => {
    let newSubtotal = 0;
    for (let amount of Object.values(amounts)) {
      newSubtotal = newSubtotal + Number(amount)
    }
    setSubtotal(newSubtotal)
  }, [amounts])

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
      {itemIds.map(uniqueID => (
        <LineItem
          key={uniqueID} uniqueID={uniqueID}
          onAmountDidChange={updateAmounts}
          onItemDidUpdate={updateItems}
          {...(uniqueID !== DEFAULT_ID ? { onRemove: removeItem } : {})} />
      ))}
      <TextButton className='o-line-items-new-line-btn' onClick={addItem} text="+ Add new line" />
      <PriceCalculator className='o-line-items-price-calculator' subtotal={subtotal} />
    </Card>
  );
}

export default LineItems;
