import { FriendsList } from "./FriendList/FriendList"
import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"

import user from "./Profile/user.json"
import friends from "./FriendList/friends.json"
import dataStatistics from "./Statistics/data.json"
import transactions from "./TransactionHistory/transactions.json"

function App(){
  return <div>
    <Profile user={user}/>
    <FriendsList friends={friends}/>
    <Statistics dataStatistics={dataStatistics}/>
    <TransactionHistory transactions={transactions}/>
  </div>
}

export default App