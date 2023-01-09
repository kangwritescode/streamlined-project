import './PriceCalculator.scss';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import { CurrencyInput } from '../../molecules/CurrencyInput';
import { DiscountButton } from '../../molecules/DiscountButton';
import { useState } from 'react';
import { TextButton } from '../../molecules/TextButton';
import { DiscountType } from '../../../shared/types/types';

interface PriceCalculatorProps {
  className?: string;
}

function PriceCalculator(props: PriceCalculatorProps) {
  const { className } = props;
  const [showFull, setShowFull] = useState(false);
  const [discountType, setDiscountType] = useState<DiscountType>('dollar');

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
      <Field className={fieldClasses} name='subtotal' component={CurrencyInput} prefix="$" />
      <Field className={fieldClasses} name='discount' component={CurrencyInput} {...(discountType === 'percentage' ? { suffix: " %" } : {})} />
      <Field className={fieldClasses} name='shipping' component={CurrencyInput} />
      <Field className={fieldClasses} name='tax' component={CurrencyInput} />
      <Field className={fieldClasses} name='total' component={CurrencyInput} prefix="$" />
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
