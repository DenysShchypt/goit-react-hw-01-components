import PropTypes from 'prop-types';
import { Avatar, FriendListCss, Item, Name, Status } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <FriendListCss>
      {friends.map(({id,isOnline,avatar,name}) =>
        (
        <Item key={id}>
          <Status color={isOnline?'true':'false'}></Status>
          <Avatar
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <Name>{name}</Name>
        </Item>
      ))}
    </FriendListCss>
  );
};

FriendList.propTypes = {
    isOnline:PropTypes.bool,
    id:PropTypes.number,
    avatar:PropTypes.string,
    name:PropTypes.string,

  };