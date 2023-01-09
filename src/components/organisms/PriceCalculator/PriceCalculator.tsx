import './PriceCalculator.scss';
import classNames from 'classnames';
import { Field, useField } from 'react-final-form';
import { CurrencyInput } from '../../molecules/CurrencyInput';
import { DiscountButton } from '../../molecules/DiscountButton';
import { useEffect, useState } from 'react';
import { TextButton } from '../../molecules/TextButton';
import { DiscountType } from '../../../shared/types/types';

interface PriceCalculatorProps {
  className?: string;
  subtotal: number;
}

function PriceCalculator(props: PriceCalculatorProps) {
  const { className, subtotal } = props;

  const discountField = useField('discount')
  const shippingField = useField('shipping')
  const taxField = useField('tax')

  const [showFull, setShowFull] = useState(false);
  const [discountType, setDiscountType] = useState<DiscountType>('dollar');
  const [totalAmount, setTotal] = useState(0)

  const applyDiscount = (subtotal: number, discount: number) => {
    let newSubtotal = subtotal;
    if (discountType === 'percentage' && discount) {
      discount = newSubtotal * (discount * .01)
      newSubtotal = Math.max(0, newSubtotal - discount)
    } else {
      newSubtotal = Math.max(0, newSubtotal - discount)
    }
    return newSubtotal
  }

  useEffect(() => {
    if (subtotal) {
      const shipping = Number(shippingField.input.value);
      const tax = Number(taxField.input.value)
      let discount = (discountType === 'dollar') ? Number(discountField.input.value) : Number(String(discountField.input.value).slice(0, -2))

      let newSubtotal = applyDiscount(subtotal, discount);
      newSubtotal = newSubtotal + shipping + tax;

      setTotal(newSubtotal)
    } else {
      setTotal(0)
    }
  }, [subtotal, discountField.input.value, shippingField.input.value, taxField.input.value])

  const priceCalculatorClasses = classNames(className, 'o-price-calculator', {
    'o-price-calculator--full': showFull
  })
  const labelClasses = classNames('o-price-calculator-label', {
    'o-price-calculator-label--full': showFull
  })
  const fieldClasses = classNames('o-price-calculator-field', {
    'o-price-calculator-field--full': showFull,
  })
  const textButtonClasses = classNames('o-price-calculator-text-button', {
    'o-price-calculator-text-button--full': showFull
  })
  const discountButtonClasses = classNames('o-price-calculator-discount-button', {
    'o-price-calculator-discount-button--percentage': discountType === 'percentage'
  })
  const dollarSignClasses = classNames('o-price-calculator-dollar-sign', {
    'o-price-calculator-dollar-sign--percentage': discountType === 'percentage'
  })

  return (
    <div className={priceCalculatorClasses}>
      <span className={labelClasses}>Subtotal</span>
      <span className={labelClasses}>Discount</span>
      <span className={labelClasses}>Shipping</span>
      <span className={labelClasses}>Tax</span>
      <span className={labelClasses}>Total</span>
      <Field className={fieldClasses} name='subtotal' component={CurrencyInput} prefix="$" customValue={subtotal} readOnly />
      <Field className={fieldClasses} name='discount' component={CurrencyInput} {...(discountType === 'percentage' ? { suffix: " %" } : {})} />
      <Field className={fieldClasses} name='shipping' component={CurrencyInput} />
      <Field className={fieldClasses} name='tax' component={CurrencyInput} />
      <Field className={fieldClasses} name='total' component={CurrencyInput} prefix="$" customValue={totalAmount} readOnly />
      <TextButton className={textButtonClasses} text="Add discount" onClick={() => setShowFull(true)} />
      <TextButton className={textButtonClasses} text="Add shipping" onClick={() => setShowFull(true)} />
      <TextButton className={textButtonClasses} text="Add tax" onClick={() => setShowFull(true)} />
      {showFull && (
        <>
          <span className={dollarSignClasses}>$</span>
          <span className={dollarSignClasses}>$</span>
          <span className={dollarSignClasses}>$</span></>
      )}
      <div className='o-price-calculator-divider' />
      {showFull ?
        (<DiscountButton
          className={discountButtonClasses}
          discountType={discountType}
          onClickDiscountType={(discountType: DiscountType) => setDiscountType(discountType)} />)
        : undefined}
    </div>
  );
}

export default PriceCalculator;
