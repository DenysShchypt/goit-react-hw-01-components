import styled from 'styled-components';

export const Statistic = styled.section`
width: 500px;
padding-top: 20px;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
background: white;
`;

export const Heading = styled.h2`
margin-bottom: 20px;
font-weight: 700;
font-size: 20px;
line-height: 1.11;
letter-spacing: 0.02em;
text-align:center;
text-transform:uppercase;`;

export const StatList = styled.ul`
display: flex;
justify-content: center;
padding: 0;
list-style: none;
`;

export const Item = styled.li`
width: calc(100% / 5);
padding: 15px 0;
background:${color => color.color};`;

export const LabelCss = styled.span`
display: block;
text-align:center;
margin-bottom: 5px;
font-weight: 500;
font-size: 15px;
line-height: 1;
letter-spacing: 0.02em;
color:#e3e3e3;`;

export const PercentageCss = styled.span`
display: block;
text-align:center;
font-weight: 700;
font-size: 25px;
line-height: 1;
letter-spacing: 0.02em;
color:#e3e3e3;`;


