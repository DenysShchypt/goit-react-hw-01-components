import styled from 'styled-components';

export const FriendListCss = styled.ul`
width: 350px;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
list-style: none;`;

export const Item = styled.li`
&:not(:last-child){
margin-bottom: 20px;
};
display: flex;
align-items:center;
background:white;
border-radius:5px;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const Status = styled.span`
display:block;
background:${(color) => (color.color==='true' ? 'green' : 'red')};
height: 15px;
width: 15px;
border-radius:50%;
margin-left: 10px;`;

export const Avatar = styled.img`
margin: 5px;
padding: 5px;
border-radius:5px;
background:#e3e3e3;`;

export const Name = styled.p`
margin-left: 15px;
font-weight: 700;
font-size: 20px;
line-height: 1;
letter-spacing: 0.02em;`;