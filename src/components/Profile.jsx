import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin: auto;
  max-width: 280px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #a2b9bc;
  border-radius: 5px;
  margin-bottom: 30px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  padding: 30px;
  border-bottom: 1px solid #a2b9bc;
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  background-color: #c2d4dd;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;

const Tag = styled.p`
  margin: 5px 0;
  color: #a2b9bc;
`;

const Location = styled.p`
  margin: 5px 0;
  color: #a2b9bc;
  font-weight: bold;
`;

const Stats = styled.ul`
  list-style: none;
  display: flex;
  background-color: #f0f0f0;
  margin: 0px;
  padding: 0px;
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  padding: 20px 5px;
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid #a2b9bc;
  }
`;

const Label = styled.span`
  margin-bottom: 5px;
  color: #a2b9bc;
  text-transform: capitalize;
`;

const Qantity = styled.span`
  color: black;
  font-weight: bold;
`;

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <List>
          <Label>{Object.keys(stats)[0]}</Label>
          <Qantity>{stats.followers}</Qantity>
        </List>
        <List>
          <Label>{Object.keys(stats)[1]}</Label>
          <Qantity>{stats.views}</Qantity>
        </List>
        <List>
          <Label>{Object.keys(stats)[2]}</Label>
          <Qantity>{stats.likes}</Qantity>
        </List>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
