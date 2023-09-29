import PropTypes from 'prop-types';
import { Avatar, Description, ItemLi, Label, Location, Name, Profiler, Quantity, Stats, Tag } from "./Profile.styled";

export const Profile = ({username,tag,location,avatar,stats})=>(
    <Profiler>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <ItemLi>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </ItemLi>
    <ItemLi>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </ItemLi>
    <ItemLi>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </ItemLi>
  </Stats>
</Profiler>
);

Profile.propTypes = {
  username:PropTypes.string,
  tag:PropTypes.string,
  location:PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.object,
};