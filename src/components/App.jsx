import Profile from './profile/Profile'
import Statistics from './statistics/Statistics'  
import FriendList from './friend_list/FriendList'  
import Transactions from './transactions/Transactions'  
import user from '../users/user.json'
import data from '../data/data.json'
import friends from '../friend_list/friends.json'
import transactions from '../transactions/transactions.json'
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40, 
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics
        key={data.id}
        title={data.title}
        stats={data} />
      <FriendList
        friends={friends}
      />
      <Transactions
        items={ transactions} />
    </div>
  );
};
