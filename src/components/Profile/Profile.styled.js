import styled from 'styled-components';

export const Profiler = styled.div`
width: 350px;
padding-top: 25px;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
background: white;`;

export const Description = styled.div`
margin-bottom: 40px;
text-align:center;`;

export const Avatar = styled.img`
width: 200px;
height: 200px;
border-radius:50%;
border:1px solid #999;`;

export const Name = styled.p`
margin-bottom: 15px;
font-weight: 700;
font-size: 20px;
line-height: 1;
letter-spacing: 0.02em;`;

export const Tag = styled.p`
margin-bottom: 15px;
font-weight: 500;
font-size: 16px;
line-height: 0.5;
letter-spacing: 0.02em;`;

export const Location = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 0.5;
letter-spacing: 0.02em;`;

export const Stats = styled.ul`
position: relative;
display:flex;
justify-content: center;
padding: 0;
padding-bottom: 20px;
padding-top: 10px;
border:1px solid #999;
list-style: none;
text-align:center;
background: #e3e3e3;`;

export const ItemLi = styled.li`
width: calc((100% - 20px) / 3);
&:not(:last-child)::after {
content: ' ';
position: absolute;
margin-left: 20px;
top:32px;
width: 64px;
border: 1px solid white;
transform: rotate(90deg);}`;

export const Label = styled.span`
display: block;
margin-bottom: 5px;
font-weight: 500;
font-size: 16px;
line-height: 1;
letter-spacing: 0.02em;`;

export const Quantity = styled.span`
display: block;
text-align:center;
font-weight: 700;
font-size: 15px;
line-height: 1;
letter-spacing: 0.02em;`;
