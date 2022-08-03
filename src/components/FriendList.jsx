import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.ul`
  max-width: 280px;
  width: 100%;
  list-style: none;
  margin: 0px auto;
  padding: 0px;
`;

const Item = styled.li`
  display: flex;
  margin-bottom: 30px;
  padding: 15px;
  box-shadow: 5px 5px 18px 0px rgba(66, 68, 90, 1);
`;

const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  align-self: center;
  margin: 0 15px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
  margin-right: 15px;
`;

const Name = styled.p`
  font-weight: bold;
`;

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Status isOnline={isOnline}></Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
