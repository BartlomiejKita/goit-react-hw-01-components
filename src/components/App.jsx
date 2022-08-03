import Profile from './Profile';
import user from './data/user.json';
import Statistics from './Statistics';
import data from './data/data-s.json';
import FriendList from './FriendList';
import friends from './data/friends.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />,
    </>
  );
};
