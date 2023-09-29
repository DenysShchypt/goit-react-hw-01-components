import styled from 'styled-components';

export const TransactionHistoryCss = styled.table`
width: 500px;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
background: white;
border: 1px solid #cccccc;
border-collapse: collapse;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);`;

export const Thead = styled.thead`
background-color: #1c87c9;
color: #ffffff;`;

export const TrHead = styled.tr`
text-align: center;
height: 40px;`;

export const ThTypeHead = styled.th`
text-align: center;
padding:10px 0;
border-right: 1px solid #cbcbcb;`;

export const ThAmountHead = styled.th`
border-right: 1px solid #cbcbcb;
text-align: center;
padding:10px 0;`;

export const ThCurrencyHead = styled.th`
text-align: center;
padding:10px 0;`;

export const TbodyTabl = styled.tbody`
border-collapse: collapse;`;

export const TrKey = styled.tr`
&:nth-child(2n) {
  background-color: #dddddd;
}
text-align: center;
height: 30px;`;

export const TdType = styled.td`
padding: 5px;
font-weight: 500;
font-size: 15px;
line-height: 0.5;
letter-spacing: 0.02em;
border-right: 1px solid #cbcbcb;
color:#585656;`;

export const TdAmount = styled.td`
padding: 5px;
font-weight: 500;
font-size: 15px;
line-height: 0.5;
letter-spacing: 0.02em;
border-right: 1px solid #cbcbcb;
color:#585656;`;

export const TdCurrency = styled.td`
padding: 5px;
font-weight: 500;
font-size: 15px;
line-height: 0.5;
letter-spacing: 0.02em;
color:#585656;`;