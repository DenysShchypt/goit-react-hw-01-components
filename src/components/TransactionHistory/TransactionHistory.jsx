import PropTypes from 'prop-types';
import { TbodyTabl, TdAmount, TdCurrency, TdType, ThAmountHead, ThCurrencyHead, ThTypeHead, Thead, TrHead, TrKey, TransactionHistoryCss } from "./TransactionHistory.styled";


export const TransactionHistory = ({items}) => {

  return (
    <TransactionHistoryCss>
    <Thead>
      <TrHead>
        <ThTypeHead>Type</ThTypeHead>
        <ThAmountHead>Amount</ThAmountHead>
        <ThCurrencyHead>Currency</ThCurrencyHead>
      </TrHead>
    </Thead>
  
    <TbodyTabl>
    {items.map(({id,type,amount,currency}) =>
        (
            <TrKey key={id}>
            <TdType>{type}</TdType>
            <TdAmount>{amount}</TdAmount>
            <TdCurrency>{currency}</TdCurrency>
          </TrKey>
      ))}
    </TbodyTabl>
  </TransactionHistoryCss>
  )
};

TransactionHistory.propTypes = {
  items:PropTypes.array,
};
